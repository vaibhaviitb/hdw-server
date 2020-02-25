const mongoose = require('mongoose');

const playerSchema={
  name: {type: String},
  dob: {type: String},
  country: {type: String},
  role: {type: String},
  bowlingStyle: {type: String},
  battingStyle: {type: String},
  odi:{
      matches: {type: String},
      fielding:{
          catches:{type: String},
          stumpings:{type: String}
      },
      batting: {
          innings: {type: String},
          notOut: {type: String},
          runs: {type: String},
          highestScore: {type: String},
          average: {type: String},
          bf: {type: String},
          strikeRate: {type: String},
          '100s': {type: String},
          '50s': {type: String},
          '4s':{type: String},
          '6s': {type: String}
      },
      bowling: {
          innings: {type: String},
          bowls: {type: String},
          runs: {type: String},
          wickets: {type: String},
          bestBowlingIndex: {type: String},
          average:{type: String},
          economy:{type: String},
          strikeRate: {type: String},
          '4W': {type: String},
          '5W': {type: String}

      } 
  }
}

module.exports = mongoose.model('Player', playerSchema)