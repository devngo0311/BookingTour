$(function() {

    $("#submit").on("click", function() {
        $.ajax({
                url: '/user/register',
                type: 'POST',
                data: {
                    username: $('#username').val(),
                    password: $('#password').val(),
                    full_name: $('#full_name').val(),
                    sdt: $('#sdt').val(),
                    email: $('#email').val()
                }
            }).then(data => {
                if (data.msg == 'Success') {
                    alert("Tạo tài khoản thành công");
                    window.location.href = '/user/login';
                    return false;
                }
                if (data.msg == 'User exist') {
                    alert("Tạo tài khoản không thành công, tài khoản này đã tồn tại");
                }
            })
            .catch(error => {
                alert("Lỗi không xác định, vui lòng thử lại");
                console.log(error);
            })
    })
})