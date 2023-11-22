var isDark = false

$(document).ready(() => {
    feather.replace()

    $('#theme-button').click(() => {
        const originClass = isDark ? 'dark' : 'light'
        const targetClass = isDark ? 'light' : 'dark'
        const targetIcon = isDark ? 'sun' : 'moon'
        
        console.log('[THEME CHANGE] Transition begin.')

        $('.theme-affected').toggleClass("light dark")
        $("#popup-container").toggleClass("pc-light pc-dark")
        $("#close-button").toggleClass("cb-light cb-dark")
        $("#popup").toggleClass("p-light p-dark")
        $('#theme-button').html('<i data-feather="' + targetIcon + '" class="feather"></i>')
        
        feather.replace()
        isDark = !isDark

        console.log('[THEME CHANGE] Transition end.')
    })

    $('#type-button').click(() => {
        console.log("[TEXT POPUP] Transition start.")

        $("#popup-container").toggleClass("pc-hide pc-show")
    })

    $('#close-button').click(() => {
        console.log("[TEXT POPUP] Transition start.")

        $("#popup-container").toggleClass("pc-hide pc-show")
    })

    $("#textinput").on("input", (e) => {
        $("#bigtext").text(e.target.value)
    })
})