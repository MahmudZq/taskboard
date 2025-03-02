const cardTextlist = document.querySelectorAll(".truncatText");
for(let i=0; i<cardTextlist.length; i++){
    const text = cardTextlist[i].innerText;
    cardTextlist[i].innerText = truncateText(text);
}

dateTime();
