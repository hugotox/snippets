(function () {
  const isNoindexTag = document
    .querySelector('meta[name="robots"]')
    .getAttribute("content")
    .includes("noindex");
  const canonical = document
    .querySelector('link[rel="canonical"]')
    .getAttribute("href");
  const currentUrl = window.location.href;
  const isSelfRefCanonical = canonical === currentUrl;
  const isIndexable = isSelfRefCanonical && !isNoindexTag;
  console.log({
    isSelfRefCanonical,
    isNoindexTag,
    isIndexable,
  });
})();
