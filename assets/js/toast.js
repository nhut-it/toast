export default function addToast({ title = '', type = '', message = '', duration = '' }) {
    const toastId = document.getElementById("toast");
    if (toastId) {
        const toast = document.createElement("div");

        toastId.appendChild(toast);
        const icon={
            success:'<i class="fa-solid fa-circle-check"></i>',
            error:'<i class="fa-solid fa-circle-exclamation"></i>'
        }

        toast.innerHTML = `
            <div class="toast__icon">${icon[type]}</div>
            <div class="toast__content">
            <h2 class="toast__title">${title}</h2>
            <p class="toast__mess ">${message}</p>
            </div>
            <div class="toast__close"><i class="fa-sharp fa-solid fa-xmark"></i></div>
            `;
        toast.classList.add("toast", `toast--${type}`);
        toast.style.animation = ` fadeIn .5s linear `;
        // remove toast when click
        toast.onclick = (e) => {
            if (e.target.closest(".toast__close")) {
                toast.remove();
            }
        };
        // auto remove toast 

        setTimeout(() => {
            toast.remove();

        }, duration)
    }


}
