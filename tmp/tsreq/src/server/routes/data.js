/// <reference path="../../../vendortypescripts/node/node.d.ts"/>
/// <reference path="../../../vendortypescripts/express/express.d.ts"/>
var express = require('express');
var api = require('../modules/api');
var router = express.Router();
router.get('/products/:productName', function (req, res, next) {
    var wr = new api.Fda();
    wr.Products(req.params.productName, function (body) {
        res.json(body);
    });
});
router.get('/product/:id', function (req, res, next) {
    var wr = new api.Fda();
    wr.Product(req.params.id, function (body) {
        res.json(body);
    });
});
router.get('/ingredient/:ingredientName', function (req, res, next) {
    var wr = new api.Fda();
    wr.Ingredient(req.params.ingredientName, function (body) {
        res.json(body);
    });
});
router.get('/purpose/:purpose', function (req, res, next) {
    var wr = new api.Fda();
    wr.Purpose(req.params.purpose, function (body) {
        res.json(body);
    });
});
router.get('/purposeWithQuery/:purpose', function (req, res, next) {
    var wr = new api.Fda();
    wr.Purpose(req.params.purpose, function (body) {
<<<<<<< HEAD:tmp/tsreq/src/server/routes/data.js
        var result = { "q": req.params.purpose, "d": body };
        res.json(result);
=======
        body = '{"q": "' + req.params.purpose + '", "d": ' + body + '}';
        res.json(body);
    });
});
router.get('/ingredientCount/:ingredientName', function (req, res, next) {
    var wr = new api.Fda();
    wr.IngredientCount(req.params.ingredientName, function (body) {
        res.json(body);
>>>>>>> bd0baca5d4ca1c3bc02f1d1dba75c203eabd3a9d:tmp/tsreq/src/server/routes/data.js
    });
});
router.get('/purposeWithoutIngredient/:purpose/:ingredient', function (req, res, next) {
    var wr = new api.Fda();
    wr.PurposeWithoutIngredient(req.params.purpose, req.params.ingredient, function (body) {
        res.json(body);
    });
});
module.exports = router;
