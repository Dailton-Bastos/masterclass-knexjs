const knex = require('../database');

module.exports = {
  async index(req, res) {
    try {
      const users = await knex('users');
      return res.json(users);
    } catch (error) {
      throw new Error(error);
    }
  },
};
