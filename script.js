let [bigImg, smallImgs] = [document.querySelector("#big"), document.querySelectorAll(".thumbnails img")];
let current = 1;
let next = 2;

smallImgs[0].style.opacity = "0.3";

smallImgs.forEach(img => img.addEventListener("click", imgClick));

let timerId = setInterval(showSlides, 2500);

function showSlides() {
    smallImgs.forEach(img => img.style.opacity = "1");
    bigImg.src = smallImgs[current].src;
    bigImg.classList.add("fade-in");
    setTimeout(() => bigImg.classList.remove("fade-in"), 400);
    smallImgs[current].style.opacity = "0.3";
    current = next;
    next++;
    if (next >= smallImgs.length) next = 0;
}

function imgClick(e) {
    clearTimeout(timerId);
    smallImgs.forEach(img => img.style.opacity = "1");
    bigImg.src = e.target.src;
    bigImg.classList.add("fade-in");
    setTimeout(() => bigImg.classList.remove("fade-in"), 400);
    e.target.style.opacity = "0.3";
}