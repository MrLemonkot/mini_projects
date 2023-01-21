const upButton = document.querySelector('.up-button')
const downButton = document.querySelector('.down-button')
const sidebar = document.querySelector('.sidebar')
const mainSlide = document.querySelector('.main-slide')
const container = document.querySelector('.container')

const slidesCounter = mainSlide.querySelectorAll('div').length

let activeSlideIndex = 0

sidebar.style.top = `-${(slidesCounter - 1) * 100}vh`

upButton.addEventListener('click', () => {
    changeSlides('up')
})

downButton.addEventListener('click', () => {
    changeSlides('down')
})

function changeSlides(direction){
    if(direction === 'up') {
        activeSlideIndex++
        if(activeSlideIndex === slidesCounter)
        {
            activeSlideIndex = 0
        }
    }  
    else if (direction === 'down'){
        activeSlideIndex--
        if(activeSlideIndex < 0)
        {
            activeSlideIndex = slidesCounter - 1
        }
    }
    const heigh = container.clientHeight

    mainSlide.style.transform = `translateY(-${activeSlideIndex * heigh}px)`
    sidebar.style.transform = `translateY(${activeSlideIndex * heigh}px)`
}