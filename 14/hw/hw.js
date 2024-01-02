window.onload = function(){
    let treeEl = document.querySelector('#tree');
    let [...firstLevelEl] = treeEl.children;
    console.log(`First level elements count ${firstLevelEl.length}`);

    let secondLevelCount = 0;
    for(let i=0; i<firstLevelEl.length; i++){
        secondLevelCount +=firstLevelEl[i].children.length;
    }
    console.log(`Second level elements count ${secondLevelCount}`);

    const booksArray = [
        {
            title: 'Пригоди Аліси в Країні Див',
            year: 1865,
            rating: 4.5
        },
        {
            title: '1984',
            year: 1949,
            rating: 4.8
        },
        {
            title: 'Гаррі Поттер і філософський камінь',
            year: 1997,
            rating: 4.7
        }
    ];

    let tableEl = document.querySelector('table');
    function createTableRow(book){
        let row = document.createElement('tr');
        let titleCell = document.createElement('td');
        let yearCell = document.createElement('td');
        let raitingCell = document.createElement('td');

        titleCell.textContent = book.title;
        yearCell.textContent = book.year;
        raitingCell.textContent = book.rating;

        row.appendChild(titleCell);
        row.appendChild(yearCell);
        row.appendChild(raitingCell);
        return row;
    }

    for(let book of booksArray){
        tableEl.appendChild(createTableRow(book));
    }
}