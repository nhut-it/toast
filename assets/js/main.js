import addToast from "./toast.js";
const btnSuccess = document.querySelector(".js-btn-sucsess");
const btnError = document.querySelector('.js-btn-error');
btnSuccess.addEventListener("click", () => {
    
    addToast({
        title: 'Thành công',
        type: 'success',
        message: 'Bạn đã đăng ký thành công tài khoản',
        duration: 2000,

    })
});


btnError.addEventListener('click', () => {
    addToast({
        title: 'Thất bại',
        type: 'error',
        message: 'Đăng ký thất bại ,vui lòng gọi quản trị viên',
        duration: 2000,

    })
})