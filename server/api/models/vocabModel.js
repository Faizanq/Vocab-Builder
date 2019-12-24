const mongoose = require('mongoose');
let { Schema } = mongoose;

const VocabSchema = new Schema({

	arabic:{
		type:String,
		required:'Arabic word can\'t be blank'
	},
	english:{
	  type:String,
	  required:'English word can\'t be balnk'
	}

},{collection:'vocab'});


module.exports = mongoose.model('Vocab', VocabSchema);