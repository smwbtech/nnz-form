const api = {

    async checkUser(req, res) {
        const email = req.params.email;
        try {
            console.log(email);
            res.json({status: true});
        }
        catch(e) {
            console.error(e);
            res.json({status: false});
        }

    }
}

module.exports = api;
