'use strict';

module.exports = {
    method: 'GET',
    path: '/dashboard',
    options: {
        description: 'Dashboard displaying fleet status',
        handler: (request, h) => {

            return h.view('home', { test: 'yep!' } );

        }
    }

};
