var Project = require('../models/project');

const {body, validationResult} = require("express-validator");

exports.project_create_post = [
    (req, res, next) => {

        const errors = validationResult(req);
        //TODO talvex verificar endDate
        var project = new Project({
            name: req.body.name,
            acronym: req.body.acronym,
            beginDate: req.body.acronym,
            endDate: req.body.endDate
        });
        if (!errors.isEmpty()) {
            res.send();
        } else {
            project.save(function (err) {
                if (err) {
                    return next(err);
                }
                res.send({
                    name: project.name,
                    acronym: project.acronym,
                    beginDate: project.beginDate,
                    endDate: project.endDate
                });
            })
        }
    }
];