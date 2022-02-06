const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  Category.findAll({
    include: [{model: Product}],
  })
  .then(categoryData => {
    res.status(200).json(categoryData)
  })
  .catch(err => {
    console.log(err);
    res.send('Request failed.')
  })
});

router.get('/:id', (req, res) => {
  Category.findByPk(req.params.id, {
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
  Category.create(req.body)
  .then(newCategory => {
    res.status(200).json(newCategory)
  })
  .catch(err => {
    console.log(err);
    res.send('Request failed.')
  })
});

router.put('/:id', (req, res) => {
  Category.update({
    category_name: req.body.category_name,
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
  Category.destroy(
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
