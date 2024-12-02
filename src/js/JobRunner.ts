/**
 * Runs async tasks concurrently, witch a max concurrency limit and retries
 */
export class JobRunner {
  maxConcurrency: number;

  retries: number;

  jobQueue: Array<{
    retriesLeft: number;
    job: () => Promise<unknown>;
  }> = [];

  runningJobsCount = 0;

  // jobs that have been run including retries
  completedRunsCount = 0;

  // jobs that have been run successfully
  successJobsCount = 0;

  totalJobCount = 0;

  successMessages: string[] = [];

  errorMessages: string[] = [];

  constructor(maxConcurrency = 3, retries = 3) {
    this.maxConcurrency = maxConcurrency;
    this.retries = retries;
    this.jobQueue = [];
    this.runningJobsCount = 0;
  }

  addJob<T>(job: () => Promise<T>) {
    this.jobQueue.push({ job, retriesLeft: this.retries });
    this.totalJobCount += 1;
  }

  async runJobs(): Promise<{
    successJobs: number;
    successMessages: string[];
    errors: string[];
  }> {
    return new Promise((resolve) => {
      const checkCompletion = () => {
        if (this.completedRunsCount === this.totalJobCount) {
          resolve({
            successJobs: this.successJobsCount,
            successMessages: this.successMessages,
            errors: this.errorMessages,
          });
        }
      };

      const runJob = async () => {
        checkCompletion();
        while (
          this.jobQueue.length &&
          this.runningJobsCount < this.maxConcurrency
        ) {
          const item = this.jobQueue.shift();
          if (item?.job) {
            this.runningJobsCount += 1;
            item
              .job()
              .then((result) => {
                this.successMessages.push(String(result));
                this.successJobsCount += 1;
              })
              .catch((e) => {
                item.retriesLeft -= 1;
                if (item.retriesLeft > 0) {
                  this.jobQueue.push(item);
                  this.totalJobCount += 1;
                } else {
                  this.errorMessages.push(String(e));
                }
              })
              .finally(() => {
                this.completedRunsCount += 1;
                this.runningJobsCount -= 1;
                checkCompletion();
                runJob();
              });
          }
        }
      };

      runJob();
    });
  }
}
