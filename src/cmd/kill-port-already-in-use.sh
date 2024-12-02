sudo lsof -t -i tcp:8088 | xargs kill -9

sudo lsof -t -i tcp:8310 | xargs kill -9

sudo lsof -t -i tcp:5175 | xargs kill -9
