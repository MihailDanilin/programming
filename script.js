function onBtnPressed(){
    document.getElementById('zapisi').style.display = 'block'
    document.body.style.overflowY = 'scroll'
    let zapisi = document.getElementById('zapisi')
    let otkuda = document.getElementById('otkuda').value
    let kuda = document.getElementById('kuda').value
    let nomer = document.getElementById('nomer').value
    let date = document.getElementById('date').value

    zapisi.insertAdjacentHTML('beforeend',
        `
    <div class="zapis">
        <h2>${nomer}</h2>
        <p>${otkuda}</p>
        <p>${kuda}</p>
        <p>${date}</p>
        <button class='deletebtn' onclick="deleteZapis(this)">Удалить запись</button>
    </div>
        `
    )
}
function deleteZapis(button){
    if (button.parentNode.parentNode.children.length == 1) {
        button.parentNode.parentNode.style.display = 'none'
        document.body.style.overflowY = 'hidden'
    }
    button.parentNode.remove()
}
function smenatemi(){
    if(document.body.classList.contains('light')){
        document.body.classList.remove('light')
        document.body.classList.add('dark')
    } else {
        document.body.classList.remove('dark')
        document.body.classList.add('light')
    }
}