const express = require('express');
const router = express.Router();

const controllQuest = require('../controllers/question');
const controllAnswer = require('../controllers/answer');

router.get('/', controllQuest.findAllQuestion)
router.post('/', controllQuest.createQuestion) //auth user
router.get('/:id', controllQuest.getIdQuestion) //sama dengan get id answer
router.put('/:id', controllQuest.updateQuestion) //auth
router.delete('/:id', controllQuest.deleteQuestion)

router.get('/:id/answers', controllAnswer.findAnswer) //auth user
router.post('/:id/reply', controllAnswer.createAnswer)
router.delete('/:id/answer/:answerid', controllAnswer.deleteAnswer)


module.exports = router;