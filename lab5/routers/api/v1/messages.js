const express =require('express');
const router = express.Router();

router.post("/", (req, res) =>{
    res.send('test post message');
    //save to db
    /*res.json({
        status: "succes",
        message: "GETTING messages",
        followers: 123456,
    });*/
} );


/*router.get("/:id", (req, res) =>{
let id = req.params.id;

res.json({
    message: `message”: “GETTING message with ID i${id}`
})


})*/

module.exports = router;