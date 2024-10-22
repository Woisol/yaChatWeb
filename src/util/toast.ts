import { toast as reactToast, ToastOptions } from "react-toastify"
const _toast_props: ToastOptions = { autoClose: 2000, position: "top-right", pauseOnHover: false, closeOnClick: true, draggable: true };
export const toast = {
	"info": (message: string) => reactToast.info(message, _toast_props),
	"success": (message: string) => reactToast.success(message, _toast_props),
	"error": (message: string) => reactToast.error(message, _toast_props),
	"warning": (message: string) => reactToast.warning(message, _toast_props),
}
