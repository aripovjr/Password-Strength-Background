const background = document.getElementById('background')
const emailEl = document.getElementById('email')
const passwordEl = document.getElementById('password')

emailEl.addEventListener('keydown', (e)=>blurOut())
passwordEl.addEventListener('input', (e)=>{
    const input = e.target.value
    const length = input.length
    const blurValue = 20 - length * 2
    background.style.filter=`blur(${blurValue}px)`
})