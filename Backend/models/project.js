var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ProjectSchema = new Schema(
    {
        name: {type: String, required: true},
        acronym: {type: String, required: true, unique: true},
        beginDate: {type: String, required: true},
        endDate: {type:String},
        tasks: [{type: Schema.Types.ObjectId, ref: 'Task'}],
        admin: {type: Schema.Types.ObjectId, ref: 'Admin'}
    });

ProjectSchema
.virtual('url')
    .get(function () {
        return '/detail/' + this._id;
    });

module.exports = mongoose.model('Project', ProjectSchema);