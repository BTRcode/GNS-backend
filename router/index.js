const router = require('express').Router();
const dataRoute = require('./data.router');
router.use('/data',dataRoute)
router.use('**', (req, res) => {
    return res.status(404).send({ error: true, message: 'Not found' })
})

module.exports = router;
