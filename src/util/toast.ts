import { toast as reactToast, ToastOptions } from "react-toastify"
const _toast_props: ToastOptions = { autoClose: 1000, position: "top-right", pauseOnHover: false, closeOnClick: true, draggable: true, hideProgressBar: true };
// export const toast = {
// 	"info": (message: string) => reactToast.info(message, { autoClose: 1000, position: "top-right", pauseOnHover: false, closeOnClick: true, draggable: true, hideProgressBar: true }),
// 	"success": (message: string) => reactToast.success(message, { autoClose: 1000, position: "top-right", pauseOnHover: false, closeOnClick: true, draggable: true, hideProgressBar: true }),
// 	"error": (message: string) => reactToast.error(message, { autoClose: 1000, position: "top-right", pauseOnHover: false, closeOnClick: true, draggable: true, hideProgressBar: true }),
// 	"warning": (message: string) => reactToast.warning(message, { autoClose: 1000, position: "top-right", pauseOnHover: false, closeOnClick: true, draggable: true, hideProgressBar: true }),
// }
export function toast(type: "info" | "success" | "error" | "warning", message: string) {
	reactToast[type](message, _toast_props);
}