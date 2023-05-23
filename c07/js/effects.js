let h2Element = document.querySelector('h2')
$(h2Element).hide().slideDown()
let liElement = document.querySelectorAll('li')
liElement.forEach((element)=>{
    $(element).hide().delay(700).fadeIn(700)
})
