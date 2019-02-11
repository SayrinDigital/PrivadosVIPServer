'use strict';

/**
 * Characteristic.js controller
 *
 * @description: A set of functions called "actions" for managing `Characteristic`.
 */

module.exports = {

  /**
   * Retrieve characteristic records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.characteristic.search(ctx.query);
    } else {
      return strapi.services.characteristic.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a characteristic record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.characteristic.fetch(ctx.params);
  },

  /**
   * Count characteristic records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.characteristic.count(ctx.query);
  },

  /**
   * Create a/an characteristic record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.characteristic.add(ctx.request.body);
  },

  /**
   * Update a/an characteristic record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.characteristic.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an characteristic record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.characteristic.remove(ctx.params);
  }
};
