/**
 * comment controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::comment.comment', ({strapi})=>({

    async update(ctx){
        const body = ctx.request.body.data;

        if(body.likes){
            await strapi.service('api::comment.comment').like(ctx.request.params.id);
        }
    }

}));
