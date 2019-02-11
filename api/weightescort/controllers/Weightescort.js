'use strict';

/**
 * Weightescort.js controller
 *
 * @description: A set of functions called "actions" for managing `Weightescort`.
 */

module.exports = {

  /**
   * Retrieve weightescort records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.weightescort.search(ctx.query);
    } else {
      return strapi.services.weightescort.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a weightescort record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.weightescort.fetch(ctx.params);
  },

  /**
   * Count weightescort records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.weightescort.count(ctx.query);
  },

  /**
   * Create a/an weightescort record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.weightescort.add(ctx.request.body);
  },

  /**
   * Update a/an weightescort record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.weightescort.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an weightescort record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.weightescort.remove(ctx.params);
  }
};
