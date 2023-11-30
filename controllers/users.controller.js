const Users = require('../users.json');

// GET ALL Users
module.exports.getAllUsers = (req, res) => {
    console.log('ok');
    res.status(200).send({
        success: true,
        message: "Successfully all user shown",
        data: Users
    })
}

// GET Random Users
module.exports.getRandomUser = (req, res) => {
    const user = Users.map(user => user.id)

    const randomUserLength = Math.floor(Math.random() * user.toString().length)

    // const randomUser = Users.find()

    res.status(200).send({
        success: true,
        message: "Successfully random user shown",
        data: randomUserLength
    })
}


// POST new User
module.exports.saveNewUser = (req, res) => {

    Users.push(req.body)
    res.status(200).send({
        success: true,
        message: "Successfully user saved",
        data: Users
    })
}


// Update User
module.exports.updateUser = (req, res) => {
    res.status(200).send({
        success: true,
        message: "Successfully updated",
        // data: Users
    })
}

// Update Users
module.exports.updateUsers = (req, res) => {
    res.status(200).send({
        success: true,
        message: "Successfully updated",
        // data: Users
    })
}

// Delete a User
module.exports.deleteUser = (req, res) => {
    res.status(200).send({
        success: true,
        message: "Successfully deleted",
        // data: Users
    })
}