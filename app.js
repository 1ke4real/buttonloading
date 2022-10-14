let btn = document.querySelector('.button')
let spinnIcon = document.querySelector('.spin')
let btnText = document.querySelector('.btn-text')

btn.addEventListener('click', () => {
    btn.style.cursor = 'wait'
    spinnIcon.classList.add('checked')
    spinnIcon.classList.remove('hide')
    spinnIcon.classList.add('spiner')
    btnText.textContent = 'Loading...'

    setTimeout(() => {
        btn.style.pointerEvents = 'none'
        spinnIcon.classList.replace('spin', 'check')
        spinnIcon.classList.replace('fa-circle-notch', 'fa-check')
        spinnIcon.classList.remove('hide')
        spinnIcon.classList.remove('spiner')
        btnText.textContent = 'Done'
    }, 5000)
})