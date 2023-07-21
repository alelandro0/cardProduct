const registerButton = document.querySelector('.register');

registerButton.addEventListener('click', () => {
  const main = document.querySelector('main');
  const titleInput = document.querySelector('.titleProduct');
  const fileInput = document.getElementById('file');
  const categorySelect = document.getElementById('category');
  const descriptionInput = document.getElementById('description');
  const precioInput = document.getElementById('precio');


  const title = titleInput.value;
  const category = categorySelect.value;
  const description = descriptionInput.value;
  const precio= precioInput.value;

 
  const card = document.createElement('div');
  card.classList.add('card');

  const imgCard = document.createElement('img');
  imgCard.src = fileInput.files[0] ? URL.createObjectURL(fileInput.files[0])
   : 'https://images.pexels.com/photos/4109850/pexels-photo-4109850.jpeg?auto=compress&cs=tinysrgb&w=600';
  imgCard.alt = 'card-product';

  const titleProduct = document.createElement('h2');
  titleProduct.textContent = title;

  const categoryElement = document.createElement('p');
  categoryElement.textContent = category;

  const descriptionElement = document.createElement('p');
  descriptionElement.textContent = description;

  const precioElement = document.createElement('p');
  precioElement.textContent=precio;
 


  card.appendChild(imgCard);
  card.appendChild(titleProduct);
  card.appendChild(categoryElement);
  card.appendChild(descriptionElement);
  card.appendChild(precioElement);

  main.appendChild(card);
  if (card!=undefined) {
    alert("nuevo contenido creado")
  }

  titleInput.value = '';
  fileInput.value = '';
  categorySelect.value = '';
  descriptionInput.value = '';
  precioInput.value=''

});

const getProducts = 'https://fakestoreapi.com/products'
const getCategories = 'https://fakestoreapi.com/products/categories'

const getData = async (URL) => {
  const response = await fetch(URL)
  const data = await response.json()
  return data
}

const ul = document.getElementById('list-products')

// const showInfo = async () => {
//   let data1 = await getData(getProducts)
//   let data2 = await getData(getCategories)
//   console.log(data1);
//   console.log(data2);
// }

// showInfo()

window.addEventListener('DOMContentLoaded',async ()  => {
  let products = await getData(getProducts) 
  products.forEach( product => {
    const itemProduct = document.createElement('li')
    itemProduct.textContent = product.title
    ul.appendChild(itemProduct)
  });
})
