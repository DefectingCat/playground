$(document).ready(function () {
    $('.btn').click(function () {
        $.ajax({
            url: 'test.txt',
            success: function (result) {
                $('.title').html(result);
            }
        });
    })
})
