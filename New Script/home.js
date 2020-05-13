let toggleElement = document.querySelector(".soft-btn")

const toggle = () => {
    toggleElement.classList.toggle('active')
    document.body.classList.toggle('on')
}
toggleElement.onclick = toggle
