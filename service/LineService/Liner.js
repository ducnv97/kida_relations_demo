class Liner {
    constructor (line) {
        this.line = line;
    }

    async replyMessage(replyToken , data, disablePushNotification = false) {
        return await this.line.replyMessage(replyToken, data, disablePushNotification);
    }

    async pushMessage(to, message) {
        return await this.line.pushMessage(to, message);
    }

    async getProfile(userId) {
        return await this.line.getProfile(userId);
    }
}

module.exports = Liner;