var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ProjectSchema = new Schema(
    {
        name: {type: String, required: true},
        acronym: {type: String, required: true, unique: true},
        beginDate: {type: String, required: true},
        endDate: {type:String}

    });

ProjectSchema
.virtual('url')
    .get(function () {
        return '/detail/' + this._id;
    });

module.exports = mongoose.model('Project', ProjectSchema);