"use strict";
var Client = (function () {
    function Client(values) {
        if (values === void 0) { values = {}; }
        this.name = '';
        this.active = true;
        this.website = '';
        this.instagramName = '';
        this.instagramId = '';
        this.facebookName = '';
        this.facebookId = '';
        Object.assign(this, values);
    }
    return Client;
}());
exports.Client = Client;
//# sourceMappingURL=client.js.map