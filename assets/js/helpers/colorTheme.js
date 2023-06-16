function colorTheme() {
    const toggleSwitch = document.querySelector('.btn--toggle')
    // const body = document.querySelector('body')

    toggleSwitch.addEventListener('click', function() {
       document.body.classList.toggle('switch')
    })
}

export default colorTheme