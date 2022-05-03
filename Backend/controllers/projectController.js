var Project = require('../models/project');

const {body, validationResult} = require("express-validator");

exports.update_project = [
    (req,res,next) => {
        var project = new Project({
            name: req.body.name,
            acronym: req.body.acronym,
            beginDate: req.body.beginDate,
            endDate: req.body.endDate,
            tasks: req.body.tasks,
            admin: req.body.admin,
            _id: req.params.id,
        });

        Project.findByIdAndUpdate(req.params.id, project, {}, function (err){
            if(err){return next(err)}
            res.send(project);
        })
    }
];

exports.get_project_by_acronym = function (req,res,next) {
    let query = {acronym: req.params.acronym};
    Project.findOne(query)
        .exec(function (err, proj) {
            if (err) { return next(err) }
            res.send(proj);
        })
};


exports.project_detail = function (req, res, next) {
    Project.findById(req.params.id)
        .exec(function (err, proj) {
        if (err) { return next(err) }
        res.send(proj);
    })
};


exports.project_create_post = [
    (req, res, next) => {

        const errors = validationResult(req);
        //TODO talvex verificar endDate
        var project = new Project({
            name: req.body.name,
            acronym: req.body.acronym,
            beginDate: req.body.beginDate,
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