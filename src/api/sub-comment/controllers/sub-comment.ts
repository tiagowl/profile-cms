/**
 * sub-comment controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::sub-comment.sub-comment', ({strapi})=>({

    async update(ctx){
        const body = ctx.request.body.data;

        if(body.likes){
            await strapi.service('api::sub-comment.sub-comment').like(ctx.request.params.id);
        }
    }

}));
