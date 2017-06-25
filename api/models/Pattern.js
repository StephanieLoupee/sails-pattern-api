/**
 * Pattern.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

 module.exports = {

   attributes: {
     block_id: {
       type: 'integer',
       primaryKey: true,
       autoIncrement: true
     },
     block_name: {
       type: 'string',
       alphanumericdashed: true
     },

     source: {
       type: 'string',
       alphadashed: true
     },

     block_type: {
       type: 'string',
       in: ["pieced", "applique", "paper-pieced", "mixed"]
     },

     finished_size: {
       type: 'float',
       minLength: 1

     },

     number_pieces: {
       type: 'integer',
       minLength: 1
     },

     number_fabrics: {
       type: 'integer',
       maxLength: 2
   }
  }
 };
