
'use strict'

exports.up = function (knex, Promise) {

    return knex
        .schema
        .createTable('drones', (dronesTable) => {

            // Primary Key
            dronesTable.string('id').notNullable().unique();
            dronesTable.string('model', 250).notNullable();
            dronesTable.string('serial', 250).notNullable().unique();
            dronesTable.timestamp('created_at');

        });

};

exports.down = function (knex, Promise) {

    return knex
        .schema
        .dropTableIfExists('drones');

};
