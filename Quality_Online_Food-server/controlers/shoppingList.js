const Model = require('../schemas/ShoppingList');

async function newShoppingList(req, res) {
    console.log(`I am in newShoppingList with: ${JSON.stringify(req.body)}`);
    const shoppingList = new Model(req.body);
    try {
        const data = await shoppingList.save();
        console.log(`In newShoppingList with ${data._id}`);
        return res.send({ id: data._id });
    } catch (err) {
        console.log("Error.....@@@@@@@@@");
        return res.status(500).send("Error saving the shopping list");
    }
}

async function shoppingList(req, res) {
    console.log(`I am in shoppingList with: ${JSON.stringify(req.body)}`);
    console.log(`I am in shoppingList 2 with: ${req.query.id}`);

    try {
        const shoppingList = await Model.findById(req.query.id);
        if (shoppingList) {
            return res.status(200).send(shoppingList);
        }
        return res.status(404).send("Not found");
    } catch (err) {
        console.log(err);
        return res.status(404).send("Not found");
    }
}

async function getAllShoppingLists(req, res) {
    console.log("Fetching all shopping lists");
    try {
        const shoppingLists = await Model.find({});
        console.log("Found shopping lists:", shoppingLists);
        // המרה לפורמט המתאים
        const formattedLists = shoppingLists.map(list => ({
            orderNumber: list._id,
            date: list.date.toDateString(),
            totalAmount: list.price,
            status: "Completed" // ניתן לעדכן את הסטטוס בהתאם לצורך
        }));
        return res.status(200).json(formattedLists); // שליחת JSON
    } catch (err) {
        console.log(err);
        return res.status(500).send("Error fetching shopping lists");
    }
}

module.exports = {
    newShoppingList,
    shoppingList,
    getAllShoppingLists
};
