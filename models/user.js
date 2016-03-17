var mongoose = require('mongoose'),
    debug    = require('debug')('app:models');

var _ = require('lodash');

var userSchema = new mongoose.Schema({
  newUser:                  {type: Boolean, required: true, default: true},
  type:                     {type: String, required: true, enum: ['student', 'instructor', 'professional'], default: 'student'},
  // TAKE OUT DEFAULT FOR DEPLOY
  linkedInId:               {type: String, required: true, default: 'LINKEDIN_ID'},
  linkedInPublicProfileUrl: {type: String, required: true, default: 'LINKEDIN_PROFILE_URL'},
  linkedInProfilePicUrl:    {type: String, required: true, default: 'LINKEDIN_PROFILE_URL'},
  firstName:                {type: String, required: true},
  lastName:                 {type: String, required: true},
  email:                    {type: String, required: true},
  institution:              {type: String},
  location:                 String,
  classrooms:               [{type: mongoose.Schema.Types.ObjectId, ref: 'Classroom'}]
});

// creating an instance method for the userSchema
// http://mongoosejs.com/docs/guide.html#methods
userSchema.methods.isStudent = function() {
  if (this.type === 'student') return true;
  return false;
};

userSchema.methods.displayName = function() {
  return _.startCase(this.firstName + ' ' + this.lastName[0]) + '.';
};

var User = mongoose.model('User', userSchema);

module.exports = User;
