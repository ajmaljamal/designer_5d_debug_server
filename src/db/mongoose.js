const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/designer5d', { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
}, err => {
   if(err) throw err;
   console.log('Connected to MongoDB!!!')
});

