const j = require('joi');
const valid = (req, res) => {
    const schema = j.object({
        username: j.string().required()
    });
    const { value } = schema.validate(req.params);
    if (value.username !== "John Doe") {
        return res.status(400).json({ msg: "Username not found" });
    }
};

module.exports = valid;