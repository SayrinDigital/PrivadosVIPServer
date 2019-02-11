'use strict';

/**
 * Joinus.js controller
 *
 * @description: A set of functions called "actions" for managing `Joinus`.
 */

module.exports = {

  /**
   * Retrieve joinus records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.joinus.search(ctx.query);
    } else {
      return strapi.services.joinus.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a joinus record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.joinus.fetch(ctx.params);
  },

  /**
   * Count joinus records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.joinus.count(ctx.query);
  },

  /**
   * Create a/an joinus record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.joinus.add(ctx.request.body);
  },

  /**
   * Update a/an joinus record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.joinus.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an joinus record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.joinus.remove(ctx.params);
  }
};
