const express = require("express");
const router = express.Router();

const burger = require("../models/burger.js");

router.get("/", function (request, response) {
    burger.all(function (data) {
        const burgerObj = {
            burger: data
        };
        response.render("index", burgerObj);
    });
});

router.post("/api/burgers", function (request, response) {
    burger.create(request.body.name, function (result) {
        response.json({ id: result.insertId });
    });
});

router.put("/api/burgers/:id", function (request, response) {
    const condition = "id = " + request.params.id;
    burger.update({
        devoured: request.body.devoured
    },
        condition, function (result) {
            if (result.changedRows == 0) {
                return response.status(404).end();

            } else {
                response.status(200).end();
            }
        }
    )
});

module.exports = router;