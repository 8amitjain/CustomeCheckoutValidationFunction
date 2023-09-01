// @ts-check
// Use JSDoc annotations for type safety
/**
* @typedef {import("../generated/api").InputQuery} InputQuery
* @typedef {import("../generated/api").FunctionResult} FunctionResult
*/
// The @shopify/shopify_function package will use the default export as your function entrypoint
export default /**
* @param {InputQuery} input
* @returns {FunctionResult}
*/

  (input) => {

    const orderSubtotal = parseFloat(input.cart.cost.subtotalAmount.amount);
    const orderTotal = parseFloat(input.cart.cost.totalAmount.amount);
    const orderData = input.cart.lines;
    const orderId = JSON.stringify(input.cart);
    var isFreeCount = 0 
    const errors = [];

    var error = {
      localizedMessage: orderId + "  "  +  "  " +  orderTotal + "  "+ orderSubtotal + 
          "  There is an order maximum of $1,000 for customers without established order history",
      target: "cart"
    };
    errors.push(error);
    return { errors };

    for (var [index, item] of orderData.entries()) {
      var productTitle = item.merchandise.product.title;
      var isFree = item.merchandise.product.is_free;
      var totalProdcut = orderData.length
      

      if (totalProdcut == 1 && isFree == true) {
        // EMPTY CART 

        // var error = {
        //   localizedMessage: "Freebies can't be ordered",
        //   target: "cart"
        // };
      }

      isFree == true ? isFreeCount += 1 : null;

      if (index + 1  == totalProdcut && isFreeCount >= totalProdcut){
        // EMPTY CART 
        
        // var error = {
        //   localizedMessage: "Freebies can't be ordered",
        //   target: "cart"
        // };
      }
    }
       
    // if only free -> error 
    // if free + paid check QTY of free else error. 
    
    // The error
    
    // Parse the decimal (serialized as a string) into a float.
    // errors.push(error);

    // Orders with subtotals greater than $1,000 are available only to established customers.
    // if (orderSubtotal > 0) {
      // if (input.cart.buyerIdentity && input.cart.buyerIdentity.customer) {
        // errors.push(error);
      // }
    // }
  };
