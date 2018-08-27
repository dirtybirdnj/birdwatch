'use strict';

const Boom = require('boom');
const Moment = require('moment');

module.exports = {
    method: 'GET',
    path: '/dashboard',
    options: {
        description: 'Dashboard displaying fleet status',
        pre: [
            {
                assign: 'droneList',
                method: async (request, h) => {

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
            },
            {
                assign: 'formattedList',
                method: (request, h) => {

                    return request.pre.droneList.map((drone) => {

                        drone.createdAt = Moment(drone.created_at, 'X').format('LLL');

                        if (drone.updated_at) {
                            drone.updatedAt = Moment(drone.updated_at, 'X').format('LLL');
                        }

                        return drone;

                    });

                }
            }
        ],
        handler: async (request, h) => {


            return h.view('home', {
                droneList: request.pre.formattedList,
                droneCount: request.pre.droneList.length
            });

        }

    }

};
