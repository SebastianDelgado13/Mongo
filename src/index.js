require('dotenv').config();

const app = require('./server');
require('./databases');


app.listen(app.get('port'), () => {

    console.log('Server on port 4000')

})