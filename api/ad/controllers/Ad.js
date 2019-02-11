'use strict';

/**
 * Ad.js controller
 *
 * @description: A set of functions called "actions" for managing `Ad`.
 */

module.exports = {

  /**
   * Retrieve ad records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.ad.search(ctx.query);
    } else {
      return strapi.services.ad.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a ad record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.ad.fetch(ctx.params);
  },

  /**
   * Count ad records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.ad.count(ctx.query);
  },

  /**
   * Create a/an ad record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.ad.add(ctx.request.body);
  },

  /**
   * Update a/an ad record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.ad.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an ad record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.ad.remove(ctx.params);
  }
};
