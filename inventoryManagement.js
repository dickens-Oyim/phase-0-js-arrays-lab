// Write your code here
const products=["Laptop","Phone","Headphones","Monitor"]
function logFirstProduct (){
  console.log(products[0]);
}
function addProduct(product){
  products.push(product);
  console.log(`New products: ${products}`);
}
function updateProductName(position,newname){
  let oldName = products[position];
  products[position] = newname;
  console.log(`updateProductName from ${oldName} to ${newname}`);
}

function removeLastProduct(){
 let removedLastProduct = products.pop();
  console.log(`removed Product: ${removedLastProduct}`);
}


// Export the necessary parts for testing
module.exports = {
  logFirstProduct: typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
  addProduct: typeof addProduct !== 'undefined' ? addProduct : undefined,
  updateProductName: typeof updateProductName !== 'undefined' ? updateProductName : undefined,
  removeLastProduct: typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
  products
};
