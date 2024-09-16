function StockPicker(arr) { 
    var profit=-1; // Initialize the maximum profit to -1
    var buyPrice=arr[0]; // Initialize the buying price to the first element of the array
    for(var i=1; i<arr.length; i++){ // Loop through the array starting from the second element
        if(arr[i]<buyPrice){ // If the current element is smaller than the buying price
            buyPrice=arr[i]; // Update the buying price
        }
        else if( (arr[i]-buyPrice) > profit){ // If selling the stock at the current price will give a greater profit than the previous maximum profit
            profit=arr[i]-buyPrice; // Update the maximum profit
        }
    }
    
  return profit; // Return the maximum profit 
}
   
// keep this function call here 
console.log(StockPicker(readline()));