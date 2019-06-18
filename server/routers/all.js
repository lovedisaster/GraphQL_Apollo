const express = require('express'),
    path = require('path'),
    config = require('../../config');
    router = express.Router();

router.get('^(?!.*(graphql|api))', function(req, res) {
    res.render(path.resolve(config.paths.server_pages + '/index'), { isProd: config.isProd});
});

module.exports = router;