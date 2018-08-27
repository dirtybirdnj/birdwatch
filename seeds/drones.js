
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
                    location: '27.986065,86.922623',
                    heading: 'N',
                    speed: 0,
                    created_at: (Moment().unix() - 50000),
                    updated_at: (Moment().unix() - 1000),
                    active: 1
                },
                {
                    id: Guid.raw(),
                    model: 'DJI Mavic Pro',
                    serial: 'IDDQD',
                    location: null,
                    heading: null,
                    speed: null,
                    created_at: (Moment().unix() - 50000),
                    active: 0
                },
                {
                    id: Guid.raw(),
                    model: 'DJI Phantom',
                    serial: 'IBEHOLDR',
                    location: '51.510357,-0.116773',
                    heading: 'NNW',
                    speed: 15,
                    created_at: (Moment().unix() - 50000),
                    updated_at: (Moment().unix() - 500),
                    active: 1
                },
                {
                    id: Guid.raw(),
                    model: 'Yuneec Typhooon',
                    serial: 'IDBEHOLDL',
                    location: '-33.856159,151.215256',
                    heading: 'SW',
                    speed: 13,
                    created_at: (Moment().unix() - 50000),
                    updated_at: (Moment().unix() - 700),
                    active: 1
                },
                {
                    id: Guid.raw(),
                    model: 'Yuneec Typhooon',
                    serial: 'IDBEHOLDI',
                    location: null,
                    heading: null,
                    speed: null,
                    created_at: (Moment().unix() - 50000),
                    active: 0
                },
                {
                    id: Guid.raw(),
                    model: 'Yuneec Typhooon',
                    serial: 'IDBEHOLDS',
                    location: '48.858093,2.294694',
                    heading: 'N',
                    speed: 0,
                    created_at: (Moment().unix() - 50000),
                    updated_at: (Moment().unix() - 850),
                    active: 1
                },
                {
                    id: Guid.raw(),
                    model: 'Yuneec Typhooon',
                    serial: 'IDBEHOLDA',
                    location: '44.3876119,-68.2039123',
                    heading: 'S',
                    speed: 3,
                    created_at: (Moment().unix() - 50000),
                    updated_at: (Moment().unix() - 350),
                    active: 1
                },
                {
                    id: Guid.raw(),
                    model: 'Yuneec Typhooon',
                    serial: 'IDBEHOLDV',
                    location: '27.173891,78.042068',
                    heading: 'SW',
                    speed: 0,
                    created_at: (Moment().unix() - 50000),
                    updated_at: Moment().unix() - 500,
                    active: 1
                }
            ]);
        });
};
