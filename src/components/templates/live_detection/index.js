import { Listbox, Transition } from "@headlessui/react";
import React, {
  Fragment,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import Webcam from "react-webcam";
import { CheckIcon, MiniChevronDown, MiniChevronUp } from "../../../assets";
import { Button, Gap, TextDinamis } from "../../atoms";

const LiveDetection = () => {
  const [devices, setDevices] = useState(null);
  const [selectedDevice, setSelectedDevice] = useState();
  const webcamRef = useRef(null);
  const [capture, setCapture] = useState(null);

  const getCapture = () => {
    if (webcamRef.current!==null) {
      const capSrc = webcamRef.current.getScreenshot();
      setCapture(capSrc);
    }
    console.log("CAPTURED", capture);
  };

  const handleDevices = useCallback(
    (mediaDevices) =>
      setDevices(mediaDevices.filter(({ kind }) => kind === "videoinput")),
    [setDevices]
  );
  console.log("CAPTURED", capture);
  console.log("REF", webcamRef);
  useEffect(() => {
    navigator.mediaDevices.enumerateDevices().then(handleDevices);
  }, [handleDevices]);

  return (
    <div>
      <div className="w-60 relative">
        <Listbox value={selectedDevice} onChange={setSelectedDevice}>
          {({ open }) => (
            <>
              <Listbox.Button className="flex w-full justify-between items-center bg-gray-50 px-2 py-0.5 rounded border border-gray-400 ">
                <TextDinamis
                  title={
                    selectedDevice ? selectedDevice.label : "...choose camera"
                  }
                />
                {open ? (
                  <MiniChevronUp className="w-4 md:w-5 2xl:w-6 fill-gray-400" />
                ) : (
                  <MiniChevronDown className="w-4 md:w-5 2xl:w-6 fill-gray-400" />
                )}
              </Listbox.Button>

              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="mt-1 rounded py-1.5 bg-white shadow-md absolute z-10">
                  {devices ? (
                    Object.keys(devices).map((device, index) => (
                      <Listbox.Option
                        key={index}
                        value={devices[device]}
                        className={({ active }) =>
                          `relative cursor-default px-2 py-0.5 ${
                            active ? "bg-green-100" : "bg-white"
                          }`
                        }
                      >
                        {({ selected }) => (
                          <div className="flex space-x-2">
                            {selected ? (
                              <CheckIcon className="h-3 md:h-4 lg:h-5 w-3 md:w-4 lg:w-5 fill-green-500" />
                            ) : (
                              <Gap className="h-3 md:h-4 lg:h-5 w-3 md:w-4 lg:w-5" />
                            )}
                            <TextDinamis
                              title={devices[device].label}
                              textLight={selected ? false : true}
                              semibold={selected ? true : false}
                            />
                          </div>
                        )}
                      </Listbox.Option>
                    ))
                  ) : (
                    <Listbox.Option>
                      <TextDinamis />
                    </Listbox.Option>
                  )}
                </Listbox.Options>
              </Transition>
            </>
          )}
        </Listbox>
      </div>
      <Gap className={"h-2"} />

      <div>
        {selectedDevice ? (
          <Webcam
            className="w-full h-[20rem] sm:h-[25rem] lg:h-[30rem] xl:h-[35rem] bg-gray-100 rounded"
            audio={false}
            height={220}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            videoConstraints={{ deviceId: selectedDevice.deviceId }}
          />
        ) : (
          <div className="flex justify-center items-center w-full h-[20rem] sm:h-[25rem] lg:h-[30rem] xl:h-[35rem] bg-gray-100 rounded">
            <TextDinamis title="Silakan memilih camera anda..." />
          </div>
        )}
        <div className="flex justify-center space-x-2 items-center w-full bg-green-100 py-1">
          <div>
            <Button
              primary={true}
              title="start"
              width="px-2"
              height={"py-0.5"}
            />
          </div>
          <div>
            <Button
              title="capture"
              width="px-2"
              height={"py-0.5"}
              onClick={getCapture}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveDetection;
