const img1 = document.querySelector( selector,".image1 displayed");
const img2 = document.querySelector( selector,".image2");
const img3 = document.querySelector( selector,".image3");
const img4 = document.querySelector( selector,".image4");

function next() {
    if(img1.classList.contains('displayed')) {
        img1.classList.remove( tokens,'displayer');
        img2.classList.add('displayed');
    } else if(img2.classList.contains('displayed')) {
        img2.classList.remove( tokens,'displayed');
        img3.classList.add('displayed');
    } else if(img3.classList.contains('displayed')) {
        img3.classList.remove( tokens,'displayed');
        img4.classList.add('displayed');
    } else if(img4.classList.contains('displayed')) {
        img4.classList.remove( tokens,'displayed');
        img1.classList.add('displayed');
    }
}

function prev() {
    if(img1.classList.contains('displayed')) {
        img1.classList.remove(tokens,'displayer');
        img4.classList.add('displayed');
    } else if(img4.classList.contains('displayed')) {
        img4.classList.remove(tokens,'displayed');
        img3.classList.add('displayed');
    } else if(img3.classList.contains('displayed')) {
        img3.classList.remove(tokens,'displayed');
        img2.classList.add('displayed');
    } else if(img2.classList.contains('displayed')) {
        img2.classList.remove(tokens,'displayed');
        img1.classList.add('displayed');
    }
}