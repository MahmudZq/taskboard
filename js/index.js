const cardTextlist = document.querySelectorAll(".truncatText");
for(let i=0; i<cardTextlist.length; i++){
    const text = cardTextlist[i].innerText;
    cardTextlist[i].innerText = truncateText(text);
}

dateTime();


const test = document.getElementById('testForBlog');
const inHt = test.innerHTML;
const inTx = test.innerText;
const txCt = test.textContent;
console.log(test);
console.log(inHt);
console.log(inTx);
console.log(txCt);
