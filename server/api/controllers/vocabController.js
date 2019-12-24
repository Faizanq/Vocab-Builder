const mongoose = require('mongoose');
const Vocab = mongoose.model('Vocab');

exports.getWordList = (req,res)=>{
	Vocab.find({},(err,words)=>{
		
		if(err)
			res.json(err);

		res.json(words);
	});
};

exports.saveWord = (req,res)=>{
	let vocab = new Vocab(req.body);
	vocab.save((err,word)=>{
		if(err)
			res.json(err);
		res.json(word);
	})
};

exports.getWord = (req,res)=>{
	Vocab.findById(req.params.wordId,(err,word)=>{
		if(err)
			res.json(err);
		res.json(word);
	})
};

exports.updateWord = (req,res)=>{
	Vocab.findOneAndUpdate({_id:req.params.wordId},req.body,{new:true},(err,word)=>{
		if(err)
			res.json(err);
		res.json(word);
	})
};

exports.deleteWord = (req,res)=>{
	Vocab.deleteOne({_id:req.params.wordId},(err)=>{
		if(err)
			res.json(err);
		res.json({message:'Deleted successfully'})
	})
};