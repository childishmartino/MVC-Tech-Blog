const router = require('express').Router();
const { Post, User } = require('../../models');

router.get('/', async (req, res) => {
    Post.findAll({ include: [User] })
    .then(posts => { res.json(posts) })
    .catch(err => { res.status(500).json(err) })
});

module.exports = router;