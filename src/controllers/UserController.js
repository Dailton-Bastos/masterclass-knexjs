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

  async create(req, res, next) {
    try {
      const { username } = req.body;

      await knex('users').insert({
        username,
      });

      return res.status(201).send();
    } catch (error) {
      return next(error);
    }
  },
};
