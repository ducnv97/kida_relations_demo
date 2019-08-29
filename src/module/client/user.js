import {User as UserEntity} from '../../entity/User';
import {createConnection, getConnection} from "typeorm";
import {use} from "i18next";

class User {
    constructor() {
    }

    async getUsers(params) {
        const limit = params.pageSize;
        const skip = (parseInt(params.pageIndex) - 1) * limit;

        const connection = await createConnection();
        const result = await connection.getRepository(UserEntity).find({
            limit: limit,
            skip: skip
        })
        console.log(result);
        return result
    }

    async addUser(name, lineId) {
        const connection = await createConnection();
        const userRepository = await connection.getRepository(UserEntity);
        userRepository.name = name;
        userRepository.line_id = lineId;
        return await userRepository.save(userRepository);

    }

    async getUserByLineId(lineId) {
        const connection = await createConnection();
        return await connection.getRepository(UserEntity).find({
            where: {line_id: lineId},
            take: 1
        })
    }

    async test() {
        const connection = await createConnection();
        return await connection.getRepository(UserEntity).find({
            select: ['id', 'name', 'address', 'line_id']
        })
    }

}

module.exports = User