$(document).ready(function () {
    $('button').click(function () {
        if ($('input').val().length > 5) {
            $('input').attr('class', 'is-valid')
            console.log('Supérieur à 5 caractère')
        } else {
            console.log('pas bon')
            $('input').attr('class', 'is-invalid')
            console.log('Inférieur à 5 caractère')
        }
    })
})