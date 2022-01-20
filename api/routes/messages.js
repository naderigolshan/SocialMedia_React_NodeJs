const router = require("express").Router();
const Message = require("../models/Message");

// new msg
router.post("/", async (req, res) => {
    const newMsg = new Message(req.body)

    try {
        const savedMsg = await newMsg.save();
        res.status(200).json(savedMsg);
    } catch (error) {
        res.status(500).json(error);
    }
})

// get msg
router.get("/:convId", async (req, res) => {
    try {
        const messages = await Message.find({
            conversationId: req.params.convId
        })
        res.status(200).json(messages);
    } catch (error) {
        res.status(500).json(error);
    }
})

module.exports = router;