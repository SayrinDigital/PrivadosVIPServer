'use strict';

/**
 * Specialservice.js controller
 *
 * @description: A set of functions called "actions" for managing `Specialservice`.
 */

module.exports = {

  /**
   * Retrieve specialservice records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.specialservice.search(ctx.query);
    } else {
      return strapi.services.specialservice.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a specialservice record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.specialservice.fetch(ctx.params);
  },

  /**
   * Count specialservice records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.specialservice.count(ctx.query);
  },

  /**
   * Create a/an specialservice record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.specialservice.add(ctx.request.body);
  },

  /**
   * Update a/an specialservice record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.specialservice.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an specialservice record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.specialservice.remove(ctx.params);
  }
};
