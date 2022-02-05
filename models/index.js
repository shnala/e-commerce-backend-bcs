// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category);
// Categories have many Products
Category.hasMany(Product);
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  foreignKey: 'product_tag',
});
// Tags belongToMany Products (through ProductTag)
Tag.belongToMany(Product, {
  foreignKey: 'product_tag',
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
