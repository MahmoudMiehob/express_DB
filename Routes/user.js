const express = require("express");
const User = require("../Models/User");
const router = express.Router();


router.post("/", (req, res) => {
    const user = new User({ firstname: req.body.firstname, lastname: req.body.lastname });
console.log(req.body);
    user
        .save()
        .then((data) => res.status(200).send(data))
        .catch((error) => {
            res.status(500).send(error);
        });
});


router.get("/:userid", (req, res) => {
    User.findById(req.params.userid)
        .then((data) => res.json(data))
        .catch((error) => {
            res.send(error);
        });
});


router.delete("/:userid", (req, res) => {
    User.deleteOne({ _id: req.params.userid })
        .then((data) => res.json(data))
        .catch((error) => res.send(error));
});



module.exports = router;