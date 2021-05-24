const router = require('express').Router();
const { Post } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
        const posttData = await Post.findAll({
            where: {user_id: req.session.user_id}
        });
        const posts = postData.map((post) => post.get({ plain: true }));

        res.render('dashboard', {
            layout: 'dashboard',
            posts,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
        res.redirect('login');
    }
});

router.get('/new', withAuth, async(req, res) => {res.render('new-post', {
    layout: 'dashboard,'
})});

router.get('/edit/:id', withAuth, async(req,res) => {
    await Post.findbyPK(req.params.id)
    .then(dbPostData => {
        if (dbPostData) {
            const post = dbPostData.get({ plain: true })
            res.render('edit-post', {
                layout: 'dashboard',
                posts,
            });
        } else {res.status(404).end()}
    })
    .catch(err => {res.status(500).json(err)
    })
});

module.exports = router;