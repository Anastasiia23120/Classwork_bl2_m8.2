const product = {
  title: 'Smart TV',
  price: 25000,
  category: 'Electronics',
  details: {
    brand: 'Samsung',
    color: 'Black',
    weight: '15.5',
  },
};
//* -----------------------------------------------------------------------------
// function displayProductInfo(productInfo) {
//   const {
//     title,
//     price,
//     category,
//     details: { brand, color, weight },
//   } = productInfo;

//   console.log(`Назва товару: ${title}`);
//   console.log(`Ціна: ${price} грн`);
//   console.log(`Категорія: ${category}`);
//   console.log('Деталі:');
//   console.log(`- Бренд: ${brand}`);
//   console.log(`- Колір: ${color}`);
//   console.log(`- Вага: ${weight} кг`);
// }

// displayProductInfo(product);
//* -----------------------------------------------------------------------------
function displayProductInfo({ title, price, category, details: { brand, color, weight } }) {
  console.log(`Назва товару: ${title}`);
  console.log(`Ціна: ${price} грн`);
  console.log(`Категорія: ${category}`);
  console.log('Деталі:');
  console.log(`- Бренд: ${brand}`);
  console.log(`- Колір: ${color}`);
  console.log(`- Вага: ${weight} кг`);
}

displayProductInfo(product);
