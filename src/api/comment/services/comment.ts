/**
 * comment service
 */

import { factories } from '@strapi/strapi';
import like from '../../like/controllers/like';

export default factories.createCoreService('api::comment.comment', ({strapi})=>({
    
    async like(commentId){
        const likes = await strapi.entityService.findOne('api::comment.comment', commentId, {});
        const commentWithLikes = {...likes, likes: likes.likes++};
        console.log(commentWithLikes);
        const updateComment = await strapi.entityService.update('api::comment.comment', commentId,{
            fields: ['likes'],
            data: {...likes, likes: likes.likes++}
        });
        return updateComment;
    }

}));
