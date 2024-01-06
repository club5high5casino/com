var baseURL = "";
if (casinoConfig["1"].domainName.length > 0) {
    var ch5Domain = casinoConfig["1"].domainName;
    var myDomain = window.location.hostname;
    if (myDomain != ch5Domain) {
        if (myDomain == "www." + ch5Domain || "www." + myDomain == ch5Domain) {
            // if my domain is the ch5 domain but with 'www.' added or removed, use it instead
            ch5Domain = myDomain;
        }
    }
    baseURL = "//" + ch5Domain;
}

var casinoArray;
var queryStringFromURL = window.location.search.substring(1);

var GTMLoginAnalytics = (function($) {
    var THIS = this;
    
    // from https://stackoverflow.com/questions/14733374/how-to-generate-an-md5-file-hash-in-javascript-node-js
    THIS.MD5 = function(d){var r = M(V(Y(X(d),8*d.length)));return r.toLowerCase()};function M(d){for(var _,m="0123456789ABCDEF",f="",r=0;r<d.length;r++)_=d.charCodeAt(r),f+=m.charAt(_>>>4&15)+m.charAt(15&_);return f}function X(d){for(var _=Array(d.length>>2),m=0;m<_.length;m++)_[m]=0;for(m=0;m<8*d.length;m+=8)_[m>>5]|=(255&d.charCodeAt(m/8))<<m%32;return _}function V(d){for(var _="",m=0;m<32*d.length;m+=8)_+=String.fromCharCode(d[m>>5]>>>m%32&255);return _}function Y(d,_){d[_>>5]|=128<<_%32,d[14+(_+64>>>9<<4)]=_;for(var m=1732584193,f=-271733879,r=-1732584194,i=271733878,n=0;n<d.length;n+=16){var h=m,t=f,g=r,e=i;f=md5_ii(f=md5_ii(f=md5_ii(f=md5_ii(f=md5_hh(f=md5_hh(f=md5_hh(f=md5_hh(f=md5_gg(f=md5_gg(f=md5_gg(f=md5_gg(f=md5_ff(f=md5_ff(f=md5_ff(f=md5_ff(f,r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+0],7,-680876936),f,r,d[n+1],12,-389564586),m,f,d[n+2],17,606105819),i,m,d[n+3],22,-1044525330),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+4],7,-176418897),f,r,d[n+5],12,1200080426),m,f,d[n+6],17,-1473231341),i,m,d[n+7],22,-45705983),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+8],7,1770035416),f,r,d[n+9],12,-1958414417),m,f,d[n+10],17,-42063),i,m,d[n+11],22,-1990404162),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+12],7,1804603682),f,r,d[n+13],12,-40341101),m,f,d[n+14],17,-1502002290),i,m,d[n+15],22,1236535329),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+1],5,-165796510),f,r,d[n+6],9,-1069501632),m,f,d[n+11],14,643717713),i,m,d[n+0],20,-373897302),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+5],5,-701558691),f,r,d[n+10],9,38016083),m,f,d[n+15],14,-660478335),i,m,d[n+4],20,-405537848),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+9],5,568446438),f,r,d[n+14],9,-1019803690),m,f,d[n+3],14,-187363961),i,m,d[n+8],20,1163531501),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+13],5,-1444681467),f,r,d[n+2],9,-51403784),m,f,d[n+7],14,1735328473),i,m,d[n+12],20,-1926607734),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+5],4,-378558),f,r,d[n+8],11,-2022574463),m,f,d[n+11],16,1839030562),i,m,d[n+14],23,-35309556),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+1],4,-1530992060),f,r,d[n+4],11,1272893353),m,f,d[n+7],16,-155497632),i,m,d[n+10],23,-1094730640),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+13],4,681279174),f,r,d[n+0],11,-358537222),m,f,d[n+3],16,-722521979),i,m,d[n+6],23,76029189),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+9],4,-640364487),f,r,d[n+12],11,-421815835),m,f,d[n+15],16,530742520),i,m,d[n+2],23,-995338651),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+0],6,-198630844),f,r,d[n+7],10,1126891415),m,f,d[n+14],15,-1416354905),i,m,d[n+5],21,-57434055),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+12],6,1700485571),f,r,d[n+3],10,-1894986606),m,f,d[n+10],15,-1051523),i,m,d[n+1],21,-2054922799),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+8],6,1873313359),f,r,d[n+15],10,-30611744),m,f,d[n+6],15,-1560198380),i,m,d[n+13],21,1309151649),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+4],6,-145523070),f,r,d[n+11],10,-1120210379),m,f,d[n+2],15,718787259),i,m,d[n+9],21,-343485551),m=safe_add(m,h),f=safe_add(f,t),r=safe_add(r,g),i=safe_add(i,e)}return Array(m,f,r,i)}function md5_cmn(d,_,m,f,r,i){return safe_add(bit_rol(safe_add(safe_add(_,d),safe_add(f,i)),r),m)}function md5_ff(d,_,m,f,r,i,n){return md5_cmn(_&m|~_&f,d,_,r,i,n)}function md5_gg(d,_,m,f,r,i,n){return md5_cmn(_&f|m&~f,d,_,r,i,n)}function md5_hh(d,_,m,f,r,i,n){return md5_cmn(_^m^f,d,_,r,i,n)}function md5_ii(d,_,m,f,r,i,n){return md5_cmn(m^(_|~f),d,_,r,i,n)}function safe_add(d,_){var m=(65535&d)+(65535&_);return(d>>16)+(_>>16)+(m>>16)<<16|65535&m}function bit_rol(d,_){return d<<_|d>>>32-_}

    this.setGTMUserId = function(userId) {
        // send an encoded user ID to GTM (GSM uses it)
        var encodedUserID = MD5(userId.toString());
        dataLayer.push({'encodedUserID': encodedUserID});
    }

    this.setGTMUserEmail = function(userEmail) {
        dataLayer.push({'userEmail': userEmail});
    }

    this.logEvent = function(eventName, params) {
        // copy params and event name to new object
        var eventObj = params ? JSON.parse(JSON.stringify(params)) : {};
        eventObj['event'] = eventName;
        
        // send the event!
        dataLayer.push(eventObj);

        console.log("sent GTM event: " + eventName);
    }

    return {
        setUserId: setGTMUserId,
        setUserEmail: setGTMUserEmail,
        logEvent: logEvent
    }
})();

