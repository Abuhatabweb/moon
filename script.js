let stars = document.querySelector(".stars")
let moon = document.querySelector(".moon")
let mBehind = document.querySelector(".m-behind")
let title = document.querySelector(".title")
let explore = document.querySelector(".explore")
let header = document.querySelector("header")

window.addEventListener("scroll" , function(){
    let value = window.scrollY
    stars.style.transform =`translateX(${value* 0.25+ "px"} `
    header.style.top = -value + "px"
    moon.style.top = value * 1.05 + "px"
    mBehind.style.top = value * 0.5 + "px"
    title.style.transform = `translate(${value* 4 + "px"} , ${value* 1.5 + "px"})`
    explore.style.marginTop = value * 1.5 + "px"
})