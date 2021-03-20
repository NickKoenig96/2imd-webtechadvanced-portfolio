/*const Message = require("../../../models/messages");*/

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const messageSchema = new mongoose.Schema({
    user: String,
    message: String,

});

const Message = mongoose.model('Message', messageSchema);


function getAllM(req, res) {
    /*let m = new Message();
     m.user = 'test',
     m.message = 'wekrt dit ?'
 
     m.save();
 
 
     res.json({
         status: "succes",
         message: "GETTING messages",
     });*/

   Message.find({}, function (err, docs) {
        if (!err) {
            res.json({
                "status": "success",
                "message": docs
            })
        } else {
            res.json({
                "status": "error",
                "error": "Please provide a message"
            })

        }
    })
}

function getOneM(req, res) {
    let id = req.params.id;
     res.json({
         status: "succes",
         message: `GETTING message with ID is ${id}`,
     });

   Message.find({ _id: req.params.id }, function (err, docs) {
        if (!err) {
            res.json({
                "status": "success",
                "message": docs
            })
        } else {
            res.json({
                "status": "error",
                "error": "Please provide a message"
            })
        }
    })

};


function postAllM(req, res) {
    let m = new Message();
    m.user = 'Pickachu',
        m.message = 'nodejs isn’t hard, or is it?'

    m.save(function (err, doc) {
        if (!err) {
            res.json({
                "status": "success",
                "message": doc
            })
        } else {
            res.json({
                "status": "error",
                "error": "Please provide a message"
            })
        }
    });

    /* res.json({
         status: "succes",
         message: "POSTING a new message for user Pikachu",
     });*/
}


function putOneM(req, res) {
     let id = req.params.id;
     res.json({
         status: "succes",
         message: `UPDATING a message with id is ${id}`,
     });

    let newMessage = 'This is an updated message'

    Message.findByIdAndUpdate({ _id: req.params.id }, { text: newMessage }, function (err) {
        if (!err) {
            res.json({
                "status": "success",
                "message": newMessage,
            })

        } else {
            res.json({
                "status": "error",
                "error": "Please provide a message"
            })
        }

    })

};

function deleteOneM(req, res) {
     let id = req.params.id;
     res.json({
         status: "succes",
         message: `DELETING a message with id is ${id}`,
     });

    Message.findByIdAndDelete({ _id: req.params.id }, function (err) {

        if (!err) {
            res.json({
                "status": "success",
                "message": "DELETING a message with id is" + req.params.id,
            })
        } else {
            res.json({
                "status": "error",
                "error": "Please provide a message"
            })
        }

    })

};

function getUserByName(req, res) {
    let username = req.params.username;
    res.json({
        status: "succes",
        message: `GETTING message for username ${username}`,
    });


    Message.find({ user: req.params.username }, function (err, docs) {
    })
    if (!err) {
        res.json({
            "status": "success",
            "message": docs
        })
    } else {
        res.json({
            "status": "error",
            "error": "Please provide a username"
        })
    }



};


module.exports.getAllM = getAllM;
module.exports.getOneM = getOneM;
module.exports.postAllM = postAllM;
module.exports.putOneM = putOneM;
module.exports.deleteOneM = deleteOneM;
module.exports.getUserByName = getUserByName;




/*function getAllM (req, res){
    res.json({
        status: "succes",
        message: "GETTING messages",
    });
} 

function getOneM (req, res){
    let id = req.params.id;
    res.send(id);
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
module.exports.getUserByName = getUserByName;*/
