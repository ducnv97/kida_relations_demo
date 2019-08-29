const Linner = require('./Liner');
const line = require("@line/bot-sdk");

module.exports = (req, res, next) => {
    const client = new line.Client(req.configLineOfficial);
    const liner = new Linner(client);

    req.liner = liner;
    next();
}
