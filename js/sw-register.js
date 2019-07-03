/* service worker setting */
if ('serviceWorker' in navigator) {
    navigator.serviceWorker
    .register('/sw.js', {scope: "/"})
      .then(item => {
        console.log('SW successful registration and scope: ' + item.scope);
      })
      .catch(error => {
        console.log('SW fails registration and error: ' + error);
      });
  }