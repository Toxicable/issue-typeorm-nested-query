"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const Entity1_1 = require("./entity/Entity1");
const Entity2_1 = require("./entity/Entity2");
const Entity3_1 = require("./entity/Entity3");
const Entity4_1 = require("./entity/Entity4");
// create connection with database
// note that it's not active database connection
// TypeORM creates connection pools and uses them for your requests
const entities = [
    Entity1_1.Entity1,
    Entity2_1.Entity2,
    Entity3_1.Entity3,
    Entity4_1.Entity4,
];
typeorm_1.createConnection({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'localdev',
    database: 'defaultdb',
    entities,
    synchronize: true,
    logging: true
}).then((connection) => __awaiter(this, void 0, void 0, function* () {
    var result = yield typeorm_1.getConnection()
        .getRepository(Entity1_1.Entity1)
        .findOne(1, { relations: [
            'Entity2',
            'Entity2.Entity3',
            'Entity2.Entity3.Entity4',
        ] })
        .catch(err => console.error(err));
    //     var result = await getConnection()
    //     .getRepository(Entity2)
    //     .findOne(1, { relations: [
    //         'Entity3',
    //         'Entity3.Entity4',
    //     ]})
    //     .catch(err => console.error(err))
    console.log(result);
    connection.close();
}));
//# sourceMappingURL=index.js.map