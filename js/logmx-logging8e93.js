var LogMXLogging = (function($) {
    var THIS = this;
    THIS.initialized = false;

    this.logToLogMX = function(message, level, loggerSuffix) {
        var json = [{
            id: "1",
            level: level,
            logger: "JavaScript" + (loggerSuffix != undefined && loggerSuffix.length > 0 ? "." + loggerSuffix : ""),
            message: message,
            timestamp: Date.now()
        }];

        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open("POST", THIS.glogURL);
        xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xmlhttp.send(JSON.stringify(json));
    };

    this.constructMessage = function(args) {
        let message = ''
        for (let i = 0; i < args.length; ++i) {
            if (i > 0) {
                message += ' '
            }
            message += typeof args[i] === 'object' ? JSON.stringify(args[i]) : args[i]
        }
        return message
    }

    this.logOverride = function() {
        THIS.logToLogMX(constructMessage(arguments), "DEBUG", "console");

        THIS._log.apply(window.console, arguments);
    };

    this.debugOverride = function() {
        THIS.logToLogMX(constructMessage(arguments), "DEBUG", "console");

        THIS._debug.apply(window.console, arguments);
    };

    this.infoOverride = function() {
        THIS.logToLogMX(constructMessage(arguments), "INFO", "console");

        THIS._info.apply(window.console, arguments);
    };

    this.warnOverride = function() {
        THIS.logToLogMX(constructMessage(arguments), "WARN", "console");

        THIS._warn.apply(window.console, arguments);
    };

    this.errorOverride = function() {
        THIS.logToLogMX(constructMessage(arguments), "ERROR", "console");

        THIS._error.apply(window.console, arguments);
    };

    this.logErrorDirectly = function(message, loggerSuffix) {
        if (THIS.initialized) {
            THIS.logToLogMX(message, "ERROR", loggerSuffix);
            return true;
        } else {
            return false;
        }
    };

    this.startJSLogMXLogging = function(server, port, path) {
        // determine server prefix and/or port, if either were not provided
        var s = server.length > 0 ? server : "localhost";
        var p = parseInt(port);
        if (s.toLowerCase().indexOf("http") != 0 && port.length == 0) {
            // if prefix is not set, nor is port, default them both
            if (window.location.protocol === 'https:') {
                s = "https://" + s;
                p = 8081;
            } else {
                s = "http://" + s;
                p = 8080;
            }
        } else if (s.toLowerCase().indexOf("http") == 0 && port.length == 0) {
            // if prefix is set but not port, determine port according to prefix (secure 8081, default 8080)
            if (s.toLowerCase().indexOf("https") == 0)  {
                p = 8081;
            } else {
                p = 8080;
            }
        } else if (s.toLowerCase().indexOf("http") != 0 && port.length != 0) {
            // if the prefix is not set but the port is, try to pull it from the port
            if (window.location.protocol === 'https:' || p == 8081) {
                s = "https://" + s;
            } else {
                s = "http://" + s;
            }
        }
        THIS.glogURL = s + ":" + p + "/" + path;

        // hook up the actual logging
        if (typeof window.console != 'undefined') {
            // store original console output methods
            THIS._log = window.console.log.bind(window.console);
            THIS._debug = window.console.debug.bind(window.console);
            THIS._info = window.console.info.bind(window.console);
            THIS._warn = window.console.warn.bind(window.console);
            THIS._error = window.console.error.bind(window.console);

            // set up override output methods
            window.console.log = THIS.logOverride;
            window.console.debug = THIS.debugOverride;
            window.console.info = THIS.infoOverride;
            window.console.warn = THIS.warnOverride;
            window.console.error = THIS.errorOverride;
        }
    };

    this.initialize = function(params) {
        if (THIS.initialized) return;
        THIS.initialized = true;

        if (params.length > 0) {
            var portPos = params.indexOf(":", params.indexOf("://") + 1);
            if (portPos >= 0) {
                var pathPos = params.indexOf(":", portPos + 1);
                if (pathPos >= 0) {
                    THIS.startJSLogMXLogging(params.substring(0, portPos), params.substring(portPos + 1, pathPos), params.substring(pathPos + 1));
                } else {
                    THIS.startJSLogMXLogging(params.substring(0, portPos), params.substring(portPos + 1), "logmx");
                }
            } else {
                THIS.startJSLogMXLogging(params, "", "logmx");
            }
        } else {
            THIS.startJSLogMXLogging("localhost", "", "logmx");
        }
    };

    return {
        initialize: initialize,
        logError: logErrorDirectly
    };
})();