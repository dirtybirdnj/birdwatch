'use strict';

const Boom = require('boom');

module.exports = {
    method: 'GET',
    path: '/dashboard',
    options: {
        description: 'Dashboard displaying fleet status',
        handler: async (request, h) => {

            const { Drones } = request.models();

            try {

                const drones = await Drones.query();

                return h.view('home', {
                    droneList : drones,
                    droneCount : drones.length
                } );

            }
            catch (err) {

                console.log('error listing drones');
                console.log(err);
                return Boom.badRequest(err.Error);
            }
        }

    }

};
