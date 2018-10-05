const api = {

    async checkUser(req, res) {
<<<<<<< HEAD
        const email = req.params.email;
        try {
=======
        console.log('Are we here????');
        const email = req.params.email;
        try {
            console.log(req.params)
>>>>>>> 87b4d12ceb8b5ce9d690a69f9ef9b742526a8f11
            res.json({status: true});
        }
        catch(e) {
            console.error(e);
            res.json({status: false});
        }

    }

}

module.exports = api;
