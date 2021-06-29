const { Comment } = require('../models');

const commentData = [
    {
        comment_text: "Super cool! ;)",
        post_id: 3,
        user_id: 1
    },
    {
        comment_text: "Thats so awesome.",
        post_id: 1,
        user_id: 4
    },
    {
        comment_text: "Very interesting topic.",
        post_id: 4,
        user_id: 2
    },
    {
        comment_text: "I did't know that, thanks for the info!",
        post_id: 4,
        user_id: 3
    },
    {
        comment_text: "How did you find this out?",
        post_id: 5,
        user_id: 5
    },
    {
        comment_text: "Thats so random lol!",
        post_id: 5,
        user_id: 4
    },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;