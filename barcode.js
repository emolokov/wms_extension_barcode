

function genBar(t){
    JsBarcode("#barcode", t);
}



const queryString = window.location.search;
console.log(queryString);
const urlParams = new URLSearchParams(queryString);
const s_ii = urlParams.get('ii')
genBar(s_ii);

setTimeout(function() { 
    window.close();
}, 3000);