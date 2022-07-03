const img1 = document.querySelector(".image1");
const img2 = document.querySelector(".image2");
const img3 = document.querySelector(".image3");
const img4 = document.querySelector(".image4");

function next() {
    if(img1.classList.contains('displayed')) {
        img1.classList.remove('displayer');
        img2.classList.add('displayed');
    } else if(img2.classList.contains('displayed')) {
        img2.classList.remove('displayed');
        img3.classList.add('displayed');
    } else if(img3.classList.contains('displayed')) {
        img3.classList.remove('displayed');
        img4.classList.add('displayed');
    } else if(img4.classList.contains('displayed')) {
        img4.classList.remove('displayed');
        img1.classList.add('displayed');
    }
}

function prev() {
    if(img1.classList.contains('displayed')) {
        img1.classList.remove('displayer');
        img4.classList.add('displayed');
    } else if(img4.classList.contains('displayed')) {
        img4.classList.remove('displayed');
        img3.classList.add('displayed');
    } else if(img3.classList.contains('displayed')) {
        img3.classList.remove('displayed');
        img2.classList.add('displayed');
    } else if(img2.classList.contains('displayed')) {
        img2.classList.remove('displayed');
        img1.classList.add('displayed');
    }
}