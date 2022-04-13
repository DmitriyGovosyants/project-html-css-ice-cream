const points = document.getElementById("points");
const more = document.getElementById("next");
const btnText = document.getElementById("moreBtn");

btnText.addEventListener('click', toggleMoreText);

function toggleMoreText() {
    if (points.style.display === "none") {
        points.style.display = "inline";
        more.style.display = "none";
    } else {
        points.style.display = "none";
        more.style.display = "inline";
    }
}
