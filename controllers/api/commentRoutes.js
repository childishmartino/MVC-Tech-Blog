const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
    Comment.findAll({})
        .then(commentData => res.json(commentData))
        .catch(err => { res.status(500).json(err) })
});

router.post('/', (req, res) => {
    Comment,create(req.body)
    .then(newComment => res.json(newComment))
    .catch(err => {
        res.status(500).json(err)
    })
});

router.delete('/:id', withAuth, (req,res) => {
    Comment.destroy({
        where: { id: req.params.id, },
    }).then((deleteComment) => { res.json(deleteComment) })
        .catch(err => {res.status(500).json(err) })
});

module.exports = router;