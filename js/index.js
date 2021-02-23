//---------------------------------------------- ITERATION 1

function updateSubtotal(product) {
  //console.log('Calculating subtotal, yey!');

  let price = product.querySelector('.price span')
  let quantity = product.querySelector('.quantity input')
  let subTotal = product.querySelector('.subtotal span')

  let productSum = quantity.value * Number(price.innerText)
  //console.log(product);
  subTotal.innerHTML  = productSum
  //console.log(productSum)
  return productSum
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  //------------------------------------------- ITERATION 2

  let multipleProducts = document.querySelectorAll('.product')
  let sumTotal = document.querySelector('#total-value span')
  let sum = 0

  //console.log(multipleProducts)
  multipleProducts.forEach(element => {

    //console.log(productSum.innerHTML)
    let returnValues = updateSubtotal(element)
    //console.log(returnValues)
    sum += returnValues
  });

  // ITERATION 3

  sumTotal.innerText = sum
  //console.log(sumTotal)
  return sumTotal.innerText
}

//--------------------------------------------- ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  //console.log('The target in remove is:', target);

  targetParent = target.parentNode.parentNode

  //console.log(targetParent)
  targetParent.remove()
  calculateAll()
}

//--------------------------------------------- ITERATION 5

function createProduct() {
  let newProductName = document.querySelector('.create-product input[type="text"]')
  let newProductPrice = document.querySelector('.create-product input[type="number"]')
  let tBody = document.querySelector('tbody')
  let tRow = document.createElement('tr')
  
  tRow.classList.add('product')
  
  tRow.innerHTML = `
  <td class="name">
  <span>${newProductName.value}</span>
  </td>
  <td class="price">$<span>${newProductPrice.value}</span></td>
  <td class="quantity">
  <input type="number" value="0" min="0" placeholder="Quantity" />
  </td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action">
  <button class="btn btn-remove">Remove</button>
  </td>`
  
  let removeBtn = tRow.querySelector('.btn-remove')
  removeBtn.addEventListener('click', removeProduct)

  //console.log(newProductName.value, newProductPrice.value )
  tBody.appendChild(tRow)



}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  const removeBtn = document.querySelectorAll('.btn-remove');
  const createBtn = document.querySelector('#create')

  createBtn.addEventListener('click', createProduct);

  removeBtn.forEach(element => {
    
    element.addEventListener('click', removeProduct)
  });
  
  calculatePricesBtn.addEventListener('click', calculateAll);

});
