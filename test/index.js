'use strict';

// Load modules

const Code = require('code');
const Lab = require('lab');
const Server = require('../server');
const Package = require('../package.json');


//console.log(Server)

// Test shortcuts

const { describe, it } = exports.lab = Lab.script();
const { expect } = Code;

describe('Deployment', () => {

    it('registers the main plugin.', async () => {

        const server = await Server.deployment();

        expect(server.registrations[Package.name]).to.exist();
    });
});

//const Server = ('../server/index.js')

describe('Drones', () => {

    it('should list drones', async () => {

        const server = await Server.deployment();

        const response = await server.inject({
            method: 'GET',
            url: '/drones'
        });

        expect(response.statusCode).to.equal(200);
        
    });


});
