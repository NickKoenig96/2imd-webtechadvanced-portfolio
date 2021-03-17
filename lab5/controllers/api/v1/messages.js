function store (req, res){
    //save to db
    res.json({
        status: "succes",
        message: "GETTING messages",
        followers: 123456,
    });
} 

function getOne (req, res){
    let id = req.params.id;
    res.send(id);
    /*res.json({
        message: `GETTING message with ID is ${id}`,
    });*/
    
    
    };

module.exports.store = store;
module.exports.getOne = getOne;