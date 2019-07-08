var router = require('express').Router();
var request = require('request');

router.get('/user', function (req, res, next) {
    request('https://reqres.in/api/users?page=1', function (error, response, body) {
        return body
    });
});

module.exports = router;