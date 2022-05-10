import { Switch } from "@headlessui/react";
import React, { useState } from "react";
import { Gap, TextDinamis } from "../../atoms";

const ToggleInput = ({
  switchSize,
  ballSize,
  fromColor,
  toColor,
  titleOnOff,
  enableToggle,
  ...props
}) => {
  const [enabled, setEnabled] = useState(false);
  const title = titleOnOff ? titleOnOff : ["On", "Off"];
  const from = fromColor ? fromColor : "bg-gray-200";
  const to = toColor ? toColor : "bg-green-500";
  return (
    <div className="flex justify-center items-center">
      <Switch
        checked={enableToggle?enableToggle:enabled}
        onChange={setEnabled}
        className={`${
          enabled ? `${to} border-r-2 border-white` : `${from}`
        } relative inline-flex ${
          switchSize ? switchSize : "h-3 w-9"
        }  items-center rounded-full`}
        {...props}
      >
        <span
          className={`${
            enabled ? "translate-x-4" : "translate-x-0"
          } inline-block ${
            ballSize ? ballSize : "h-4 w-4"
          } transform rounded-full bg-white outline-2 shadow`}
        />
      </Switch>
      <Gap className={"h-2 w-2"} />
      <TextDinamis title={enabled ? title[0] : title[1]} textLight={true} />
    </div>
  );
};

export default ToggleInput;
