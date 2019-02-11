'use strict';

/**
 * Includedservice.js controller
 *
 * @description: A set of functions called "actions" for managing `Includedservice`.
 */

module.exports = {

  /**
   * Retrieve includedservice records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.includedservice.search(ctx.query);
    } else {
      return strapi.services.includedservice.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a includedservice record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.includedservice.fetch(ctx.params);
  },

  /**
   * Count includedservice records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.includedservice.count(ctx.query);
  },

  /**
   * Create a/an includedservice record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.includedservice.add(ctx.request.body);
  },

  /**
   * Update a/an includedservice record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.includedservice.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an includedservice record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.includedservice.remove(ctx.params);
  }
};
