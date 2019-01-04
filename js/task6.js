/*
6. Напишите функцию replaceElementBy(blockCurrent, blockToReplace) которая будет  заменять blockCurrent на blockToReplace и выводить сообщение в консоль после успешного проведения операции!
*/

var article = document.querySelector('article');
var newArticle = document.createElement('p');
newArticle.textContent = '...but I hate cold weather.';

replaceElementBy(article, newArticle);

function replaceElementBy(blockCurrent, blockToReplace) {
  var parent = blockCurrent.parentElement;
  var childrenOfParent = parent.children;
  parent.replaceChild(blockToReplace, blockCurrent);
  if (![].some.call(childrenOfParent, ifExist)) {
    console.log('Success!');
  } else {
    console.log('Failure!');
  }
  function ifExist(a) {
    return a === blockCurrent;
  }
}