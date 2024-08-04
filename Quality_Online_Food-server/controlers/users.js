const Model = require('../schemas/users');

async function register(req, res) {
    console.log(`I am in register with: ${JSON.stringify(req.body)}`);
    const user = new Model(req.body);
    try {
        const data = await user.save();
        return res.send("user is added");
    } catch (err) {
        console.log("Error.....@@@@@@@@@");
        return res.status(500).send("Error adding user");
    }
}

async function login(req, res) {
    console.log(`I am in login with: ${JSON.stringify(req.body)}`);
    try {
        const users = await Model.find({ email: req.body.email, password: req.body.password });
        if (users.length > 0) {
            const user = users[0];
            return res.status(200).send({ 
                message: "Login successful", 
                user: {
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email: user.email,
                }
            });
        }
        return res.status(404).send("User not found");
    } catch (err) {
        console.log(err);
        return res.status(500).send("Error logging in");
    }
}

module.exports = { 
    register,
    login,
};
