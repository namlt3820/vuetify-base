export default {
    methods: {
        initFacebookSDK() {
            // Facebook auth
            window.fbAsyncInit = function() {
                window.FB.init({
                    appId: '333519197056142',
                    autoLogAppEvents: true,
                    xfbml: true,
                    version: 'v3.1'
                });
            };
            // Load the SDK asynchronously
            (function(d, s, id) {
                let js;
                const fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id)) return;
                js = d.createElement(s);
                js.id = id;
                js.src = 'https://connect.facebook.net/en_US/sdk.js';
                fjs.parentNode.insertBefore(js, fjs);
            })(document, 'script', 'facebook-jssdk');
        },
        initGoogleSDK() {
            // Google auth
            window.handleClientLoad = function() {
                window.gapi.load('client:auth2', window.initClient);
            };
            window.initClient = function() {
                window.gapi.client
                    .init({
                        apiKey: 'AIzaSyBCvfxH0P0VXo8wny4vTypdbS59SuL3DfU',
                        discoveryDocs: [
                            'https://www.googleapis.com/discovery/v1/apis/drive/v3/rest'
                        ],
                        clientId:
                            '23076346900-qge23rgushg9mvdrtuo46pr5t4aanqj0.apps.googleusercontent.com',
                        scope: 'profile'
                    })
                    .then(function() {
                        window.updateSigninStatus(
                            window.gapi.auth2.getAuthInstance().isSignedIn.get()
                        );
                    });
            };
            window.updateSigninStatus = function(isSignedIn) {
                if (isSignedIn) {
                    // if has isLoggedIn, we can get user info if we stored it in db
                }
            };
            // Load the SDK asynchronously
            (function(d, s, id) {
                let js;
                const fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id)) return;
                js = d.createElement(s);
                js.id = id;
                js.src = 'https://apis.google.com/js/platform.js?onload=handleClientLoad';
                fjs.parentNode.insertBefore(js, fjs);
            })(document, 'script', 'google-jssdk');
        },
        initInstagramSDK() {
            window.fbAsyncInit = function() {
                window.FB.init({
                    appId: '2071265239595231',
                    cookie: true,
                    xfbml: true,
                    version: 'v3.2'
                });

                window.FB.AppEvents.logPageView();
            };

            (function(d, s, id) {
                let js;
                const fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id)) {
                    return;
                }
                js = d.createElement(s);
                js.id = id;
                js.src = 'https://connect.facebook.net/en_US/sdk.js';
                fjs.parentNode.insertBefore(js, fjs);
            })(document, 'script', 'facebook-jssdk');
        }
    }
};
