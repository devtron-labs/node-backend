const mongoose = require('mongoose');

mongoose.connect('mongodb://root:t5Jn5h05nH@mongo-devtron-demo-mongodb.devtron-demo:27017/admin', {useNewUrlParser: true}, (err) => {
    if (!err)
        console.log('MongoDB connection succeeded.');
    else
        console.log('Error in DB connection : ' + JSON.stringify(err, undefined, 2));
});

module.exports = mongoose;