const api = {

    async checkUser(req, res) {
        console.log('Are we here????');
        const email = req.params.email;
        try {
            console.log(req.params)
            res.json({status: true});
        }
        catch(e) {
            console.error(e);
            res.json({status: false});
        }

    }

}

module.exports = api;
