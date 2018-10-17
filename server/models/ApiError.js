class ApiError extends Error {
    constructor(errorObj) {
        super(errorObj.message)
        this.name = errorObj.name;
        this.code = errorObj.code;
        this.text = errorObj.message;
    }
}

module.exports = ApiError;
