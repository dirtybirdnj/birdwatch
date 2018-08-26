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

    //This is a unique value that should be created each time the suite runs
    //So that tests can be run without modifying this file
    const droneSerial = 'TESTDRN' + Date.now();

    it('should create a drone', async () => {

        const server = await Server.deployment();

        const response = await server.inject({
            method: 'POST',
            url: '/drones',
            payload: {
                model: 'Parrot Anafi',
                serial: droneSerial
            }
        });

        expect(response.statusCode).to.equal(200);
    });

    it('should not allow a duplicate drone to be created', async () => {

        const server = await Server.deployment();

        const response = await server.inject({
            method: 'POST',
            url: '/drones',
            payload: {
                model: 'Parrot Anafi',
                serial: droneSerial
            }
        });

        //Should throw a 400 because a unique constraint is violated by payload
        expect(response.statusCode).to.equal(400);
    });



});
