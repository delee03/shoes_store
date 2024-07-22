// một thẻ chứa thông báo
// value dữ liệu người dùng nhập

// Kiểm tra xem người dùng đã nhập dữ liệu hay chưa (kiểm tra rỗng)
function checkEmptyValue(value, span) {
    if (value) {
        // xử lí khi dữ liệu được người dùng nhập vào
        // tham số span đại diện cho một câu lệnh DOM tới thẻ span thông báo
        span.innerHTML = "";
        return true;
    } else {
        // xử lí khi dữ liệu là chuỗi rỗng
        span.innerHTML = "Vui lòng không bỏ trống trường này";
        return false;
    }
}

// Kiểm tra độ dài ký tự của dữ liệu nhập vào
// function xử lí kiểm tra độ dài tối thiểu và độ dài tối đa của dữ liệu nhập vào
//
function checkMinMaxValue(valueInput, span, min, max) {
    let doDaiKyTu = valueInput.length; // "cát tường" ==>9
    if (doDaiKyTu >= min && doDaiKyTu <= max) {
        // trường hợp đúng
        span.innerHTML = "";
        return true;
    } else {
        span.innerHTML = `Vui lòng nhập tối thiểu ${min} ký tự và tối đa ${max} ký tự`;
        return false;
    }
}

// Kiểm tra email người dùng
function checkEmailValue(value, span) {
    let regexEmail =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // let regexFacebookLink =
    //   /^(https?:\/\/)?(www\.)?facebook\.com\/[a-zA-Z0-9(\.\?)?]/;

    // phương thức test ==> value ==> true | false
    let isValid = regexEmail.test(value);
    if (isValid) {
        // Đây là trường hợp khi dữ liệu người dùng là email và qua được phương thức test
        span.innerHTML = "";
        return true;
    } else {
        // Đây là trường hợp khi dữ liệu người dùng ko phải email
        span.innerHTML = "Vui lòng nhập đúng định dạng email";
        return false;
    }
}
