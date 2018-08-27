
'use strict';

const Guid = require('guid');
const Moment = require('moment');

exports.seed = function (knex, Promise) {
    // Deletes ALL existing entries
    return knex('drones').del()
        .then( () => {
            // Inserts seed entries
            return knex('drones').insert([
                {
                    id: Guid.raw(),
                    model: 'DJI Mavic Pro',
                    serial: 'IDKFA',
                    created_at: Moment().unix()
                },
                {
                    id: Guid.raw(),
                    model: 'DJI Mavic Pro',
                    serial: 'IDDQD',
                    created_at: Moment().unix()
                },
                {
                    id: Guid.raw(),
                    model: 'DJI Phantom',
                    serial: 'IBEHOLDR',
                    created_at: Moment().unix()
                },
                {
                    id: Guid.raw(),
                    model: 'Yuneec Typhooon',
                    serial: 'IDBEHOLDL',
                    created_at: Moment().unix()
                },
                {
                    id: Guid.raw(),
                    model: 'Yuneec Typhooon',
                    serial: 'IDBEHOLDI',
                    created_at: Moment().unix()
                },
                {
                    id: Guid.raw(),
                    model: 'Yuneec Typhooon',
                    serial: 'IDBEHOLDS',
                    created_at: Moment().unix()
                },
                {
                    id: Guid.raw(),
                    model: 'Yuneec Typhooon',
                    serial: 'IDBEHOLDA',
                    created_at: Moment().unix()
                },
                {
                    id: Guid.raw(),
                    model: 'Yuneec Typhooon',
                    serial: 'IDBEHOLDV',
                    created_at: Moment().unix()
                }
            ]);
        });
};