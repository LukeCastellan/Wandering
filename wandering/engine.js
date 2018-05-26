var Engine = {
    _log: false,

    log: function(msg) {
        if (this._log) {
            console.log(msg);
        }
    },

    generateSaveCode: function(game) {
        return btoa(JSON.stringify(game));
    },

    loadSaveCode: function(saveCode) {
        try {
            return JSON.parse(atob(saveCode));
        } catch (err) {
            return null;
        }
    }
}