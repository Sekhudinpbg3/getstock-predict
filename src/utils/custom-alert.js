import { confirmAlert } from "react-confirm-alert";
import { DialogModal } from "../components/molekuls";

export const notificationAlert = (title, message) => {
    const notifTitle = title?title:'title'
    const notifMessage=message?message:'your message here!'
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div>
            <DialogModal
              title= {notifTitle}
              message={notifMessage}
              buttons={{
                button1: {
                  type: "primary",
                  title: "OK",
                  onClick: ()=>{
                    onClose()
                  }
                },
              }}
            />
          </div>
        );
      },
    });
  };