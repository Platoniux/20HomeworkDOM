/*
6. Напишите функцию replaceElementBy(blockCurrent, blockToReplace) которая будет  заменять blockCurrent на blockToReplace и выводить сообщение в консоль после успешного проведения операции!
*/
replaceElementBy('p', 'button');

function replaceElementBy(blockCurrent, blockToReplace) {
  var blockCurrent = document.querySelector(blockCurrent);
  var blockToReplace = document.querySelector(blockToReplace);
  document.body.insertBefore(blockToReplace, blockCurrent);
  if (blockCurrent.previousElementSibling === blockToReplace) {
    console.log('Success!');
  } else {
    console.log('Failure!');
  }
}