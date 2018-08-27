
'use strict';

exports.up = function (knex, Promise) {

    return knex
        .schema
        .createTable('drones', (dronesTable) => {

            // Primary Key
            dronesTable.string( 'id' ).notNullable().unique();
            dronesTable.string( 'model' ).notNullable();
            dronesTable.string( 'serial' ).notNullable().unique();

            dronesTable.boolean( 'active' ).default( false );

            dronesTable.string( 'location' ).nullable(); //Lat,Lon
            dronesTable.string( 'heading' ).nullable(); // N, S, E, W
            dronesTable.string( 'speed' ).nullable(); // In KPH

            dronesTable.timestamp( 'created_at' );
            dronesTable.timestamp( 'updated_at' );

        });

};

exports.down = function (knex, Promise) {

    return knex
        .schema
        .dropTableIfExists('drones');

};
