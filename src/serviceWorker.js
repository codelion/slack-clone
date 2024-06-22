// This optional code is used to register a service worker.
// register() is not called by default.

// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.

// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA

const isLocalhost = Boolean(
  window.location.hostname === 'localhost' ||
    // [::1] is the IPv6 localhost address.
    window.location.hostname === '[::1]' ||
    // 127.0.0.0/8 are considered localhost for IPv4.
    window.location.hostname.match(
      /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
    )
);

/**
 * This function registers a service worker in a production environment.
 * It checks if the environment is production and if the browser supports service worker.
 * If the PUBLIC_URL and the page's origin are not the same, 
 * it returns without registering the service worker.
 * This function also contains an event listener for the page's onload event,
 * which checks and registers a service worker if one is present.
 * 
 * @param {Object} config - The configuration for the service worker.
 */
export function register(config) {
  if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
    // The URL constructor is available in all browsers that support SW.
    const publicUrl = new URL(process.env.PUBLIC_URL, window.location.href);
    if (publicUrl.origin !== window.location.origin) {
      // Our service worker won't work if PUBLIC_URL is on a different origin
      // from what our page is served on. This might happen if a CDN is used to
      // serve assets; see https://github.com/facebook/create-react-app/issues/2374
      return;
    }

    window.addEventListener('load', () => {
      const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;

      if (isLocalhost) {
        // This is running on localhost. Let's check if a service worker still exists or not.
        checkValidServiceWorker(swUrl, config);

        // Add some additional logging to localhost, pointing developers to the
        // service worker/PWA documentation.
        navigator.serviceWorker.ready.then(() => {
          console.log(
            'This web app is being served cache-first by a service ' +
              'worker. To learn more, visit https://bit.ly/CRA-PWA'
          );
        });
      } else {
        // Is not localhost. Just register service worker
        registerValidSW(swUrl, config);
      }
    });
  }
}

/**
 * This function attempts registration of a service worker using a specified url.
 * Once registration is successful, the function checks for updates
 * and, if found, logs the state of the worker.
 * The function also executes specified onSuccess and onUpdate callbacks
 * based on the current state of the service worker.
 * Can catch and log any error occurred during the registration process.
 * 
 * @param {string} swUrl - The URL where the service worker to be registered is located.
 * @param {object} config - Config object with callback functions for onSuccess and onUpdate events.
 *                          Each function, if present, will be invoked with the Service Worker registration
 *                          as a parameter.
 * 
 * The config object structure:
 * config = {
 *   onSuccess: fun(registration), // callback function to execute when service worker installed and no controller present
 *   onUpdate: fun(registration),  // callback function to execute when service worker installed and there is a controller
 * }
 */
function registerValidSW(swUrl, config) {
  navigator.serviceWorker
    .register(swUrl)
    .then((registration) => {
      registration.onupdatefound = () => {
        const installingWorker = registration.installing;
        if (installingWorker == null) {
          return;
        }
        installingWorker.onstatechange = () => {
          if (installingWorker.state === 'installed') {
            if (navigator.serviceWorker.controller) {
              console.log(
                'New content is available and will be used when all ' +
                  'tabs for this page are closed. See https://bit.ly/CRA-PWA.'
              );

              if (config && config.onUpdate) {
                config.onUpdate(registration);
              }
            } else {
              console.log('Content is cached for offline use.');

              if (config && config.onSuccess) {
                config.onSuccess(registration);
              }
            }
          }
        };
      };
    })
    .catch((error) => {
      console.error('Error during service worker registration:', error);
    });
}

/**
 * Checks if the service worker can be found and if so, registers it. 
 * If the service worker is not found or is not serving a Javascript file, 
 * it reloads the page. If there is no internet connection, the app will run in offline mode.
 *
 * @param {string} swUrl - The URL of the service worker to register.
 * @param {Object} config - Configurations for service worker.
 */ 
function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl, {
    headers: { 'Service-Worker': 'script' },
  })
    .then((response) => {
      // Ensure service worker exists, and that we really are getting a JS file.
      const contentType = response.headers.get('content-type');
      if (
        response.status === 404 ||
        (contentType != null && contentType.indexOf('javascript') === -1)
      ) {
        // No service worker found. Probably a different app. Reload the page.
        navigator.serviceWorker.ready.then((registration) => {
          registration.unregister().then(() => {
            window.location.reload();
          });
        });
      } else {
        // Service worker found. Proceed as normal.
        registerValidSW(swUrl, config);
      }
    })
    .catch(() => {
      console.log(
        'No internet connection found. App is running in offline mode.'
      );
    });
}

/**
 * This function is used to unregister a service worker if it exists.
 *
 * The function checks if 'serviceWorker' is a property in 'navigator' object.
 * If 'serviceWorker' exists, the function waits until the service worker is ready,
 * then unregister the service worker.
 */
export function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then((registration) => {
      registration.unregister();
    });
  }
}
     *
     * The `navigator.serviceWorker.ready` promise is fulfilled when the service worker controlling
     * page or the previous worker has finished installing and a new worker can start controlling
     * it. After the promise is resolved, the service worker registration is obtained and the worker
     * is unregistered using `registration.unregister()`.
     */
    navigator.serviceWorker.ready.then((registration) => {
      registration.unregister(); // this will unregister the service worker
    });
  }
}
