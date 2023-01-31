/**
 * sub-comment service
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreService('api::sub-comment.sub-comment', ({strapi})=>({

    async like(commentId){
        const likes = await strapi.entityService.findOne('api::sub-comment.sub-comment', commentId, {});
        const commentWithLikes = {...likes, likes: likes.likes++};
        console.log(commentWithLikes);
        const updateComment = await strapi.entityService.update('api::sub-comment.sub-comment', commentId,{
            fields: ['likes'],
            data: {...likes, likes: likes.likes++}
        });
        return updateComment;
    }

}));
