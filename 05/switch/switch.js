// === порівнює значення в case 'milk' === 'cat'

let buyItem = 'Milk';

switch (buyItem) {
    case 'cat':
        console.log('Cat price 1$');
        break;
    case 'milk':
    case 'Milk':
        console.log('milk price 1.2$');
        break;
    default:
        console.log(`Any information about ${buyItem}`);
        break;
}