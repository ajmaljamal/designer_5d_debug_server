const mongoose = require('mongoose');

const Bug = mongoose.model('Bug', {
    type: {
        type: String
    },
    title: {
        type: String
    },
    projectData: {
        type: String,
        get: function(data) {
            try { 
              return JSON.parse(data);
            } catch(err) { 
              return data;
            }
          },
          set: function(data) {
            return JSON.stringify(data);
          }
    },
    path: {
        type: String
    }
});

module.exports = Bug;