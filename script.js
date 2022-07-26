
const body = document.querySelector('.container')
const modal = document.querySelector('.modal')
const submitBtn = document.querySelectorAll('.submit-pledge')


function check(){
    console.log('hello')
    body.style.opacity = '0.5'
    modal.style.display = 'block'
}


function closeModal(){
    body.style.opacity = '1'
    modal.style.display = 'none'
}


function bookmark(){
    document.getElementById('bookmark').innerHTML = 'Bookmarked!'
    document.getElementById('bookmark').style.color = 'green'
}


function congrats(){
   modal.style.display = 'none'
   body.style.opacity = '0.5'
   document.getElementById('congrats-modal').style.display = 'block'
}

function closeAll(){
    document.getElementById('congrats-modal').style.display = 'none'
    body.style.opacity = '1'
}