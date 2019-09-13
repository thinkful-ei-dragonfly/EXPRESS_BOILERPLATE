/* eslint-disable strict */
const table = 'waitline';
const waitlineService = {
  getFullLine(knex) {
    return knex.select('*').from(table);
  }

  addNewGuest(knex, newGuest) {
    return knex
      .insert(newGuest)
      .into(table)
      .returning('*')
      .then(rows => {
        return rows[0];
      });
  },

  getById(knex, id) {
    return knex
      .from(table)
      .select('*')
      .where('id', id)
      .first();
  },

  deleteGuest(knex, id) {
    return knex(table)
      .where({id})
      .delete();
  },

  updateInfo(knex, id, newInfo) {
    return knex(table)
      .where({id})
      .update(newInfo);
  }
};

module.exports = waitlineService;