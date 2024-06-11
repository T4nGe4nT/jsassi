let shoppingList = ['pop tarts' , 'ramen noodles' , 'chips' , 'salsa' , 'coffee'];
shoppingList.push('fruit loops');
shoppingList[4] = ('fair trade coffee')
shoppingList.splice([2],2 , 'rice' , 'beans')
 

let shoppingCart = [];

shoppingCart.push(shoppingList.pop());
shoppingCart.push(shoppingList.shift());

while (shoppingList.length > 0) {
    shoppingCart.push(shoppingList.pop())
}

shoppingCart.sort();
shoppingCart.reverse();


// console.log (shoppingList); // Using this just to check stuff.
console.log (shoppingCart.join (', '));

// My first attempt got same result skipping steps 6-8 in the second part. I got the info there but did not dump the first array?. 

// let shoppingList = ['pop tarts' , 'ramen noodles' , 'chips' , 'salsa' , 'coffee'];
// shoppingList.splice([2], [2], 'rice');
// shoppingList.splice([3], [3], 'beans');
// shoppingList.splice([4], [4], 'fair trade coffee');
// shoppingList.push('fruit loops');
 
// // Could have use shoppingList[2] = rice; and repeat for each index. 

// let shoppingCart = [];

// shoppingCart = shoppingList.slice([0]);
// shoppingCart.sort();
// shoppingCart.reverse();


// console.log (shoppingList);
// console.log (shoppingCart.join (', '));
