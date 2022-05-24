import { Listbox, Transition } from "@headlessui/react";
import React, {
  Fragment,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
// import * as tf from "@tensorflow/tfjs";
import * as cocossd from "@tensorflow-models/coco-ssd";
import Webcam from "react-webcam";
import { CheckIcon, MiniChevronDown, MiniChevronUp } from "../../../assets";
import { Button, Gap, TextDinamis } from "../../atoms";
import { drawRect } from "./utilities";
import { notificationAlert } from "../../../utils/custom-alert";

const LiveDetection = () => {
  const [devices, setDevices] = useState(null);
  const [selectedDevice, setSelectedDevice] = useState();
  const [capture, setCapture] = useState(null);
  const [modelLoaded, setModelLoaded] = useState(false);

  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  // =========================================
  const runCoco = async () => {
    const net = await cocossd.load();
    notificationAlert(
      "succes",
      "Notification",
      "Model telah berhasil diload, klik 'OK' untuk melanjutkan.",
      null
    );
    setModelLoaded(true);
    setInterval(() => {
      detect(net);
    }, 10);
  };

  const detect = async (net) => {
    // Check data is available
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      // Get Video Properties
      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;

      // Set video width
      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

      // Set canvas height and width
      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;

      // Make Detections
      const obj = await net.detect(video);

      // Draw mesh
      const ctx = canvasRef.current.getContext("2d");
      drawRect(obj, ctx);
    }
  };

  useEffect(() => {
    runCoco();
  });
  // =========================================

  const getCapture = () => {
    if (webcamRef.current !== null) {
      const capSrc = webcamRef.current.getScreenshot();
      setCapture(capSrc);
    }
  };

  const handleDevices = useCallback(
    (mediaDevices) =>
      setDevices(mediaDevices.filter(({ kind }) => kind === "videoinput")),
    [setDevices]
  );
  // console.log("CAPTURED", capture);
  //   console.log("CAMERAS", devices);
  //   console.log("REF", webcamRef);
  useEffect(() => {
    navigator.mediaDevices.enumerateDevices().then(handleDevices);
  }, [handleDevices]);

  return (
    <div>
      <TextDinamis title="Live Object Detection Dengan Coco Model" semibold />
      <Gap className="h-2" />
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
                <Listbox.Options className="mt-1 rounded py-1.5 bg-white shadow-md absolute z-20">
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
          <div className="relative rounded">
            <Webcam
              className="w-full h-[20rem] sm:h-[25rem] lg:h-[30rem] xl:h-[35rem] bg-gray-100 rounded"
              audio={false}
              height={220}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              videoConstraints={{ deviceId: selectedDevice.deviceId }}
            />
            <canvas
              ref={canvasRef}
              className={
                "absolute mx-auto top-0 left-0 right-0 text-center w-full h-[20rem] sm:h-[25rem] lg:h-[30rem] xl:h-[35rem] z-10"
              }
            />
          </div>
        ) : (
          <div className="flex justify-center items-center w-full h-[20rem] sm:h-[25rem] lg:h-[30rem] xl:h-[35rem] bg-gray-100 rounded">
            <TextDinamis
              title={
                modelLoaded
                  ? "Silahkan pilih kamera ..."
                  : "Tunggu beberapa saat, Kami sedang berupaya menyiapkan model ..."
              }
            />
          </div>
        )}
      </div>

      <div>
        <div className="flex justify-center space-x-2 items-center w-full py-1">
          <div>
            <Button
              title="capture"
              primary
              width="px-2"
              height={"py-0.5"}
              onClick={getCapture}
            />
          </div>
        </div>
        <Gap className="h-5" />
        <TextDinamis title="Hasil Capture Webcam" semibold />
        <Gap className="h-2" />
        <div className="flex justify-center items-center w-full bg-green-100 rounded">
          {capture ? (
            <img
              src={capture}
              alt="capture"
              className="h-[20rem] lg:h-[25rem]"
            />
          ) : null}
        </div>
        <Gap />
      </div>
    </div>
  );
};

export default LiveDetection;
