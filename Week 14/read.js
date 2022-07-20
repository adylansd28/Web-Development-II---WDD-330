let bom;
let httpRequestbom = new XMLHttpRequest();// asynchronous request
httpRequestbom.open("GET","./book-of-mormon.json", true);
httpRequestbom.send();
httpRequestbom.addEventListener("readystatechange", function() {
  if (this.readyState === this.DONE) {
    bom = JSON.parse(this.response);
    bom = JSON.stringify(bom);
    bom = bom.toString();
    bom = bom.toLocaleLowerCase();
  };
});

let dac;
let httpRequestdac = new XMLHttpRequest();// asynchronous request
httpRequestdac.open("GET","./doctrine-and-covenants.json", true);
httpRequestdac.send();
httpRequestdac.addEventListener("readystatechange", function() {
  if (this.readyState === this.DONE) {
    dac = JSON.parse(this.response);
    dac = JSON.stringify(dac);
    dac = dac.toString();
    dac = dac.toLocaleLowerCase();
  };
});

let nt;
let httpRequestnt = new XMLHttpRequest();// asynchronous request
httpRequestnt.open("GET","./new-testament.json", true);
httpRequestnt.send();
httpRequestnt.addEventListener("readystatechange", function() {
  if (this.readyState === this.DONE) {
    nt = JSON.parse(this.response);
    nt = JSON.stringify(nt);
    nt = nt.toString();
    nt = nt.toLocaleLowerCase();
  };
});

let ot;
let httpRequestot = new XMLHttpRequest();// asynchronous request
httpRequestot.open("GET","./old-testament.json", true);
httpRequestot.send();
httpRequestot.addEventListener("readystatechange", function() {
  if (this.readyState === this.DONE) {
    ot = JSON.parse(this.response);
    ot = JSON.stringify(ot);
    ot = ot.toString();
    ot = ot.toLocaleLowerCase();
  };
});

let pgp;
let httpRequestpgp = new XMLHttpRequest();// asynchronous request
httpRequestpgp.open("GET","./pearl-of-great-price.json", true);
httpRequestpgp.send();
httpRequestpgp.addEventListener("readystatechange", function() {
  if (this.readyState === this.DONE) {
    pgp = JSON.parse(this.response);
    pgp = JSON.stringify(pgp);
    pgp = pgp.toString();
    pgp = pgp.toLocaleLowerCase();
  };
});

let analyzeButton = document.querySelector("#analyze-button");
let analyzeInput = document.querySelector("#analyze-input");

let BOMSpan = document.querySelector("#bom-span");
let DACSpan = document.querySelector("#dac-span");
let OTSpan = document.querySelector("#ot-span");
let NTSpan = document.querySelector("#nt-span");
let PGPSpan = document.querySelector("#pgp-span");
let totalSpan = document.querySelector("#total-span");
let analyzeSpan = document.querySelector("#analysis-span");

function Analyze () {

  analyzeInput = document.querySelector("#analyze-input");

  BOMSpan = document.querySelector("#bom-span");
  DACSpan = document.querySelector("#dac-span");
  OTSpan = document.querySelector("#ot-span");
  NTSpan = document.querySelector("#nt-span");
  PGPSpan = document.querySelector("#pgp-span");
  totalSpan = document.querySelector("#total-span");

  let wordSplit = analyzeInput.value;

  let BOMcount = bom.split(wordSplit.toLocaleLowerCase()).length - 1;
  let DACcount = dac.split(wordSplit.toLocaleLowerCase()).length - 1;
  let NTcount = nt.split(wordSplit.toLocaleLowerCase()).length - 1;
  let OTcount = ot.split(wordSplit.toLocaleLowerCase()).length - 1;
  let PGPcount = pgp.split(wordSplit.toLocaleLowerCase()).length - 1;

  let sum = BOMcount + DACcount + NTcount + OTcount + PGPcount;
  console.log(BOMcount);
  console.log(DACcount);
  console.log(NTcount);
  console.log(OTcount);
  console.log(PGPcount);
  console.log(sum);

  BOMSpan.textContent = BOMcount;
  DACSpan.textContent = DACcount;
  OTSpan.textContent = OTcount;
  NTSpan.textContent = NTcount;
  PGPSpan.textContent = PGPcount;
  totalSpan.textContent = sum;
  analyzeSpan.textContent = wordSplit;
};

analyzeButton.addEventListener("click", Analyze);