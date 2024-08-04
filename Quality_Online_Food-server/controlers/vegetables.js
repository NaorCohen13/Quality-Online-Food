const Model = require('../schemas/vegetables')

async function newVegetable(req, res) {
    console.log(`I am in newVegetable with: ${JSON.stringify(req.body)}`)
    const vegetable = new Model(req.body);
    try {
        const data = await vegetable.save();
        return res.send("vegetable is added ")
    }
    catch (err) {
        console.log("Error.....@@@@@@@@@")
    }
    // return res.send("user is not added ")
}

async function vegetables(req, res) {
    console.log(`I am in vegetables with: ${JSON.stringify(req.body)}`)
    try {
        const vegetables = await Model.find({})
        if(vegetables.length > 0) {
            return res.status(200).send(vegetables)
        }

        return res.status(404).send(" not found=")
    }
    catch (err) {
        console.log(err)
        let a = 8
    }
    // return res.send("user is not added ")
}

module.exports = { 
    newVegetable,
    vegetables,    
}