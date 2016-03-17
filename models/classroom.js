var mongoose = require('mongoose'),
    debug    = require('debug')('app:models');

var tagSchema = new mongoose.Schema({
  tag:   String,
  owner: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
});

var commentSchema = new mongoose.Schema({
  author:    {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  body:      {type: String, required: true},
  createdAt: {type: Date, default: Date.now},
});

var answerSchema = new mongoose.Schema({
  author:    {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  body:      {type: String, required: true},
  createdAt: {type: Date, default: Date.now},
  upvotes:   [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
  comments:  [commentSchema]
});

var questionSchema = new mongoose.Schema({
  author:    {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  title:     {type: String, required: true},
  body:      {type: String, required: true},
  title:     {type: String, required: true},
  createdAt: {type: Date, default: Date.now},
  upvotes:   [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
  tags:      [tagSchema], // TODO: validate uniqueness, http://mongoosejs.com/docs/api.html#types_array_MongooseArray.addToSet
  answers:   [answerSchema]
});

var classroomSchema = new mongoose.Schema({
  signUpCode:    {type: String, required: true}, // TODO: check signUpCode is unique before assigning
  type:          {type: String, enum: ['course', 'subject-thread', 'industry-thread'], default: 'course'},
  name:          {type: String, required: true},
  createdAt:     {type: Date, default: Date.now},
  creator:       {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  admins:        [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}], // TODO: check if unique before assigning
  students:      [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}], // TODO: check if unique before assigning
  professionals: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}], // TODO: check if unique before assigning
  questions:     [questionSchema],
  description:   {type: String, default: 'Classroom description'}
  // schedule:   {days: [String], startDate: Date, endDate: Date, startTime: Number, endTime: Number},
  // syllabus:   String,
  // lessons:    [String],
});

var Classroom = mongoose.model('Classroom', classroomSchema);

// TODOs
// add countUpvotes method to schemas
answerSchema.methods.numUpvotes = function() {
  return this.upvotes.length;
};

answerSchema.methods.numComments = function() {
  return this.comments.length;
};

questionSchema.methods.numUpvotes = function() {
  return this.upvotes.length;
};

module.exports = Classroom;
