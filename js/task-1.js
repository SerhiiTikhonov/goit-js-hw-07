
// const categoriesList = document.querySelectorAll('ul#categories li.item');
// console.log(`Number of categories: ${categoriesList.length}`);

// const categoriesList1 = document.querySelectorAll('#categories .item');

// categoriesList1.forEach(category => {
//   const title = category.querySelector('h2').textContent;
//   const items = category.querySelectorAll('ul li').length;

//   console.log(`Category: ${title}\nElements: ${items}`);
// });



const categoriesList = Array.from(document.querySelectorAll('ul#categories > li.item')); 
console.log(`Number of categories: ${categoriesList.length}`);

categoriesList.forEach(category => {
  const title = category.querySelector('h2').textContent;
  const items = category.querySelectorAll('ul li').length;

  console.log(`Category: ${title}\nElements: ${items}`);
});


