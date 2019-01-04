var scriptLastElem = document.body.lastChild;

createTable(10, 10, scriptLastElem);

function createTable(numberRows, numberCells, nextElem) {
  var fragment = document.createDocumentFragment();
  var table = document.createElement('table');
  table.className = 'ninja-table';
  for (let i = 0; i <= numberRows; i++) {
    var tableRow = document.createElement('tr');
    tableRow.className = 'ninja-table-row';
    table.appendChild(tableRow);
    for (let j = 0; j <= numberCells; j++) {
      var tableCells = document.createElement('td');
      tableCells.className = 'ninja-table-cell';
      var textInCells = document.createTextNode('00');
      tableCells.appendChild(textInCells);
      tableRow.appendChild(tableCells);
    }
  }
  function redCells(x) {
    for (var i = 0; i <= x; i++) {
      var rows = table.rows[i];
      rows.cells[i].style.backgroundColor = 'red';
    }
  }
  redCells(numberRows);
  fragment.appendChild(table);
  document.body.insertBefore(fragment, nextElem);
}