'use strict';

/**
 * Adgroup.js controller
 *
 * @description: A set of functions called "actions" for managing `Adgroup`.
 */

module.exports = {

  /**
   * Retrieve adgroup records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.adgroup.search(ctx.query);
    } else {
      return strapi.services.adgroup.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a adgroup record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.adgroup.fetch(ctx.params);
  },

  /**
   * Count adgroup records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.adgroup.count(ctx.query);
  },

  /**
   * Create a/an adgroup record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.adgroup.add(ctx.request.body);
  },

  /**
   * Update a/an adgroup record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.adgroup.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an adgroup record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.adgroup.remove(ctx.params);
  }
};
