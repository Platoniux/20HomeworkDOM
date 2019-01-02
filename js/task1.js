var a = document.querySelector('a');

logAttributes(a);

function logAttributes(elem) {
  var attributeOfElem = elem.attributes;
  for(var i = 0; i < attributeOfElem.length; i++) {
    console.log(attributeOfElem[i].value);
  }
}