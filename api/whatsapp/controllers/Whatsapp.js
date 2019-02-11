'use strict';

/**
 * Whatsapp.js controller
 *
 * @description: A set of functions called "actions" for managing `Whatsapp`.
 */

module.exports = {

  /**
   * Retrieve whatsapp records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.whatsapp.search(ctx.query);
    } else {
      return strapi.services.whatsapp.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a whatsapp record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.whatsapp.fetch(ctx.params);
  },

  /**
   * Count whatsapp records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.whatsapp.count(ctx.query);
  },

  /**
   * Create a/an whatsapp record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.whatsapp.add(ctx.request.body);
  },

  /**
   * Update a/an whatsapp record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.whatsapp.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an whatsapp record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.whatsapp.remove(ctx.params);
  }
};
