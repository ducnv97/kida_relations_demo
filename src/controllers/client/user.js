'use strict';

//const Config = require('../../models/cms/config');
import {use} from "i18next";

const _ = require('lodash');
//const authenticate = require('../../middleware/authenticate');
//const response = require('../../core/response');
import User from '../../module/client/user';

const user = new User();

module.exports.run = function (app, io) {
    app.get('/client/users', (req, res) => {
        const params = _.pick(req.query, ['pageIndex', 'pageSize']);
        user.getUsers(params).then(result => {
            return res.jsonp(result);
        }).catch(err => {
            console.log(err);
            return res.jsonp(response.error(err));
        });
    });
    // app.post('/cms/config/list', [authenticate.checkLogin], (req, res) => {
    //     Config.getList().then(msg => {
    //         return res.jsonp(response.success(msg));
    //     }).catch(err => {
    //         console.log(err);
    //         return res.jsonp(response.error(err));
    //     });
    // });
    // app.post('/cms/config/detail', [authenticate.checkLogin], (req, res) => {
    //     const body = req.body;

    //     const configKey = body.configKey || '';
    //     if (configKey == '')
    //         return res.send(response.error('missing parameter @configKey!'));

    //     Config.getByKey({ configKey }).then(msg => {
    //         return res.jsonp(response.success(msg));
    //     }).catch(err => {
    //         console.log(err);
    //         return res.jsonp(response.error(err));
    //     });
    // });
}

module.exports.handleAddUser = async function (req, res, next) {
    if (req.body.events[0].type === "follow" && !await user.getUserByLineId(req.body.events[0].source.userId)) {
        await user.addUser("test user", req.body.events[0].source.userId);
    }
    await next();
}

module.exports.autoReplyMessageToUser = async function (req, res, next) {
    let data = {type: 'text', text: "this is message from BOT"};
    return await req.liner.replyMessage(req.body.events[0].replyToken, data);
}

module.exports.handlePushMessage = async function (req, res, next) {
    let userId = req.body.client_id;
    let message = req.body.message;

    return await req.liner.pushMessage(userId, message)
}

module.exports.test = async function (req, res, next) {
    let test = await user.test();
    console.log(test)
}
