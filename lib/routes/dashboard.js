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

                        return await Drones.query().where('active', 1).orderBy( 'updated_at');

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

                        //Set display value to show inactive drones
                        if (drone.speed === '0' && drone.updated_at < Moment().subtract(10, 'minutes').unix()){
                            drone.idle = true;
                        }
                        else {
                            drone.idle = false;
                        }

                        return drone;

                    });

                }
            }
        ],
        handler: (request, h) => {

            return h.view('home', {
                droneList: request.pre.formattedList,
                time: Moment().format('LLL')
            });

        }

    }

};
