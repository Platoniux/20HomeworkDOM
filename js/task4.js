/*
4. Создайте функцию createCloneNode(block) которая будет  клонировать передаваемый ей элемент и добавять его в конец страницы!
*/

createCloneNode('p');

function createCloneNode(block) {
  var blockForCloning = document.querySelector(block);
  var clone = blockForCloning.cloneNode(true);
  var page = document.body;
  page.appendChild(clone);
}