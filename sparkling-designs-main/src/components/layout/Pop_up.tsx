import { CheckCircle2, XCircle, Loader2 } from "lucide-react";

type PopupState = {
  open: boolean;
  type: "loading" | "success" | "error";
  title: string;
  description: string;
};

type Props = {
  popup: PopupState;
  onClose: () => void;
};

const Popup = ({ popup, onClose }: Props) => {
  if (!popup.open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white w-[90%] max-w-sm rounded-2xl p-6 text-center animate-scale-in shadow-xl">

        {/* ICON */}
        <div className="flex justify-center mb-4">
          {popup.type === "loading" && (
            <Loader2 className="h-12 w-12 text-primary animate-spin" />
          )}
          {popup.type === "success" && (
            <CheckCircle2 className="h-12 w-12 text-green-500" />
          )}
          {popup.type === "error" && (
            <XCircle className="h-12 w-12 text-red-500" />
          )}
        </div>

        {/* CONTENT */}
        <h2 className="text-lg font-bold text-gray-900">
          {popup.title}
        </h2>
        <p className="text-sm text-gray-500 mt-2">
          {popup.description}
        </p>

        {/* BUTTON */}
        {popup.type !== "loading" && (
          <button
            onClick={onClose}
            className="mt-6 w-full py-3 rounded-xl bg-primary text-white font-semibold"
          >
            OK
          </button>
        )}
      </div>
    </div>
  );
};

export default Popup;
