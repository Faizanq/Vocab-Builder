const express = require('express');
const port = process.env.PORT || 3000;
const emoji = require('node-emoji');
const mongoose = require('mongoose');
const cors  = require('cors');
const bodyParser = require('body-parser');

const app = express();

global.Vocab = require('./api/models/vocabModel');
const Routes = require('./api/routes/vocabRoutes');

mongoose.Promise = global.Promise;
mongoose.set('useFindAndModify',true);
mongoose.connect(
	'mongodb://localhost:27017/vocab-builder',
	{useNewUrlParser:true},(err)=>{
		if(err){
			console.log('MongoDB is not connected Yet!');
			process.exit();
		}
	}
);


app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

Routes(app);



app.listen(port,()=>{
	console.log(`${emoji.get('rocket')} Server is runing on Port: ${port}`);
});

app.get('/',(req,res)=>{

	res.send(`I ${emoji.get('heart')}  ${emoji.get('pizza')}`)

});

app.use((req,res)=>{
	res.status(404).send(` ${emoji.get('cry')} Route: ( ${req.originalUrl} ) not found`);
});