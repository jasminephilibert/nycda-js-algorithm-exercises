/**
 * Given a string, it "camelizes" by uppercasing every character at an even index, and lowercasing every character at an odd index.
 * Returns the new string.
 */
// function camelize(text) {
//   return text.replace(/^([A-Z])|[\s-_]+(\w)/g, function(match, p1, p2, offset) {
//     if (p2) return p2.toUpperCase();
//     return p1.toLowerCase();        
// });
// }

function camelize(text) {
  let arr = text.split("")
  let tempArr = []
  for(let i = 0; i < text.length; i++ ) {
    if (i % 2 == 0) {
      tempArr.push(arr[i].toUpperCase())
      }
     else {
       tempArr.push(arr[i])
     }

  }
  console.log(tempArr.toString().replaceAll(",", ""))
}
camelize("jasmine")
// describe('camelize', function() {
//   const assert = require("chai").assert;

//   it('should work on empty strings', function() {
//     assert.equal(camelize(""), "");
//   });

//   it('should work on single characters', function() {
//     assert.equal(camelize("a"), "A");
//     assert.equal(camelize("q"), "Q");
//     assert.equal(camelize("5"), "5");
//     assert.equal(camelize(" "), " ");
//   });

//   it('should work for pairs', function() {
//     assert.equal(camelize("fo"), "Fo");
//     assert.equal(camelize("AB"), "Ab");
//     assert.equal(camelize("cY"), "Cy");
//     assert.equal(camelize("Xd"), "Xd");
//   });

//   it('should work for longer strings', function() {
//     assert.equal(camelize("lol"), "LoL");
//     assert.equal(camelize("potato warrior"), "PoTaTo wArRiOr");
//   });
// });
// */
