$(document).ready(function () {

    var value = $('input').val();
    $('button').click(function () {
        $.ajax({
            url: `https://restcountries.eu/rest/v2/name/${value}`,
            success: function (data) {
                $(country).html(data[0].name)
                $(capital).html(data[0].capital)
            }
        });
    })
})