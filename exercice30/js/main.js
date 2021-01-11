$(document).ready(function () {
    $("input").keyup(function () {
        var value = $('input').val();
        if (value.length > 5) {
            console.log("supérieur à 5")
            $('input').removeClass('is-invalid')
            $('input').addClass('is-valid')
        } else {
            console.log("inférieur à 5")
            $('input').removeClass('is-valid')
            $('input').addClass('is-invalid')
        }
    });
});