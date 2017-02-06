const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

const BucketSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  // Monthly Budget or Savings Goal
  type: {
    type: String,
    required: true
  },
  // Either budget or goal amount
  budget: {
    type: Number,
    required: true
  },
  // Determines whether or not bucket resets monthly
  isFund: {
    type: Boolean,
    default: false
  }
});

const Bucket = mongoose.model('Bucket', BucketSchema);

module.exports = Bucket;
