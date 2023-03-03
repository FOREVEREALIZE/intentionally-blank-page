var isDark = false

$(document).ready(() => {
    feather.replace()

    $('#theme-button').click(() => {
        const originClass = isDark ? 'dark' : 'light'
        const targetClass = isDark ? 'light' : 'dark'
        const targetIcon = isDark ? 'sun' : 'moon'
        
        console.log('[THEME CHANGE] Change from ' + originClass.toUpperCase() + ' to ' + targetClass.toUpperCase())

        $('.' + originClass).addClass(targetClass).removeClass(originClass)
        $('#theme-button').html('<i data-feather="' + targetIcon + '" class="feather"></i>')
        
        feather.replace()
        isDark = !isDark
    })
})