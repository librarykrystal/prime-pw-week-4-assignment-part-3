console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];

function addItem(item){
    console.log('in addItem function, item input test:', item);
    basket.push(item);
    console.log('Test to see new item is in basket:', basket);
    return true;
}

console.log(addItem('Toto'));
console.log(addItem('E.T.'));
console.log(`Basket is ${basket}`);
console.log('Adding Marion (expect true)', addItem('Marion Ravenwood'));
console.log(`Basket is now ${basket}`);


function listItems(){
    console.log('Test: In listItems function.');
    for(i in basket){
        console.log('Item in basket:', basket[i]);
 }
}

listItems();


function empty(){
    console.log('Test: In empty function.')
    basket.length = 0;
}

empty(basket);
console.log(`Basket is ${basket}`);
console.log('Let\'s let them stretch their legs:', basket);
