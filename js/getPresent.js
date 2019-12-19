// let name_guest = document.getElementById('name_guest');
// console.log('name_guest', name_guest);

let buttonShowModalPresent = document.getElementById('getPresentModal')
let modalPresentWindow = document.getElementById('modalPresent')
let closePresentWindow = document.getElementById('closeModalPresent')
let sendPresentInfo = document.getElementById('sendPresentInfo')

buttonShowModalPresent.onclick = function () {
    modalPresentWindow.style.display = 'block'
}

closeModalPresent.onclick = function () {
    modalPresentWindow.style.display = 'none'
}

sendPresentInfo.onclick = function () {
    let nameGuest = getElementById('name_guest').value
    let selectGuest = getElementById('select_guest').value

    console.log('nameGuest', nameGuest)
    console.log('selectGuest', selectGuest)
}