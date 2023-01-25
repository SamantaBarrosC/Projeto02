const app = require('./app');
const mongoose = require('mongoose')

mongoose.set('strictQuery', false);

require('dotenv').config({path:'variables.env'});


mongoose.connect(process.env.DATABASE, {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.Promise = global.Promise;
mongoose.connection.on('error',(error) => {
    console.error("ERROR: "+error.message);
})
app.set('port',process.env.PORT  || 7777);

const server = app.listen(app.get ('port'),() => {
    console.log("Servidor rodando na porta : "+ server.address().port);
})  