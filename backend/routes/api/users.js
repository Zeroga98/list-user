var router = require('express').Router();
var request = require('request');

router.get('/user', function (req, res, next) {
    request(`https://reqres.in/api/users?page=${req.query.page}`, function (error, response, body) {
        var req = JSON.parse(body);
        return res.json(
            {
                page: req.page,
                total_pages: req.total_pages,
                data: req.data,
            }
        );
    });
});

router.get('/user-profile/:id', function (req, res, next) {
    request(`https://reqres.in/api/users/${req.params.id}`, function (error, response, body) {
        var req = JSON.parse(body);
        return res.json(req.data);
    });
});

module.exports = router;