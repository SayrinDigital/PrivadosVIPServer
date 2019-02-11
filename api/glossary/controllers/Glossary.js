'use strict';

/**
 * Glossary.js controller
 *
 * @description: A set of functions called "actions" for managing `Glossary`.
 */

module.exports = {

  /**
   * Retrieve glossary records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.glossary.search(ctx.query);
    } else {
      return strapi.services.glossary.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a glossary record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.glossary.fetch(ctx.params);
  },

  /**
   * Count glossary records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.glossary.count(ctx.query);
  },

  /**
   * Create a/an glossary record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.glossary.add(ctx.request.body);
  },

  /**
   * Update a/an glossary record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.glossary.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an glossary record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.glossary.remove(ctx.params);
  }
};
