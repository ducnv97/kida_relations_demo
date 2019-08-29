const config = require('../../config/index')

module.exports = async (req, res, next) => {
    let chanelId = req.params.chanelid;
    req.configLineOfficial = config.lineOfficial[chanelId];
    await next();
}
