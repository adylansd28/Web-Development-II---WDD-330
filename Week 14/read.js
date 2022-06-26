import * as bom from './book-of-mormon.json' assert { type: "json" };
import * as dac from './doctrine-and-covenants.json' assert { type: "json" };
import * as ot from './old-testament.json' assert { type: "json" };
import * as nt from './new-testament.json' assert { type: "json" };
import * as pgp from './pearl-of-great-price.json' assert { type: "json" };

const BOM = bom;
const DAC = dac;
const OT = ot;
const NT = nt;
const PGP = pgp;

const BOMArray = JSON.parse(BOM);
const DACArray = JSON.parse(DAC);
const OTArray = JSON.parse(OT);
const NTArray = JSON.parse(NT);
const PGPArray = JSON.parse(PGP);

function searchForWord(word, array) {
    return array.reduce(function(s, o) {
      if (o.igralec1 === word) s++;
      if (o.igralec2 === word) s++;
      return s;
    }, 0);
};
  
let count1 = searchForWord("Nephi", BOMArray);
let count2 = searchForWord("Lehi", BOMArray);

console.log(count1);
console.log(count2);