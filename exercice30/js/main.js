// $(document).ready(function () {
// if ($('input').keyup().val().length > 5) {
//     $('input').attr('class', 'is-valid')
//     console.log('Supérieur à 5 caractère')
// } else {
//     $('input').attr('class', 'is-invalid')
//     console.log('Inférieur à 5 caractère')
// }

//     console.log($('input').keyup(function (event) { }))
// })

$(document).ready(function () {
    $("input").keyup(function () {
        var value = $('input').val();
        if (value.length > 5) {
            console.log("supérieur à 5")
            $('input').attr('class', 'is-valid')
        } else {
            console.log("inférieur à 5")
            $('input').attr('class', 'is-invalid')
        }
    }).keyup();
});