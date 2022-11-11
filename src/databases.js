const mongoose = require('mongoose')

const {DOMI_APP_MONGODB_HOST,DOMI_APP_MONGODB_DATABASES}= process.env;
const MONGODB_URI = '/${DOMI_APP_MONGODB_HOST}/${DOMI_APP_MONGODB_DATABASES}';

mongoose.connect('MONGODB_URI', {
        useUnifiedTopology: true,
        useNewUrlParser: true

})
.then(db => console.log('conectado'))
.catch(err => console.log(err));