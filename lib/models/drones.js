'use strict';

const Schwifty = require('schwifty');
const Joi = require('joi');

module.exports = class Drones extends Schwifty.Model {

    static get tableName() {

        return 'drones';
    }

    static get joiSchema() {

        return Joi.object({

            id: Joi.string().required(),
            model: Joi.string().required(),
            serial: Joi.string().required(),
            created_at: Joi.date().required()

        }); // eslint-disable-line no-undef
    }
};
