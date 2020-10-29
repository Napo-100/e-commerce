// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Categories have many Products
// Products belongsTo Category
Category.hasMany(Product, {
  foreignKey: 'product_id',
});

Product.belongsTo(Category, {
  foreignKey: 'product_id',
})

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(ProductTag, {
  foreignKey: 'product_tag',
})

// Tags belongToMany Products (through ProductTag)
TimeRanges.belongsToMany(Product, {
  foreignKey: 'product_tag',
})

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
