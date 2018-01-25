import 'reflect-metadata';
import { createConnection, getConnection } from 'typeorm';
import { Entity1 } from './entity/Entity1';
import { Entity2 } from './entity/Entity2';
import { Entity3 } from './entity/Entity3';
import { Entity4 } from './entity/Entity4';
// create connection with database
// note that it's not active database connection
// TypeORM creates connection pools and uses them for your requests

const entities = [
    Entity1, 
    Entity2, 
    Entity3, 
    Entity4,
];

createConnection({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'localdev',
  database: 'defaultdb',
  entities,
  synchronize: true,
  logging: true
}).then(async connection => {
    //this fails
  var result = await getConnection()
    .getRepository(Entity1)
    .findOne(1, { relations: [
        'Entity2',
        'Entity2.Entity3',
        'Entity2.Entity3.Entity4',
    ]})
    .catch(err => console.error(err))


    // this one verifies that the relationship is valid

//     var result = await getConnection()
//     .getRepository(Entity2)
//     .findOne(1, { relations: [
//         'Entity3',
//         'Entity3.Entity4',
//     ]})
//     .catch(err => console.error(err))

  console.log(result);
  connection.close();
});
