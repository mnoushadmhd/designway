$(document).ready(function () {
    $('.navItem').on('click', function () {
        $('.navItem').removeClass('active')
        $(this).addClass("active")
    })
    if (screen.width > 1500) {
        $('.wrapper').addClass("container")
    }
    $(window).on('resize', function () {
        if (screen.width > 1500) {
            $('.wrapper').addClass("container")
        }
        else {
            $('.wrapper').removeClass("container")
        }
    })
})