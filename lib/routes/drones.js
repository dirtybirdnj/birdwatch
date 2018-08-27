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

                const { Drones } = request.models();

                try {

                    return await Drones.query();

                }
                catch (err) {

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
                    created_at: Moment().unix()

                };

                try {

                    return await Drones.query().insert(newDronePayload);

                }
                catch (err) {

                    console.log('error creating new drone record');
                    console.log(newDronePayload);
                    console.log(err);
                    return Boom.badRequest(err.Error);
                }

            }
        }
    },
    {
        method: 'POST',
        path: '/drones/{id}/update',
        options: {
            description: 'Updates the status of a drone',
            pre: [
                {
                    assign: 'drone',
                    method: async (request, h) => {

                        const { Drones } = request.models();
                        const droneID = request.params.id;


                        try {

                            const drone = await Drones.query().where('id', droneID).first();

                            if (drone) {
                                return drone;
                            }
                            return Boom.badRequest('invalid drone id');

                        }
                        catch (err) {

                            return Boom.badRequest(err);

                        }

                    }
                },
                {
                    assign: 'update',
                    method: async (request, h) => {

                        const { Drones } = request.models();

                        try {

                            request.payload.updated_at = Moment().unix();
                            return await Drones.query().patchAndFetchById(request.pre.drone.id, request.payload);

                        }
                        catch (err) {

                            return Boom.badRequest(err);
                        }


                    }
                }
            ],
            handler: (request, h) => {

                //If validation steps passed, return the updated item
                //return request.pre.update;
                return request.pre.update;

            }
        }
    }
];
