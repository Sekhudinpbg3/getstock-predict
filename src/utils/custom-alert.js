import { confirmAlert } from "react-confirm-alert";
import { DialogModal } from "../components/molekuls";

export const notificationAlert = (
  type = "succes",
  title = "title",
  message = "message",
  errorLog = ""
) => {
  const notifTitle = title ? title : "title";
  const notifMessage = message ? message : "your message here!";
  confirmAlert({
    customUI: ({ onClose }) => {
      return (
        <div>
          <DialogModal
            type={type}
            title={notifTitle}
            message={notifMessage}
            errorLog={errorLog}
            buttons={{
              button1: {
                type: "primary",
                title: "OK",
                onClick: () => {
                  onClose();
                },
              },
            }}
          />
        </div>
      );
    },
  });
};