var TopBarWidget = (function() {
    var THIS = this;
    THIS.loadingPopupsState = 0;
    THIS.docReadyState = 0;

    var scripts = [];
    scripts.push(baseURL + '/js/top-bar-shared.js?' + Date.now());

    if ((typeof jQuery == "undefined") || (!jQuery)) {
        scripts.push(baseURL + '/js/vendor/jquery-3.5.1.min.js');
    }

    if (document.querySelectorAll('.lte-ie9').length == 0) {
        // if the browser is not IE 9 or below
        scripts.push(baseURL + '/js/vendor/validate.min.js');
    } else {
        // if the browser is IE 9 or below
        scripts.push("https://cdn.rawgit.com/gfdev/javascript-jquery-transport-xdr/master/dist/jquery.transport.xdr.min.js");
    }

    loadScripts(
        scripts,
        function() {
            //jQuery = window.jQuery.noConflict(true);
            jQuery.support.cors = true;
            jQuery.ajaxSetup({ cache: false });

            // Pull data from URL parameters
            var casinosDataToSend = {ip:ip_address};
            var queries = queryStringFromURL.split("&");
            $.each(queries, function(i) {
                if (queries[i].length > 0) {
                    var pair = queries[i].split('=');
                    if (pair.length == 2) {
                        if (typeof casinosDataToSend[pair[0]] === "undefined") {
                            casinosDataToSend[pair[0]] = pair[1];
                        }
                    }
                }
            });

            // Load casino array from "api/v1/casinos" endpoint
            httpService(
                {
                    cache: false,
                    url: baseURL + '/api/v1/casinos',
                    type: 'GET',
                    data: casinosDataToSend
                },
                function(response) {
                    casinoArray = response;
                    main();
                },
                function(errorStatusCode) {
                    casinoArray = {};
                    main();
                    // Fail to load casino config array
                }
            );
        }
    );

    var cssId = 'myCss';
    var head = document.getElementsByTagName('head')[0];
    var link = document.createElement('link');
    link.id = cssId;
    link.rel = 'stylesheet';
    link.type = 'text/css';
    if (typeof(popupsCssOverride) !== "undefined" && popupsCssOverride.length > 0) {
        link.href = baseURL + "/css/" + popupsCssOverride + ".css?" + Date.now();
    } else {
        link.href = baseURL + "/css/popups.css?" + Date.now();
    }
    link.media = 'all';
    head.appendChild(link);

    function init(registerPopupPath, loginPopupPath, validateEmailPopupPath, forgotPasswordPopupPath, timeoutPopupPath, loginErrorMessages, validateEmailErrorMessages, forgotPasswordErrorMessages, validationErrorMessages, dynamicMessages, facebookLocale, browserFormattedLocale, languageCode, autoFbLogin, autoAppleLogin, autoEmailLogin, autoGoogleLogin, sweepstakesRedirect, mobileRedirect, classicLoginForExistingUsers) {
        THIS.registerPopupPath = registerPopupPath;
        THIS.loginPopupPath = loginPopupPath;
        THIS.validateEmailPopupPath = validateEmailPopupPath;
        THIS.forgotPasswordPopupPath = forgotPasswordPopupPath;
        THIS.timeoutPopupPath = timeoutPopupPath;
        THIS.loginErrorMessages = loginErrorMessages;
        THIS.validateEmailErrorMessages = validateEmailErrorMessages;
        THIS.forgotPasswordErrorMessages = forgotPasswordErrorMessages;
        THIS.validationErrorMessages = validationErrorMessages;
        THIS.dynamicMessages = dynamicMessages;
        THIS.facebookLocale = (typeof facebookLocale === "undefined" ? "en_US" : facebookLocale);
        THIS.localeTag = (typeof browserFormattedLocale === "undefined" ? "en-US" : browserFormattedLocale);
        THIS.languageCode = (typeof languageCode === "undefined" ? "en" : languageCode);
        THIS.autoFbLogin = (typeof autoFbLogin === "undefined" ? false : autoFbLogin);
        THIS.autoAppleLogin = (typeof autoAppleLogin === "undefined" ? false : autoAppleLogin);
        THIS.autoEmailLogin = (typeof autoEmailLogin === "undefined" ? false : autoEmailLogin);
        THIS.autoGoogleLogin = (typeof autoGoogleLogin === "undefined" ? false : autoGoogleLogin);
        THIS.sweepstakesRedirect = (typeof sweepstakesRedirect === "undefined" ? false : sweepstakesRedirect);
        THIS.mobileRedirect = (typeof mobileRedirect === "undefined" ? false : mobileRedirect);
        THIS.classicLoginForExistingUsers = (typeof classicLoginForExistingUsers === "undefined" ? false : classicLoginForExistingUsers);
        
        if (typeof jQuery !== "undefined" && jQuery) {
            loadPopupsFromSrc();
        }
    }

    function loadPopupsFromSrc() {
        if (THIS.loadingPopupsState == 0) {
            THIS.loadingPopupsState = 1;

            var popups = [];
            var cacheBreak = "?" + Date.now();
            if (THIS.registerPopupPath) {
                popups.push(baseURL + THIS.registerPopupPath + cacheBreak);
            }
            popups.push(baseURL + THIS.loginPopupPath + cacheBreak);
            popups.push(baseURL + THIS.validateEmailPopupPath + cacheBreak);
            popups.push(baseURL + THIS.forgotPasswordPopupPath + cacheBreak);
            popups.push(baseURL + THIS.timeoutPopupPath + cacheBreak);

            var loginOnlyErrorMessages = {};
            var registrationOnlyErrorMessages = {};
            Object.keys(THIS.loginErrorMessages).forEach(function(code) {
                // if it's login or register specific, add to those objects, otherwise add to both
                var regIndex = code.indexOf('.register');
                var loginIndex = code.indexOf('.login');
                if (regIndex > 0) {
                    registrationOnlyErrorMessages[code.substring(0, regIndex)] = THIS.loginErrorMessages[code];
                } else if (loginIndex > 0) {
                    loginOnlyErrorMessages[code.substring(0, loginIndex)] = THIS.loginErrorMessages[code];
                } else {
                    registrationOnlyErrorMessages[code] = THIS.loginErrorMessages[code];
                    loginOnlyErrorMessages[code] = THIS.loginErrorMessages[code];
                }
            })

            loadPopups(popups, function (popupsHTML) {
                var popupIndex = 0;
                if (THIS.registerPopupPath) {
                    THIS.signUpForm = new SignInUpForm(jQuery, baseURL, popupsHTML[popupIndex++], true, registrationOnlyErrorMessages, THIS.validationErrorMessages, THIS.sweepstakesRedirect);
                } else {
                    THIS.signUpForm = null;
                }
                THIS.signInForm = new SignInUpForm(jQuery, baseURL, popupsHTML[popupIndex++], false, loginOnlyErrorMessages, THIS.validationErrorMessages, THIS.sweepstakesRedirect);
                THIS.validateEmailForm = new ValidateEmailForm(jQuery, baseURL, popupsHTML[popupIndex++], THIS.validateEmailErrorMessages, THIS.validationErrorMessages, THIS.dynamicMessages);
                THIS.forgotPasswordForm = new ForgotPasswordForm(jQuery, baseURL, popupsHTML[popupIndex++], THIS.forgotPasswordErrorMessages, THIS.validationErrorMessages);
                THIS.timeoutPopupSrc = popupsHTML[popupIndex++];

                THIS.loadingPopupsState = 2;
                if (THIS.docReadyState == 1) {
                    handleReady();
                }
            });
        }
    }

    function main() {
        // we have jquery, that's all we need to check here
        loadPopupsFromSrc();

        jQuery(document).ready(function($) {
            THIS.docReadyState = 1;
            if (THIS.loadingPopupsState == 2) {
                handleReady();
            }
        });
    }

    function handleReady() {
        THIS.formShared = new FormShared(jQuery, THIS.localeTag, THIS.languageCode, THIS.sweepstakesRedirect, THIS.mobileRedirect, THIS.classicLoginForExistingUsers);
        var $container = $('#top-bar-container');

        // add sign in first, so it gets any saved login info
        var template = "<div id='overlay-container'>" + THIS.signInForm.template + (THIS.signUpForm ? THIS.signUpForm.template : "") + THIS.validateEmailForm.template + THIS.forgotPasswordForm.template + THIS.timeoutPopupSrc + "</div>";
        document.getElementById('top-bar-container').innerHTML = template; // use innerhtml directly instead of jquery html() to boost performance

        if (THIS.signUpForm) {
            THIS.signUpForm.init();
        }
        THIS.signInForm.init();
        THIS.validateEmailForm.init();
        THIS.forgotPasswordForm.init();

        THIS.handleFacebookLogin = function() {
            var fbBtn = $('#buttonsExistingUser .fb-login');

            // disable button
            if (fbBtn) formShared.disableButton(fbBtn);

            // re-enable button after failure
            var resetButton = fbBtn ? function(jqXHR) {
                formShared.enableButton(fbBtn);
            } : null;

            // call the fb login method
            formShared.logInViaFacebook(
                function(formData, response) {
                    // if it succeeded, log in to the server (social can go straight to login, skip registration)
                    formShared.postTheFormFacebook(formData, baseURL + "/api/v1/login", resetButton, resetButton, response);
                },
                resetButton,
                false
            );
        }

        THIS.handleGoogleLogin = function() {
            var googleBtn = $('#buttonsExistingUser .google-login');

            // disable button
            if (googleBtn) formShared.disableButton(googleBtn);

            // re-enable button after failure
            var resetButton = googleBtn ? function(jqXHR) {
                formShared.enableButton(googleBtn);
            } : null;

            // call the fb login method
            formShared.logInViaGoogle(
                function(formData, response) {
                    // if it succeeded, log in to the server (social can go straight to login, skip registration)
                    formShared.postTheFormGoogle(formData, baseURL + "/api/v1/login", resetButton, resetButton, response);
                },
                resetButton,
                false,
                false
            );
        }
        
        THIS.handleAppleLogin = function() {
            var appleBtn = $('#buttonsExistingUser .apple-login');

            // disable button
            if (appleBtn) formShared.disableButton(appleBtn);

            // re-enable button after failure
            var resetButton = appleBtn ? function(jqXHR) {
                formShared.enableButton(appleBtn);
            } : null;

            // call the apple login method
            formShared.logInViaApple(
                function(formData, response) {
                    // if it succeeded, log in to the server (social can go straight to login, skip registration)
                    formShared.postTheFormApple(formData, baseURL + "/api/v1/login", resetButton, resetButton, response);
                },
                resetButton,
                false,
                false
            );
        }

        $('.register').on('click', function(e) {
            e.preventDefault();
            registerOn();
        });

        $('.login').on('click', function(e) {
            e.preventDefault();
            logInOn();
        });

        $('#buttonsExistingUser .fb-login').on('click', function(e) {
            e.preventDefault();
            devDebug("fb-login click!");

            THIS.handleFacebookLogin();
        });

        $('#buttonsExistingUser .google-login').on('click', function(e) {
            e.preventDefault();
            devDebug("google-login click!");

            THIS.handleGoogleLogin();
        });

        $('#buttonsExistingUser .apple-login').on('click', function(e) {
            e.preventDefault();
            devDebug("apple-login click!");

            THIS.handleAppleLogin();
        });

        $container.on('click', '.forgot', function(e) {
            e.preventDefault();
            forgotPasswordOn();
        });

        $container.on('click', '.close', function(e) {
            e.stopPropagation();
            overlayOff();
        });

        $container.on('click', '.continue', function(e) {
            e.stopPropagation();
            overlayOff();
        });

        $container.on('click', '.timeoutConfirmButton', function(e) {
            e.stopPropagation();
            overlayOff();
        });
        
        // if we're on a device where mouse down/up aren't supported, make sure they're not blocking click
        THIS.mouseDownContainer = true;
        THIS.mouseUpContainer = true;

        $container.on('click', '.popupBackground', function(e) {
            e.stopPropagation();
            // don't close if we clicked the pop-up background

            // reset mouse down/up state
            THIS.mouseDownContainer = true;
            THIS.mouseUpContainer = true;
        });

        $container.on('mousedown', '.popupBackground', function(e) {
            e.stopPropagation();
            THIS.mouseDownContainer = false;
            // don't close if we clicked the pop-up background for down or up
        });

        $container.on('mouseup', '.popupBackground', function(e) {
            e.stopPropagation();
            THIS.mouseUpContainer = false;
            // don't close if we clicked the pop-up background for down or up
        });

        $container.on('click', '#overlay-container', function(e) {
            e.stopPropagation();
            if (THIS.mouseDownContainer && THIS.mouseUpContainer) {
                overlayOff();
            }

            // reset mouse down/up state
            THIS.mouseDownContainer = true;
            THIS.mouseUpContainer = true;
        });

        $container.on('mousedown', '#overlay-container', function(e) {
            e.stopPropagation();
            THIS.mouseDownContainer = true;
        });

        $container.on('mouseup', '#overlay-container', function(e) {
            e.stopPropagation();
            THIS.mouseUpContainer = true;
        });

        (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {
                return;
            }
            js = d.createElement(s);
            js.id = id;
            js.src = "//connect.facebook.net/" + THIS.facebookLocale + "/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));

        // handle auto login if requested; only handle one, if multiple params passed (not intended behavior)
        if (THIS.autoFbLogin) {
            window.fbAsyncInit = function() {
                console.log("FB initialized, handle auto fb login");
                THIS.handleFacebookLogin();
            };
        } else if (THIS.autoGoogleLogin) {
            console.log("handle auto google login");
            THIS.handleGoogleLogin();
        } else if (THIS.autoAppleLogin) {
            console.log("handle auto apple login");
            THIS.handleAppleLogin();
        } else if (THIS.autoEmailLogin) {
            console.log("handle auto email login");
            logInOn();
        }
    }

    function overlayOn() {
        jQuery('#overlay-container').fadeIn(300);

        jQuery('#main').addClass('blur');
    }

    function overlayOff() {
        jQuery('#overlay-container').fadeOut();

        registerOff();
        logInOff();
        validateEmailOff();
        forgotPasswordOff();
        timeoutWarningOff();

        jQuery('#main').removeClass('blur');
    }

    function hideAllForms() {
        jQuery('#overlay-container .popupRegister').hide();
        jQuery('#overlay-container .popupLogin').hide();
        jQuery('#overlay-container .popupValidateEmail').hide();
        jQuery('#overlay-container .popupForgotPassword').hide();
        jQuery('#overlay-container .popupTimeout').hide();
    }

    function fadeOutForm(form) {
        form.fadeOut(150);
        /*form.css({
            'transform': 'scale(0.2,0.2)'
        });*/
    }

    function fadeInForm(form) {
        form.show();
        /*form.css({
            'transform': 'scale(0.2,0.2)'
        });
        setTimeout(function() {
            form.css({
                'transform': 'scale(1,1)'
            });
        }, 0);*/
    }

    function registerOn() {
        hideAllForms();
        overlayOn();

        fadeInForm(jQuery('#overlay-container .popupRegister'));
        if (signUpForm) {
            signUpForm.resetForm();
        }
    }

    function registerOff() {
        fadeOutForm(jQuery('#overlay-container .popupRegister'));
    }

    function logInOn() {
        hideAllForms();
        overlayOn();

        fadeInForm(jQuery('#overlay-container .popupLogin'));
        signInForm.resetForm();
    }

    function logInOff() {
        fadeOutForm(jQuery('#overlay-container .popupLogin'));
    }

    function validateEmailOn() {
        hideAllForms();
        overlayOn();

        fadeInForm(jQuery('#overlay-container .popupValidateEmail'));
        validateEmailForm.resetForm();
    }

    function validateEmailOff() {
        fadeOutForm(jQuery('#overlay-container .popupValidateEmail'));
    }

    function forgotPasswordOn() {
        hideAllForms();
        overlayOn();

        fadeInForm(jQuery('#overlay-container .popupForgotPassword'));
        forgotPasswordForm.resetForm();
    }

    function forgotPasswordOff() {
        fadeOutForm(jQuery('#overlay-container .popupForgotPassword'));
    }

    function validateEmail(userId, loginResponse, sweeps) {
        // populate validate info
        THIS.validateEmailForm.populate(userId, loginResponse, sweeps);

        // open the pop-up!
        validateEmailOn();
    }

    function timeoutWarningOn(reason) {
        hideAllForms();
        overlayOn();

        if(reason == "timeout") {
            $('#timeoutReasonDiv').show();
            $('#selfExclusionReasonDiv').hide();
        } else {
            $('#timeoutReasonDiv').hide();
            $('#selfExclusionReasonDiv').show();
        }

        fadeInForm(jQuery('#overlay-container .popupTimeout'));
    }

    function timeoutWarningOff() {
        fadeOutForm(jQuery('#overlay-container .popupTimeout'));
    }
    
    function loadScripts(scripts, complete) {
        var loadScript = function(src) {
            var next;
            var script_tag = document.createElement('script');
            script_tag.setAttribute("type", "text/javascript");
            script_tag.setAttribute("src", src);
            if (script_tag.readyState) {
                script_tag.onreadystatechange = function() { // For old versions of IE
                    if (this.readyState == 'complete' || this.readyState == 'loaded') {
                        next = scripts.shift();
                        if (next) {
                            loadScript(next);
                        } else if (typeof complete == 'function') {
                            complete();
                        }
                    }
                };
            } else { // Other browsers
                script_tag.onload = function() {
                    next = scripts.shift();
                    if (next) {
                        loadScript(next);
                    } else if (typeof complete == 'function') {
                        complete();
                    }
                }
            }
            (document.getElementsByTagName("body")[0] || document.documentElement).appendChild(script_tag);
        };

        loadScript(scripts.shift());
    }

    function loadPopups(popups, complete) {
        var popupsHtml = [];

        var loadPopup = function(src) {
            $.get(src, function(data) {
                popupsHtml.push(data);

                next = popups.shift();
                if (next) {
                    loadPopup(next);
                } else if (typeof complete == 'function') {
                    complete(popupsHtml);
                }
            });
        };

        loadPopup(popups.shift());
    }

    return {
        init: init,
        validateEmail: validateEmail,
        registerOn: registerOn,
        timeoutWarningOn: timeoutWarningOn
    };
})();

function FormShared($, localeTag, languageCode, sweepstakesRedirect, mobileRedirect, classicLoginForExistingUsers) {
    var THIS = this;
    var params = parseParams();
    THIS.localeTag = localeTag;
    THIS.languageCode = languageCode;
    THIS.sweepstakesRedirect = sweepstakesRedirect;
    THIS.mobileRedirect = mobileRedirect;
    THIS.referralId = params.adid != undefined ? params.adid : "";
    THIS.classicLoginForExistingUsers = classicLoginForExistingUsers;
    
    function parseParams() {
        var params = {};
        var queryString = window.location.search;
        var pairs = (queryString[0] === '?' ? queryString.substr(1) : queryString).split('&');
        for (var i = 0; i < pairs.length; i++) {
            var pair = pairs[i].split('=');
            var lhs = decodeURIComponent(pair[0]).toLowerCase();
            var rhs = decodeURIComponent(pair[1] || '');
            params[lhs] = rhs;
        }
        return params;
    }
    
    function logInViaFacebook(postCb, failCb, remember) {
        if (typeof remember === "undefined") remember = false; // default to false if unset
        loadAndInitFacebookSDK(getCasino("2", casinoArray).fb_app_id, null,
            function(response) {
                devDebug('Facebook Login Response: ' + JSON.stringify(response));

                var formData = {
                    "extId": response.authResponse.userID,
                    "extPassword": response.authResponse.accessToken
                };
                if (remember) {
                    formData.remember = "on";
                }

                if (postCb && typeof postCb !== "undefined") {
                    postCb(formData, response);
                }
            },
            function(response) {
                // error handler
                devDebug('Facebook Login Failed: ' + (response ? JSON.stringify(response) : null));
                if (failCb && typeof failCb !== "undefined") {
                    failCb();
                }
            }
        );
    }

    function logInViaGoogle(postCb, failCb, remember, isRegisterOrigin) {
        if (typeof remember === "undefined") remember = false; // default to false if unset

        googleLogin(baseURL, isRegisterOrigin,
            function(response) {
                devDebug('Google Login Response: ' + JSON.stringify(response));

                var formData = {
                    "extId": response.sub,
                    "extPassword": response.credential
                };
                if (remember) {
                    formData.remember = "on";
                }

                if (postCb && typeof postCb !== "undefined") {
                    postCb(formData, response);
                }
            }, function(response) {
                // error handler
                devDebug('Google Login Failed: ' + (response ? JSON.stringify(response) : null));
                if (failCb && typeof failCb !== "undefined") {
                    failCb();
                }
            }
        );
    }

    function logInViaApple(postCb, failCb, remember, isRegisterOrigin) {
        if (typeof remember === "undefined") remember = false; // default to false if unset

        appleLogin(baseURL, isRegisterOrigin,
            function(response) {
                devDebug('Apple Login Response: ' + JSON.stringify(response));

                var formData = {
                    "extId": response.id_token,
                    "extPassword": response.code
                };
                if (remember) {
                    formData.remember = "on";
                }

                if (postCb && typeof postCb !== "undefined") {
                    postCb(formData, response);
                }
            },
            function(response) {
                // error handler
                devDebug('Apple Login Failed: ' + (response ? JSON.stringify(response) : null));
                if (failCb && typeof failCb !== "undefined") {
                    failCb();
                }
            }
        );
    }

    function requiresEmailValidation(accountTypeId, emailVerified, status) {
        devDebug("requiresEmailValidation: " + accountTypeId + ", " + emailVerified + ", " + status);

        // an email account might need validation...
        if (accountTypeId == 1) {
            // an unverified account might need validation... (!== true rather than === false in case it's unset)
            if (emailVerified !== true) {
                // login status of "PartiallyRegistered" means they're a new (non legacy allowed) user with unverified email
                if (status && status.toUpperCase() === "PartiallyRegistered".toUpperCase()) {
                    return true;
                }
            }
        }
        return false;
    }

    function completeLoginAndRedirect(loginResponse, successCallback, accountTypeId, fbResponse, fbAccessToken, googleToken, sweepstakes) {
        if(loginResponse.search('newAccount') != -1) {
            var response = JSON.parse(loginResponse);
            if(response.loginUser.newAccount == true) {
                GTMLoginAnalytics.setUserId(response.loginUser.userId);
                if(loginResponse.search('email') != -1) {
                    GTMLoginAnalytics.setUserEmail(response.loginUser.email);
                }
                GTMLoginAnalytics.logEvent('register');
            }
        }

        // once the JSON is returned then we make the call to assignlogin.php on the other domains
        var dataToSend = {
            value: loginResponse,
            domainId: (window.location.hostname.indexOf("www.") >= 0) ? "W" : "X" // W indicates a 'www.' prefix, X otherwise
        };
        if (fbAccessToken && typeof fbAccessToken !== "undefined") {
            dataToSend['fbAccessTokenParameter'] = encodeURIComponent(fbAccessToken);
        }
        if (googleToken && typeof googleToken !== "undefined") {
            dataToSend['googleTokenParameter'] = encodeURIComponent(googleToken);
        }

        setCookieIE('ch5-userauth', encodeURIComponent(JSON.stringify(JSON.parse(loginResponse))), 14, getLoginCookieDomain());

        var appIds = [];
        $.each(casinoArray, function(appId) {
            if (appId != 100) {
                appIds.push(appId);
            }
        });

        setCookies(appIds, {data: dataToSend}, casinoArray, function () {
            // delay for a moment to make sure the cookies had time to process in the browser (used to be 1500)
            var setCookiesDelay = 500;

            setTimeout(function() {
                // allow for a success animation before redirecting?
                var redirectDelay = 0;

                // handle success, as applicable
                if (successCallback && typeof successCallback !== "undefined") {
                    redirectDelay = 5;
                    successCallback();
                }

                // redirect (after delay if needed)
                setTimeout(function() {
                    // redirect to H5C after successful login!
                    redirectToCasino(getCasino("2", casinoArray), getCasino("1", casinoArray), queryStringFromURL, accountTypeId, fbResponse && typeof fbResponse !== "undefined" ? fbResponse.authResponse.signedRequest : null, sweepstakes, THIS.mobileRedirect, THIS.classicLoginForExistingUsers);
                }, redirectDelay);
            }, setCookiesDelay);
        });
    }

    function sendValidationEmail(userId, callback) {
        var sendEmailCallback = function(data) {
            if (callback && typeof callback !== "undefined") {
                callback();
            }
        };

        // request the validation email to be sent to the user
        devDebug("Sending validation email");
        jQuery.ajax({
            cache: false,
            type: "POST",
            dataType: "json",
            url: baseURL + "/api/v1/validate/sendEmail",
            data: "userId=" + userId,
            success: sendEmailCallback,
            error: function(jqXHR, textStatus, errorThrown) {
                devDebug(JSON.stringify(jqXHR));
                devDebug(jqXHR.status);
                devDebug(JSON.stringify(textStatus));
                devDebug(JSON.stringify(errorThrown));

                // handle error
                sendEmailCallback(jqXHR);
            }
        });
    }

    function sendValidationCode(userId, codeParam, successCallback, failureCallback) {
        devDebug("Sending validation code: " + codeParam);
        httpService(
            {
                cache: false,
                url: '/api/v1/validate/verifyEmail',
                type: 'POST',
                data: codeParam + "&userId=" + userId
            },
            function (response) {
                devDebug("Validate success: " + response);
                successCallback();
            },
            function (errorStatusCode) {
                devDebug("Validate failure: " + errorStatusCode);
                failureCallback(errorStatusCode);
            }
        );
    }

    function getTimezoneOffsetString() {
        // int value for timezone
        var offset = new Date().getTimezoneOffset()
        if (offset !== 0) {
            offset = -offset
        }

        // convert to desired string format
        var sign = '+'
        if (offset < 0) {
            sign = '-'
            offset = -offset
        }
        var hours = Math.floor(offset / 60)
        var minutes = Math.floor(offset % 60)
        var output = sign + ('0' + hours).slice(-2) + ':' + ('0' + minutes).slice(-2)

        // return formatted timezone string
        return encodeURIComponent(output)
    }

    function postTheFormInternal(formData, endpoint, successCallback, errorCallback, accountTypeId, fbResponse, fbAccessToken, googleToken) {
        var httpMethod = httpMethod || "GET";
        if (endpoint.search('registration') != -1) {
            httpMethod = "POST";
        }

        // append the timezoneOffset to the formData, so we can send it on login and register
        if (formData.indexOf('timezoneOffset') < 0) {
            formData += "&timezoneOffset=" + getTimezoneOffsetString();
        }

        jQuery.ajax({
            cache: false,
            type: httpMethod,
            dataType: "json",
            url: endpoint,
            data: formData + "&localeTag=" + THIS.localeTag + "&languageCode=" + THIS.languageCode + "&referralId=" + THIS.referralId,
            success: function(data) {
                devDebug(data);
                var dataObj = JSON.parse(data);

                // if we're expecting to redirect to sweepstakes, check features for sweepstakes
                var sweeps = THIS.sweepstakesRedirect;
                if (sweeps) {
                    var enabled = false;
                    var featuresArray = dataObj.features;
                    featuresArray.forEach(function(feature) {
                        if (feature.name === 'Sweeps') {
                            enabled = true;
                        }
                    });

                    if (!enabled) sweeps = false;
                }

                // shorten data (avoid size limit)
                if (dataObj.loginUser) {
                    //for playreal accounts creation, newAccount is not set as true. so manually set it as true.
                    if (this.url.search('registration') != -1) {
                        dataObj.loginUser.newAccount = true;
                    }
                    delete dataObj.loginUser.wallets;
                    delete dataObj.loginUser.permissions;
                    delete dataObj.sweepstakesAccount;
                }
                delete dataObj.features;
                delete dataObj.loggingOptions;
                data = JSON.stringify(dataObj);

                devDebug(JSON.stringify(data));
                loginResponse = data.replace(/\n/g, '');

                // check for validation needed
                if (dataObj.loginUser && requiresEmailValidation(accountTypeId, dataObj.loginUser.emailVerified, dataObj.loginUser.status)) {
                    devDebug("Validation needed!");
                    var userId = dataObj.loginUser.userId;

                    var code = "";
                    var queries = queryStringFromURL.split("&");
                    $.each(queries, function(i) {
                        if (queries[i].length > 0) {
                            var pair = queries[i].split('=');
                            if (pair.length == 2 && pair[0].toUpperCase() == "validationCode".toUpperCase()) {
                                code = pair[1];
                                return false;
                            }
                        }
                    });

                    var retryValidationCodeSuccess = function() {
                        completeLoginAndRedirect(loginResponse, successCallback, accountTypeId, fbResponse, fbAccessToken, googleToken, sweeps);
                    };

                    var retryValidationCodeFailure = function(errorStatusCode) {
                        // stop animating button from login page
                        if (successCallback && typeof successCallback !== "undefined") {
                            successCallback();
                        }

                        // pass along the needed info and open the validate email form
                        TopBarWidget.validateEmail(userId, loginResponse, sweeps);
                    };

                    var sendEmailCallback = function() {
                        if (code && code.length > 0 && code == "000001") {
                            // try again after email sent, code requires an email to have been sent in order to work
                            sendValidationCode(userId, "validationCode=" + code, retryValidationCodeSuccess, retryValidationCodeFailure);
                        } else {
                            // default behavior just opens the validation ui
                            retryValidationCodeFailure("");
                        }
                    };

                    var validationCodeSuccess = function() {
                        completeLoginAndRedirect(loginResponse, successCallback, accountTypeId, fbResponse, fbAccessToken, googleToken, sweeps);
                    };

                    var validationCodeFailure = function(errorStatusCode) {
                        sendValidationEmail(userId, sendEmailCallback);
                    };

                    if (code && code.length > 0) {
                        sendValidationCode(userId, "validationCode=" + code, validationCodeSuccess, validationCodeFailure);
                    } else {
                        validationCodeFailure("");
                    }
                } else {
                    completeLoginAndRedirect(loginResponse, successCallback, accountTypeId, fbResponse, fbAccessToken, googleToken, sweeps);
                }
            },
            error: function(jqXHR, textStatus, errorThrown) {
                devDebug(JSON.stringify(jqXHR));
                devDebug(jqXHR.status);
                devDebug(JSON.stringify(textStatus));
                devDebug(JSON.stringify(errorThrown));

                // handle error
                if (errorCallback && typeof errorCallback !== "undefined") errorCallback(jqXHR);
            }
        });
    }

    function postTheFormFacebook(form, endpoint, successCallback, errorCallback, fbResponse) {
        devDebug("postTheForm: Facebook");

        var fbAccessToken = form.extPassword;
        var formData = "extId=" + form.extId + "&extPassword=" + form.extPassword + "&logInType=facebook" + ((typeof form.remember !== "undefined") ? "&remember=" + form.remember : "");
        postTheFormInternal(formData, endpoint, successCallback, errorCallback, 2, fbResponse, fbAccessToken);
    }

    function postTheFormGoogle(form, endpoint, successCallback, errorCallback, googleResponse) {
        devDebug("postTheForm: Google");

        var formData = "extId=" + form.extId + "&extPassword=" + form.extPassword + "&logInType=google" + ((typeof form.remember !== "undefined") ? "&remember=" + form.remember : "");

        if (googleResponse.hasOwnProperty('given_name')) {
            formData += "&firstName=" + googleResponse.given_name;
        }
        if (googleResponse.hasOwnProperty('family_name')) {
            formData += "&lastName=" + googleResponse.family_name;
        }
        if (googleResponse.hasOwnProperty('name')) {
            formData += "&extName=" + googleResponse.name;
        }
        if (googleResponse.hasOwnProperty('email')) {
            formData += "&email=" + googleResponse.email;
        }
        /*
        if (googleResponse.hasOwnProperty('picture')) {
            formData += "&image=" + googleResponse.picture;
        }
        */

        postTheFormInternal(formData, endpoint, successCallback, errorCallback, 3, undefined, undefined, googleResponse.credential);
    }

    function postTheFormApple(form, endpoint, successCallback, errorCallback, appleResponse) {
        devDebug("postTheForm: Apple");

        var formData = "extId=" + form.extId + "&extPassword=" + form.extPassword + "&logInType=apple" + ((typeof form.remember !== "undefined") ? "&remember=" + form.remember : "");
        if (typeof appleResponse.firstName !== "undefined") {
            formData += "&firstName=" + appleResponse.firstName;
        }
        if (typeof appleResponse.lastName !== "undefined") {
            formData += "&lastName=" + appleResponse.lastName;
        }
        if (typeof appleResponse.email !== "undefined") {
            formData += "&email=" + appleResponse.email;
        }
        postTheFormInternal(formData, endpoint, successCallback, errorCallback, 9);
    }

    function postTheFormPlayReal(form, endpoint, successCallback, errorCallback) {
        devDebug("postTheForm: PlayReal");

        var formData = getFormSerialized(form);
        postTheFormInternal(formData, endpoint, successCallback, errorCallback, 1);
    }

    function getFormSerialized(form) {
        var formData = form.serialize();
        if (!formData || formData.length == 0) {
            // if it's not a proper form design, the whole form won't serialize, but we can still grab the inputs
            formData = form.find("input").serialize();
        }
        return formData;
    }

    function disableButton(btn) {
        var btnAnim = btn.find('.processAnim');
        var btnChildren = btn.children();
        var i, child;

        btn.addClass("disabled");
        for (i = 0; i < btnChildren.length; ++i) {
            child = $(btnChildren[i]);
            if (child != btnAnim && !child.hasClass('processAnim')) { // direct comparison doesn't always work for some reason, check for the processAnim class too
                child.fadeOut(0.5);
            }
        }
        btnAnim.fadeIn();
    }

    function enableButton(btn) {
        var btnAnim = btn.find('.processAnim');
        var btnChildren = btn.children();
        var i, child;

        btn.removeClass("disabled");
        for (i = 0; i < btnChildren.length; ++i) {
            child = $(btnChildren[i]);
            if (child != btnAnim && !child.hasClass('processAnim')) { // direct comparison doesn't always work for some reason, check for the processAnim class too
                child.fadeIn(0.5);
            }
        }
        btnAnim.hide();
    }

    function validateInputs(form, inputs, constraints) {
        inputs.on("blur", function() {
            var errors = validate(form, constraints) || {};
            showErrorsForInput(form, this, errors[this.name]);
        });

        inputs.on('keyup', function(ev) {
            var errors = validate(form, constraints) || {};
            showErrorsForInput(form, this, errors[this.name]);
        });
    }

    function showErrors(form, inputs, errors) {
        inputs.each(function() {
            showErrorsForInput(form, this, errors && errors[this.name]);
        });
    }

    function getErrorMessagesForInput(form, input) {
        var messages;
        if ($(input).attr('id') == 'extUsername') {
            messages = form.find('#usernameError');
        } else if ($(input).attr('id') == 'extId') {
            messages = form.find('#emailError');
        } else if ($(input).attr('id') == 'extPassword') {
            messages = form.find('#passwordError');
        } else if ($(input).attr('id') == 'validationCode') {
            messages = form.find('#codeError');
        }
        return messages;
    }

    function resetFormState(input, messages) {
        $(input).removeClass('has-error').removeClass('has-success');
        if (messages) $(messages).html('');

        // username error hides username subtext
        if ($(input).attr('id') == 'extUsername') {
            $('#usernameSubtext').show();
        }
    }

    function resetErrorsForInput(form, input) {
        var messages = getErrorMessagesForInput(form, input);
        resetFormState(input, messages);
        return messages;
    }

    function showErrorsForInput(form, input, errors) {
        var messages = resetErrorsForInput(form, input);

        if (errors) {
            $(input).addClass("has-error");
            if (errors instanceof Array) {
                // the only time I know of that we've seen more than one error was when spaces were
                // used... just show the last error instead of all to avoid confusion with output
                if (errors.length > 1) {
                    console.log("Multiple errors: ", errors)
                }
                if (errors.length > 0) {
                    addError(messages, errors[errors.length - 1]);
                }
            } else {
                addError(messages, errors);
            }

            // username error hides username subtext
            if ($(input).attr('id') == 'extUsername') {
                $('#usernameSubtext').hide();
            }
        } else {
            $(input).addClass("has-success");
        }
    }

    function addError(messages, error) {
        if (messages) $(messages).append(error);
    }

    return {
        logInViaFacebook: logInViaFacebook,
        logInViaGoogle:  logInViaGoogle,
        logInViaApple:  logInViaApple,
        postTheFormFacebook: postTheFormFacebook,
        postTheFormGoogle: postTheFormGoogle,
        postTheFormApple: postTheFormApple,
        postTheFormPlayReal: postTheFormPlayReal,
        getFormSerialized: getFormSerialized,
        sendValidationEmail: sendValidationEmail,
        sendValidationCode: sendValidationCode,
        completeLoginAndRedirect: completeLoginAndRedirect,
        disableButton: disableButton,
        enableButton: enableButton,
        validateInputs: validateInputs,
        showErrors: showErrors,
        resetErrorsForInput: resetErrorsForInput,
        showErrorsForInput: showErrorsForInput
    };
}

function SignInUpForm($, baseURL, src, isRegister, loginErrorMessages, validationErrorMessages, sweepstakesRedirect) {
    var THIS = this;
    var template = src;
    var reg = isRegister;
    var errorMessages = loginErrorMessages;
    var validationMessages = validationErrorMessages;
    var isSweepsForm = sweepstakesRedirect;
    var socialEndpoint = baseURL + "/api/v1/login"; // google/apple/facebook don't use the registration endpoint, go straight to login
    var emailEndpoint = reg ? baseURL + "/api/v1/registration" : socialEndpoint;
    var constraints;
    var form;
    var inputs;
    var buttons;

    function init() {
        if (reg) {
            if ($('.popupRegister').find('#popupLargeButtons').length > 0) {
                form = $('.popupRegister #popupLarge').find('#popupContainer');
                buttons = $('.popupRegister #popupLargeButtons').find('#popupContainer');
            } else {
                form = $('.popupRegister').find('#popupContainer');
                buttons = form;
            }
        } else {
            if ($('.popupLogin').find('#popupLargeButtons').length > 0) {
                form = $('.popupLogin #popupLarge').find('#popupContainer');
                buttons = $('.popupLogin #popupLargeButtons').find('#popupContainer');
            } else {
                form = $('.popupLogin').find('#popupContainer');
                buttons = form;
            }
        }

        // sweepstakes forms will include the 'popupSweepstakes' class with their popupContainer, override based on that
        isSweepsForm = form.hasClass('popupSweepstakes');

        if (reg) {
            constraints = {
                extPassword: {
                    presence: {
                        message: "^" + validationMessages["PasswordBlank"]
                    },
                    format: {
                        pattern: /^(?=.*\d)(?=.*[a-zA-Z])(?!.*\s).{8,20}$/,
                        message: "^" + validationMessages["PasswordInvalid"]
                    }
                },
                extId: {
                    // Email is required
                    presence: {
                        message: "^" + validationMessages["EmailBlank"]
                    },
                    // no unicode characters
                    format: {
                        pattern: /^[A-Za-z0-9@._+-]+$/,
                        message: "^" + validationMessages["UnsupportedCharacter"]
                    },
                    // and must be an email (duh)
                    email: {
                        message: "^" + validationMessages["EmailInvalid"]
                    }
                }
            };

            // If the form has a username, we'll require it
            if ($('.popupRegister').find('#extUsername').length > 0) {
                constraints.extUsername = {
                    // Username is required
                    presence: {
                        message: "^" + validationMessages["UsernameBlank"]
                    },
                    // and must be 4-20 characters and only printable ASCII characters
                    format: {
                        pattern: /^([!-~]+){4,20}$/,
                        message: "^" + validationMessages["UsernameInvalid"]
                    }
                };
            }
        } else {
            // don't verify the password format when logging in, they could have made it elsewhere... (otherwise, these match)
            constraints = {
                extPassword: {
                    presence: {
                        message: "^" + validationMessages["PasswordBlank"]
                    }
                },
                extId: {
                    // Email or username is required
                    presence: {
                        message: "^" + validationMessages[isSweepsForm ? "UsernameOrEmailBlank" : "EmailBlank"]
                    }
                }
            };
        }

        inputs = form.find('input');
        formShared.validateInputs(form, inputs, constraints);

        form.find('.infoPassword').on('click', function(e) {
            e.preventDefault();

            // toggle password info visibility
            updateInfoPassword(!getInfoPasswordShowing());
        });

        form.find('.infoUsername').on('click', function(e) {
            e.preventDefault();

            // toggle password info visibility
            updateInfoUsername(!getInfoUsernameShowing());
        });

        form.find('.textEntry').on('click', function(e) {
            // hide tooltips
            updateInfoPassword(false);
            updateInfoUsername(false);
        });

        form.find('.submitButtonPopup').on('click', function(e) {
            e.preventDefault();
            updateInfoPassword(false);
            updateInfoUsername(false);
            devDebug("submitButtonPopup.click");

            handleFormSubmit();
        });

        buttons.find('.facebookButtonPopup').on('click', function(e) {
            e.preventDefault();
            var cb = form.find("#remember");
            devDebug("facebookButtonPopup.click");

            animateSubmitStart("fbAccount");
            formShared.logInViaFacebook(
                function(formData, response) {
                    postTheForm(formData, response);
                },
                function() {
                    animateSubmitReset("fbAccount");
                },
                reg ? false : (typeof cb !== "undefined" && cb.checked)
            );
        });

        buttons.find('.googleButtonPopup').on('click', function(e) {
            e.preventDefault();
            var cb = form.find("#remember");
            devDebug("googleButtonPopup.click");

            animateSubmitStart("googleAccount");
            formShared.logInViaGoogle(
                function(formData, response) {
                    postTheForm(formData, null, null, response);
                },
                function() {
                    animateSubmitReset("googleAccount");
                },
                reg ? false : (typeof cb !== "undefined" && cb.checked),
                true // if we're in here, then this is for the /register page
            );
        });

        buttons.find('.appleButtonPopup').on('click', function(e) {
            e.preventDefault();
            var cb = form.find("#remember");
            devDebug("appleButtonPopup.click");

            animateSubmitStart("appleAccount");
            formShared.logInViaApple(
                function(formData, response) {
                    postTheForm(formData, null, response);
                },
                function() {
                    animateSubmitReset("appleAccount");
                },
                reg ? false : (typeof cb !== "undefined" && cb.checked),
                true // if we're in here, then this is for the /register page
            );
        });

        buttons.find('.emailButtonPopup').on('click', function(e) {
            e.preventDefault();
            updateInfoPassword(false);
            updateInfoUsername(false);

            // switch to email entry
            if (reg) {
                $('.popupRegister #popupLargeButtons').hide();
                $('.popupRegister #popupLarge').show();
            } else {
                $('.popupLogin #popupLargeButtons').hide();
                $('.popupLogin #popupLarge').show();
            }
        });

        form.find('.back').on('click', function(e) {
            e.preventDefault();
            updateInfoPassword(false);
            updateInfoUsername(false);

            // switch back to buttons
            if (reg) {
                $('.popupRegister #popupLargeButtons').show();
                $('.popupRegister #popupLarge').hide();
            } else {
                $('.popupLogin #popupLargeButtons').show();
                $('.popupLogin #popupLarge').hide();
            }
        });

        // trigger submit on hit the Enter key after filling the inputs
        inputs.on('keypress', function(e) {
            updateInfoPassword(false);
            updateInfoUsername(false);
            if (e.which == 13) {
                devDebug("input.keypress");
                handleFormSubmit();
                return false;
            }
            return true;
        });
    }

    function getInfoPasswordShowing() {
        var tooltip = form.find('.infoPasswordTooltip');
        return !tooltip || tooltip.hasClass('visible');
    }

    function getInfoUsernameShowing() {
        var tooltip = form.find('.infoUsernameTooltip');
        return !tooltip || tooltip.hasClass('visible');
    }

    function updateInfoPassword(show) {
        var tooltip = form.find('.infoPasswordTooltip');
        if (tooltip) {
            if (show) {
                tooltip.addClass('visible');
            } else {
                tooltip.removeClass('visible');
            }
        }
    }

    function updateInfoUsername(show) {
        var tooltip = form.find('.infoUsernameTooltip');
        if (tooltip) {
            if (show) {
                tooltip.addClass('visible');
            } else {
                tooltip.removeClass('visible');
            }
        }
    }

    function animateSubmitStart(type) {
        // disable button
        if (type == "emailAccount") {
            var emailBtn = form.find('.submitButtonPopup');
            formShared.disableButton(emailBtn);
        } else if (type == "googleAccount") {
            var googleBtn = buttons.find('.googleButtonPopup');
            formShared.disableButton(googleBtn);
        } else if (type == "appleAccount") {
            var appleBtn = buttons.find('.appleButtonPopup');
            formShared.disableButton(appleBtn);
        } else { // "fbAccount"
            var fbBtn = buttons.find('.facebookButtonPopup');
            formShared.disableButton(fbBtn);
        }
    }

    function animateSubmitReset(type) {
        // re-enable button
        if (type == "emailAccount") {
            var emailBtn = form.find('.submitButtonPopup');
            formShared.enableButton(emailBtn);
        } else if (type == "googleAccount") {
            var googleBtn = buttons.find('.googleButtonPopup');
            formShared.enableButton(googleBtn);
        } else if (type == "appleAccount") {
            var appleBtn = buttons.find('.appleButtonPopup');
            formShared.enableButton(appleBtn);
        } else { // "fbAccount"
            var fbBtn = buttons.find('.facebookButtonPopup');
            formShared.enableButton(fbBtn);
        }
    }

    function hideServerError() {
        form.find('#serverError').html("");
        form.find('#serverError').hide();

        // we'll update both, so we don't need to worry about which page we're on
        if (buttons != form) {
            buttons.find('#serverError').html("");
            buttons.find('#serverError').hide();
        }
    }

    function showServerError(error) {
        form.find('#serverError').show();
        form.find('#serverError').html(error);

        // we'll update both, so we don't need to worry about which page we're on
        if (buttons != form) {
            buttons.find('#serverError').show();
            buttons.find('#serverError').html(error);
        }
    }

    function handleFormSubmit() {
        var errors = validate(form, constraints);
        formShared.showErrors(form, inputs, errors || {});
        updateInfoPassword(false);
        updateInfoUsername(false);

        // display error message for over 18
        var over18 = false;
        if (reg) {
            if (isSweepsForm) {
                // sweeps validates this inside react, don't show it here
                over18 = true;
            } else if (!$('#over-18').prop('checked')) {
                showServerError(validationMessages["AgeBlank"]);
                return;
            } else {
                hideServerError();
                over18 = true;
            }
        } else {
            over18 = true;
        }

        if ((typeof errors === "undefined" || !errors) && (over18)){
            animateSubmitStart("emailAccount");
            postTheForm(form);
        }
    }

    function resetForm() {
        // show the buttons, hide the email entry (if applicable)
        if (reg) {
            if ($('.popupRegister').find('#popupLargeButtons').length > 0) {
                $('.popupRegister #popupLargeButtons').show();
                $('.popupRegister #popupLarge').hide();
            }
        } else {
            if ($('.popupLogin').find('#popupLargeButtons').length > 0) {
                $('.popupLogin #popupLargeButtons').show();
                $('.popupLogin #popupLarge').hide();
            }
        }

        // reset buttons
        animateSubmitReset("emailAccount");
        animateSubmitReset("googleAccount");
        animateSubmitReset("appleAccount");
        animateSubmitReset("fbAccount");

        // reset error state
        inputs.each(function() {
            formShared.resetErrorsForInput(form, this);
        });
        hideServerError();

        // reset tooltip state
        updateInfoPassword(false);
        updateInfoUsername(false);
    }

    function postTheForm(formToPost, fbResponse, appleResponse, googleResponse) {
        var isEmailAccount = (formToPost instanceof jQuery);
        var isAppleAccount = (typeof appleResponse !== "undefined" && appleResponse != null);
        var isGoogleAccount = (typeof googleResponse !== "undefined" && googleResponse != null);
        devDebug("postTheForm, isEmailAccount = " + isEmailAccount + ", isAppleAccount = " + isAppleAccount + ", isGoogleAccount = " + isGoogleAccount);

        hideServerError();
        updateInfoPassword(false);
        updateInfoUsername(false);

        var errorCallback = function(jqXHR) {
            if (isEmailAccount) {
                animateSubmitReset("emailAccount");
            } else if (isGoogleAccount) {
                animateSubmitReset("googleAccount");
            } else if (isAppleAccount) {
                animateSubmitReset("appleAccount");
            } else {
                animateSubmitReset("fbAccount");
            }

            if (jqXHR.status == '432') {
                // show the username taken error under the username field, rather than with other server errors
                formShared.showErrorsForInput(form, form.find('#extUsername'), errorMessages[jqXHR.status]);
            } else if(jqXHR.status == '403' && jqXHR["responseJSON"] && jqXHR.responseJSON["reason"]) {
                // user account is locked. show timeout or self-exclusion popup
                TopBarWidget.timeoutWarningOn(jqXHR.responseJSON.reason);
            } else {
                showServerError(errorMessages[jqXHR.status]);
            }
        };

        var successCallback = function() {
            if (isEmailAccount) {
                animateSubmitReset("emailAccount");
            } else if (isGoogleAccount) {
                animateSubmitReset("googleAccount");
            } else if (isAppleAccount) {
                animateSubmitReset("appleAccount");
            } else {
                animateSubmitReset("fbAccount");
            }
        };

        if (isEmailAccount) {
            // playreal
            formShared.postTheFormPlayReal(formToPost, emailEndpoint, successCallback, errorCallback);
        } else if (isGoogleAccount) {
            // google
            formShared.postTheFormGoogle(formToPost, socialEndpoint, successCallback, errorCallback, googleResponse);
        } else if (isAppleAccount) {
            // apple
            formShared.postTheFormApple(formToPost, socialEndpoint, successCallback, errorCallback, appleResponse);
        } else {
            // facebook
            formShared.postTheFormFacebook(formToPost, socialEndpoint, successCallback, errorCallback, fbResponse);
        }
    }

    return {
        template: template,
        init: init,
        resetForm: resetForm
    };
}

function ValidateEmailForm($, baseURL, src, validateEmailErrorMessages, validationErrorMessages, dynamicMessages) {
    var THIS = this;
    var template = src;
    var errorMessages = validateEmailErrorMessages;
    var validationMessages = validationErrorMessages;
    var otherMessages = dynamicMessages;
    var constraints;
    var form;
    var inputs;

    function init() {
        constraints = {
            validationCode: {
                // Code is required
                presence: {
                    message: "^" + validationMessages["CodeBlank"]
                }
            }
        };

        form = $('.popupValidateEmail #popupSmallBlank').find('#popupContainer');
        inputs = form.find('input');
        formShared.validateInputs(form, inputs, constraints);

        form.find('.validateButtonPopup').on('click', function(e) {
            e.preventDefault();
            devDebug("validateButtonPopup.click");

            handleFormSubmit();
        });

        form.find('.resendValidation').on('click', function(e) {
            e.preventDefault();
            devDebug("resendValidation.click");

            showServerError(otherMessages["CodeSent"]);
            formShared.sendValidationEmail(THIS.userId);
        });

        // trigger submit on hit the Enter key after filling the inputs
        inputs.on('keypress', function(e) {
            if (e.which == 13) {
                devDebug("input.keypress");
                handleFormSubmit();
                return false;
            }
            return true;
        });
    }

    function populate(userId, loginResponse, sweeps) {
        THIS.userId = userId;
        THIS.loginResponse = loginResponse;
        THIS.sweepstakesRedirect = sweeps;
    }

    function handleFormSubmit() {
        var errors = validate(form, constraints);
        formShared.showErrors(form, inputs, errors || {});

        if (typeof errors === "undefined" || !errors) {
            animateSubmitStart();
            postTheForm();
        }
    }

    function resetForm() {
        // show the form, hide the confirmation
        $('.popupValidateEmail #popupSmallBlank').show();
        $('.popupValidateEmail #popupSmall').hide();

        // reset button
        animateSubmitReset();

        // clear the input and reset errors
        inputs.each(function() {
            $(this).val("");

            formShared.resetErrorsForInput(form, this);
        });
        hideServerError();
    }

    function animateSubmitStart() {
        // disable button
        var btn = form.find('.validateButtonPopup');
        formShared.disableButton(btn);
    }

    function animateSubmitReset() {
        // re-enable button after failure
        var btn = form.find('.validateButtonPopup');
        formShared.enableButton(btn);
    }

    function hideServerError() {
        form.find('#serverError').html("");
        form.find('#serverError').hide();
    }

    function showServerError(error) {
        form.find('#serverError').show();
        form.find('#serverError').html(error);
    }

    function postTheForm() {
        devDebug("postTheForm");

        hideServerError();

        var validationCodeSuccess = function() {
            formShared.completeLoginAndRedirect(THIS.loginResponse, animateSubmitReset, 1, null, null, null, THIS.sweepstakesRedirect);
        };

        var validationCodeFailure = function(errorStatusCode) {
            animateSubmitReset();
            showServerError(errorMessages[errorStatusCode]);
        };

        formShared.sendValidationCode(THIS.userId, formShared.getFormSerialized(form), validationCodeSuccess, validationCodeFailure);
    }

    return {
        template: template,
        init: init,
        populate: populate,
        resetForm: resetForm
    };
}

function ForgotPasswordForm($, baseURL, src, forgotPasswordErrorMessages, validationErrorMessages) {
    var THIS = this;
    var template = src;
    var errorMessages = forgotPasswordErrorMessages;
    var validationMessages = validationErrorMessages;
    var constraints;
    var form;
    var inputs;

    function init() {
        constraints = {
            extId: {
                // Email is required
                presence: {
                    message: "^" + validationMessages["EmailBlank"]
                },
                // and must be an email (duh)
                email: {
                    message: "^" + validationMessages["EmailInvalid"]
                }
            }
        };

        form = $('.popupForgotPassword #popupSmallBlank').find('#popupContainer');
        inputs = form.find('input');
        formShared.validateInputs(form, inputs, constraints);

        form.find('.submitButtonPopup').on('click', function(e) {
            e.preventDefault();
            devDebug("submitButtonPopup.click");

            handleFormSubmit();
        });

        // trigger submit on hit the Enter key after filling the inputs
        inputs.on('keypress', function(e) {
            if (e.which == 13) {
                devDebug("input.keypress");
                handleFormSubmit();
                return false;
            }
            return true;
        });
    }

    function handleFormSubmit() {
        var errors = validate(form, constraints);
        formShared.showErrors(form, inputs, errors || {});

        if (typeof errors === "undefined" || !errors) {
            animateSubmitStart();
            postTheForm();
        }
    }

    function resetForm() {
        // show the form, hide the confirmation
        $('.popupForgotPassword #popupSmallBlank').show();
        $('.popupForgotPassword #popupSmall').hide();

        // reset button
        animateSubmitReset();

        // clear the input and reset errors
        inputs.each(function() {
            $(this).val("");

            formShared.resetErrorsForInput(form, this);
        });
        hideServerError();
    }

    function animateSubmitStart() {
        // disable button
        var btn = form.find('.submitButtonPopup');
        formShared.disableButton(btn);
    }

    function animateSubmitReset() {
        // re-enable button after failure
        var btn = form.find('.submitButtonPopup');
        formShared.enableButton(btn);
    }

    function hideServerError() {
        form.find('#serverError').html("");
        form.find('#serverError').hide();
    }

    function showServerError(error) {
        form.find('#serverError').show();
        form.find('#serverError').html(error);
    }

    function postTheForm() {
        devDebug("postTheForm");

        hideServerError();

        httpService(
            {
                cache: false,
                url:'/api/v1/forgotPassword',
                type: 'GET',
                data: formShared.getFormSerialized(form)
            },
            function(response) {
                animateSubmitReset();
                $('.popupForgotPassword #popupSmallBlank').hide();
                $('.popupForgotPassword #popupSmall').show();
            },
            function(errorStatusCode) {
                animateSubmitReset();
                showServerError(errorMessages[errorStatusCode]);
            }
        );
    }

    return {
        template: template,
        init: init,
        resetForm: resetForm
    };
}
