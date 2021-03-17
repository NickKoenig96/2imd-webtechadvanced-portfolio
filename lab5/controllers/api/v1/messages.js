//const Message = require("../../../models/messages");

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const messageSchema = new mongoose.Schema({
    user: String,
    message: String,

});

const Message = mongoose.model('Message', messageSchema);


function getAllM (req, res){
   /* let m = new Message();
    m.user = 'test',
    m.message = 'wekrt dit ?'

    m.save();


    res.json({
        status: "succes",
        message: "GETTING messages",
    });*/

    Message.find({}, (err, docs) => {
        if(!err) {
            res.json({
                "status": "success",
                "message": docs
            })
        }
    })
} 

function getOneM (req, res){
    let id = req.params.id;
    res.json({
        status: "succes",
        message: `GETTING message with ID is ${id}`,
    });
    
    };


    function postAllM (req, res){
        res.json({
            status: "succes",
            message: "POSTING a new message for user Pikachu",
        });
    } 


    function putOneM (req, res){
        let id = req.params.id;
        res.json({
            status: "succes",
            message: `UPDATING a message with id is ${id}`,
        });
        
        };

        function deleteOneM (req, res){
            let id = req.params.id;
            res.json({
                status: "succes",
                message: `DELETING a message with id is ${id}`,
            });
            
            };

            function getUserByName (req, res){
                let username = req.params.username;
                res.json({
                    status: "succes",
                    message: `GETTING message for username ${username}`,
                });
                
                };
            

module.exports.getAllM = getAllM;
module.exports.getOneM = getOneM;
module.exports.postAllM = postAllM;
module.exports.putOneM = putOneM;
module.exports.deleteOneM = deleteOneM;
module.exports.getUserByName = getUserByName;
