const allBtns = document.querySelectorAll(".myBtn");
const allDots = document.querySelectorAll(".dots");
const allMore = document.querySelectorAll(".more");

allBtns.forEach(btn => btn.addEventListener('click', toggleMoreText));

function toggleMoreText() {
    const dots = allDots[[...allBtns].indexOf(this)];
    const moreText = allMore[[...allBtns].indexOf(this)];

    if(dots.style.display === "none"){
        dots.style.display = "inline";
        moreText.style.display = "none";
    } else{
        dots.style.display = "none";
        moreText.style.display = "inline";
    }  
}