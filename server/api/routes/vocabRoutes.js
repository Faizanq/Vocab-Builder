const VocabController = require('../controllers/vocabController')

module.exports = app => {
	app
		.route('/words')
		.get(VocabController.getWordList)
		.post(VocabController.saveWord);

	app
		.route('/words/:wordId')
		.get(VocabController.getWord)
		.put(VocabController.updateWord)
		.delete(VocabController.deleteWord);
};