const CONFIG = {
    server: {
        host: 'localhost',
        port: process.env.PORT || 3008,
    },
    mysql: {
        user: 'root',
        password: '1',
        host: 'localhost',
        database: 'linechat',
        port: '3306',
        pool: {
            max: 100,
            min: 0,
            idleTimeoutMillis: 1000
        }

    },
    lineOfficial: {
        1611459926: {
            channelAccessToken: "8LFTY/Yd6/TXaHyQY+Ti1wFk6zhvWluXpJ+y8hjHHfRfBqF/pkwKGuZwWDZfnANOH5EAC5looRJXeZDCk8fVQoePZbXf6T8+yHiDuv2SWDsE25oRs+XfV7x1wVjWcsv6oQqrVA0tEXPFIDtKhXPYMAdB04t89/1O/w1cDnyilFU=",
            channelSecret: "76c239e465b3c4626323e88cbeb3a8e8",
        }
    }
}
module.exports = CONFIG;