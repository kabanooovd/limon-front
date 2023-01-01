import { toast } from 'react-toastify';

type TToastingKinds = "error" | "success" | "info";
const STANDART_MESSAGES = {
  error: "Unhandled error",
  success: "Unhandled success message",
  info: "Unhandled info text case",
};

export const onToasting = ({type, message}: {type: TToastingKinds, message?: string}) => {
  toast[type](message || STANDART_MESSAGES[type], {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
}