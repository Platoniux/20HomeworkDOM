var a = document.querySelector('a');

function getAttributes(elem) {
  var attributeOfElem = elem.attributes;
  [].forEach.call(attributeOfElem, function(item, i, arr) {
    console.log(arr[i].value);
  });
}