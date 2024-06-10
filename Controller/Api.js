const messageSchema = require('../model/Message')

const addNewMessage = async (req, res) => {
    const { name, message, createdAt } = req.body
    if (!name || !message || !createdAt) return res.status(400).json({ "error": "name and message and createdAt is required!" })

    try {
        const newMessage = new messageSchema({
            name: name,
            message: message,
            createdAt: createdAt
        })

        await newMessage.save()
        res.status(200).json({ "success": "message added" })

    } catch (error) {
        res.status(500).json({ "error": "There's an error!" })
    }
}

const getAllMessage = async (req, res) => {
    try {
        const messages = await messageSchema.find({});
        res.status(200).send(messages);
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: 'An error occurred while fetching messages' });
    }
}

const deleteAllMessage = async (req, res) => {
    try {
        const result = await messageSchema.deleteMany({});
        res.status(200).json({ "success": "All messages deleted successfully" });

    } catch (error) {
        console.error(error);
        res.status(500).send({ error: 'An error occurred while fetching messages' });
    }
}

module.exports = {
    addNewMessage,
    getAllMessage,
    deleteAllMessage
}