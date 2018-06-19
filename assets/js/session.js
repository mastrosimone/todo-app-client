"use strict";

(function(window, Cookies) {
    var UUID_KEY = 'uuid';

    if (!Cookies) {
        /**
         * see https://github.com/js-cookie/js-cookie
         */
        throw new Error('Cookies library is required! Please run \`npm install\`');
    }

    /**
     * Non vi spaventate! L'ho copiata da stackoverflow 8)
     * see https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
     *
     * @returns {string}
     */
    function guid() {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }

        return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
    }

    /**
     * Get current session uuid
     * see https://it.wikipedia.org/wiki/Universally_unique_identifier
     * 
     * @returns {string}
     */
    function getSession() {
        var uuid = Cookies.get(UUID_KEY);

        if (!uuid) {
            uuid = guid();

            Cookies.set(UUID_KEY, uuid);
        }

        return uuid;
    }

    // Export to window
    window.app = window.app || {};
    window.app.Session = {
        get: getSession
    };
})(window, Cookies);
