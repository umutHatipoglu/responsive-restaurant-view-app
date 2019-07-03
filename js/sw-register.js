/* service worker setting */
if ('serviceWorker' in navigator) {
    navigator.serviceWorker
    .register('/sw.js', {scope: "/"})
      .then(reg => {
        console.log('SW successful registration and scope: ' + reg.scope);
      })
      .catch(error => {
        console.log('SW fails registration and error: ' + error);
      });
  }