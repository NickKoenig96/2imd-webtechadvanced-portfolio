const express =require('express');
const router = express.Router();
const mesaggesController = require('../../../controllers/api/v1/messages')

router.get('/', mesaggesController.getAllM); //get all messages
router.get('/:id', mesaggesController.getOneM); // getmessage with specific id
router.post('/', mesaggesController.postAllM); // post a message
router.put('/:id', mesaggesController.putOneM); // update specific message
router.delete('/:id', mesaggesController.deleteOneM); // delete specific message
router.get("/user/:username", mesaggesController.getUserByName); // get user by username








module.exports = router;