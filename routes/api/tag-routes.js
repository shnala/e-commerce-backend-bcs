const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  Tag.findAll({
    include: [{model: Product}],
  })
  .then(data => {
    res.status(200).json(data)
  })
  .catch(err => {
    console.log(err);
    res.send('Request failed.')
  })
});

router.get('/:id', (req, res) => {
  Tag.findByPk(req.params.id, {
    include: [{model: Product}],
  })
  .then(data => {
    res.status(200).json(data)
  })
  .catch(err => {
    console.log(err);
    res.send('Request failed.')
  })

});

router.post('/', (req, res) => {
  Tag.create(req.body)
  .then(newTag => {
    res.status(200).json(newTag)
  })
  .catch(err => {
    console.log(err);
    res.send('Request failed.')
  })
});

router.put('/:id', (req, res) => {
  Tag.update({
    tag_name: req.body.tag_name,
  },
  {
    where: {id: req.params.id},
  })
  .then(data => {
    res.status(200).json(data)
  })
  .catch(err => {
    console.log(err);
    res.send('Request failed.')
  })
});

router.delete('/:id', (req, res) => {
  Tag.destroy(
    {
      where: {id: req.params.id},
    })
    .then(data => {
      res.status(200).json(data)
    })
    .catch(err => {
      console.log(err);
      res.send('Request failed.')
    })
  });

module.exports = router;
