import React from "react";
import { Button, Gap, TextDinamis } from "../../atoms";

const DialogModal = ({ type, title, message, buttons }) => {
  const styleType = type
    ? type === "succes"
      ? "text-green-500"
      : type === "warning"
      ? "text-yellow-500"
      : type === "danger"
      ? "text-red-500"
      : ""
    : "";

  const bgType = type
    ? type === "danger"
      ? "bg-red-50"
      : "bg-white"
    : "bg-white";

  const textTitle = title ? title : "Notification";
  const textMessage = message ? message : "This is notification alert!";
  const allButtons = buttons
    ? buttons
    : {
        button0: {
          type: "primary",
          title: "button",
          onClick: () => alert("button pressed"),
        },
        button1: {
          type: "secondary",
          title: "button",
          onClick: () => alert("button pressed"),
        },
      };

  return (
    <div
      className={`${bgType} p-5 rounded shadow-md w-52 lg:w-64 2xl:w-72`}
    >
      <TextDinamis title={textTitle} semibold={true} textColor={styleType} />
      <Gap className={`h-1`} />
      <TextDinamis title={textMessage} textLight={true} />
      <Gap className={`h-5`} />
      <div
        className={
          Object.keys(allButtons).length > 1
            ? "flex space-x-2 lg:space-x-3 w-full"
            : ""
        }
      >
        {Object.keys(allButtons).map((button, index) => (
          <div key={index}>
            <Button
              title={allButtons[button].title}
              onClick={allButtons[button].onClick}
              primary={allButtons[button].type === "primary" ? true : false}
              width={"px-3"}
              height={"py-0.5"}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DialogModal;
