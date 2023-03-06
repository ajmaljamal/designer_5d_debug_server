const mongoose = require('mongoose');

const Bug = mongoose.model('Bug', {
    title: {
        type: String
    },
    projectData: {
        type: String
    },
    path: {
        type: String
    }
});

module.exports = Bug;