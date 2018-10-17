class Response {
    constructor(resObj) {
        this.status = resObj.status;
        this.data = resObj.data || {};
        this.error = resObj.error || {};
        this.message = resObj.message || '';
    }
}

module.exports = Response;
