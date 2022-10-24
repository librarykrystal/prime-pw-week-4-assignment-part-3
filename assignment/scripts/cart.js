console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];

function addItem(item){
    console.log('in addItem function, item input test:', item);
    basket.push(item);
    console.log('Test to see new item is in array:', basket);
    return true;
}

console.log(addItem('thing1'));
console.log(addItem('thing2'));


function listItems(){
 for(i in basket){
    console.log('Item in basket:', basket[i]);
 }
}

listItems();