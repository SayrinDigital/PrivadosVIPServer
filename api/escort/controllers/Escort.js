'use strict';

/**
 * Escort.js controller
 *
 * @description: A set of functions called "actions" for managing `Escort`.
 */

module.exports = {

  /**
   * Retrieve escort records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.escort.search(ctx.query);
    } else {
      return strapi.services.escort.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a escort record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.escort.fetch(ctx.params);
  },

  /**
   * Count escort records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.escort.count(ctx.query);
  },

  /**
   * Create a/an escort record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.escort.add(ctx.request.body);
  },

  /**
   * Update a/an escort record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.escort.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an escort record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.escort.remove(ctx.params);
  }
};
