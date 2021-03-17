function getAllM (req, res){
    res.json({
        status: "succes",
        message: "GETTING messages",
    });
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
