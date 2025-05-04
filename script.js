let main = document.querySelector('.main')
let h1 = document.querySelector('h1')
let h4 = document.querySelector('h4')
let foot = document.querySelector('.footer')

let sunBtn = document.querySelector('.btn1')
let moonBtn = document.querySelector('.btn2')
let moonLogo = document.querySelector('.ri-moon-clear-line')

let day = document.querySelector('.lay1')
let night = document.querySelector('.lay2')

let footMark = document.querySelector('.mark')


function lightTheme(){
    day.style.opacity = 1

    h1.style.color = 'red'
    h4.style.color = 'red'
    main.style.backgroundColor = 'white'
    sunBtn.style.backgroundColor = ' rgba(250, 206, 121, 0.8)'
    sunBtn.style.border = '2px solid rgb(241, 178, 4)'
    foot.style.backgroundColor = 'rgba(241, 110, 110, 0.9)'
    footMark.style.color = 'red'
    
    moonLogo.style.color = 'silver'
    moonBtn.style.backgroundColor = 'transparent'
    moonBtn.style.border = 'none'

    setTimeout(() => {
        day.style.opacity = 0

    }, 1000);
    }

    function darkTheme(){
        night.style.opacity = 1
    
        h1.style.color = 'black'
        h4.style.color = 'black'
        main.style.backgroundColor = ' rgb(49, 47, 47)'
        moonBtn.style.backgroundColor = 'grey'
        moonLogo.style.color = 'white'
        moonBtn.style.border = '2px solid white'
        foot.style.backgroundColor = 'rgb(99, 95, 95)'
        footMark.style.color = 'white'
    
        sunBtn.style.backgroundColor = ' transparent'
        sunBtn.style.border = 'none'
    
        setTimeout(() => {
            night.style.opacity = 0
    
        }, 1000);
        
        }

sunBtn.addEventListener('click',function(){

    lightTheme()
    localStorage.setItem('theme','lightTheme')

})


moonBtn.addEventListener('click', function(){

    darkTheme()
    localStorage.setItem('theme','darkTheme')
   
})

// page reload theme check 
window.addEventListener('load',function(){

    document.body.classList.add('loaded')
    let savedTheme = localStorage.getItem('theme')
    if(savedTheme === 'lightTheme')  
        lightTheme()
    
    else if(savedTheme === 'darkTheme')
        darkTheme()
})