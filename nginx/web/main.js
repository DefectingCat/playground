// $(document).ready(function () {
//     $('.btn').click(function () {
//         $.ajax({
//             url: 'test.txt',
//             success: function (result) {
//                 $('.title').html(result);
//             }
//         });
//     })
// })

$(document).ready(function () {
    let count = 0;
    $('.btn').click(function () {
        if (count % 2) {
            $('.title').html('Hi, there👋');
        } else {
            $('.title').load('test.txt');
        }
        count++;
    })
})