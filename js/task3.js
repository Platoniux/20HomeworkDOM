/*
3. Напишите функцию createSpanInBlockByID(blockID) которая будет создавать элемент 'span' в блоке id=blockID
P.S. Эта функция должна проверять наличие элемента в этом блоке, если он уже там есть второй раз она его добавлять не будет!
*/
createSpanInBlockById('just-div');

function createSpanInBlockById(blockID) {
  var span = document.createElement('span');
  var parent = document.getElementById(blockID);
  var elemChild = parent.children;
  if (![].every.call(elemChild, ifThereExistSpan)) {
    parent.appendChild(span);
  } else {
    console.log('Element already exist');
  }
  function ifThereExistSpan(a) {
    return a.tagName === 'SPAN';
  }
}
