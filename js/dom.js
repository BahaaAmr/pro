const hero_banner = document.querySelector('.hero_banner');
const hero_heading = document.querySelector('.hero_banner h1');
const nextBtn = document.querySelector('.hero_banner i:nth-child(3)');
const prevBtnBtn = document.querySelector('.hero_banner i:nth-child(1)');
let imgIndex = 0;
let productContainer = [{
    urlImage:'1.jpg',
    content:'Benbo Practical 4 Slider #1',
},
{
    urlImage:'2.jpg',
    content:'Benbo Practical 3 Slider #2',
},
{
    urlImage:'3.jpg',
    content:'Benbo Practical 2 Slider #3',
},
{
    urlImage:'4.jpg',
    content:'Benbo Practical 1 Slider #4',
}]
let nextSlider = ()=>{
    imgIndex ++
    if (imgIndex > productContainer.length -1) {
        imgIndex=0
    }
    hero_banner.style.backgroundImage = `url(img/${productContainer[imgIndex].urlImage})`
    hero_heading.textContent = `${productContainer[imgIndex].content}`
}
let prevslider = ()=>{
    imgIndex --
    if (imgIndex < 0) {
        imgIndex = productContainer.length -1
    }
    hero_banner.style.backgroundImage = `url(img/${productContainer[imgIndex].urlImage})`
    hero_heading.textContent = `${productContainer[imgIndex].content}`
}
nextBtn.addEventListener('click', nextSlider)
prevBtnBtn.addEventListener('click', prevslider)