'use strict';

const Boom = require('boom');
const Moment = require('moment');
const Guid = require('guid');

module.exports = [
    {
        method: 'GET',
        path: '/drones',
        options: {
            description: 'Return a JSON list of drones',
            handler: async (request, h) => {

                return [1,2,3];

                const { Drones } = request.models();

                try {

                    return await Drones.query();

                } catch (err) {

                    console.log('error listing drones');
                    console.log(err);
                    return Boom.badRequest(err.Error);
                }


            }
        }
    },
    {
        method: 'POST',
        path: '/drones',
        options: {
            description: 'Add a new drone to the system',
            handler: async (request, h) => {

                const { Drones } = request.models();

                const newDronePayload = {
                    id: Guid.raw(),
                    model: request.payload.model,
                    serial: request.payload.serial,
                    created_at: Moment().format('YYYY/MM/DD HH:mm:ss')

                };

                try {

                    return await Drones.query().insert(newDronePayload);

                } catch (err) {

                    console.log('error creating new drone record');
                    console.log(err);
                    return Boom.badRequest(err.Error);
                }

            }
        }
    }
];