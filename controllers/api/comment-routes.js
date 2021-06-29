const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

//==============================================================================
// Get comments
router.get('/', (req, res) => {
    Comment.findAll()
        .then(dbCommentData => res.json(dbCommentData))  // Format to json
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

//==============================================================================
// Post new comment
router.post('/', withAuth, (req, res) => {
    if (req.session) {        // Check session, if exists, create comment
        Comment.create({
            comment_text: req.body.comment_text,
            post_id: req.body.post_id,
            user_id: req.session.user_id
        })
            .then(dbCommentData => res.json(dbCommentData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    }
});

//==============================================================================
// Delete comment
router.delete('/:id', withAuth, (req, res) => {
    Comment.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(dbCommentData => {
            if (!dbCommentData) {
                res.status(404).json({ message: 'No comment found with this id' });
                return;
            }
            res.json(dbCommentData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;