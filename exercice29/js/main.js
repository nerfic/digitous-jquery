$(document).ready(function () {
    $('button').click(function () {
        if ($('input').val().length > 5) {
            $('input').removeClass('is-invalid')
            $('input').addClass('is-valid')
            console.log('Supérieur à 5 caractère')
        } else {
            $('input').removeClass('is-valid')
            $('input').addClass('is-invalid')
            console.log('Inférieur à 5 caractère')
        }
    })
})