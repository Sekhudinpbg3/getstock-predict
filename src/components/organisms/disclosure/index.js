import { Disclosure, Transition } from "@headlessui/react";
import React from "react";
import { TextDinamis } from "../../atoms";
import { MiniChevronDown, MiniChevronUp } from "../../../assets";

const DisclosureCustom = ({ listData }) => {
  const data = listData
    ? listData !== ""
      ? listData
      : ""
    : {
        "Disclosure 1": (
          <TextDinamis title={"Your disclosure value 1"} textLight />
        ),
        "Disclosure 2": (
          <TextDinamis title={"Your disclosure value 2"} textLight />
        ),
      };
  const btnStyle = "bg-green-200 lg:hover:opacity-80 rounded py-1 px-2 ";
  const lengthData = Object.keys(data).length - 1;

  return (
    <div className={`w-full p-2`}>
      {data === null || data === ""
        ? "render jika kosong"
        : Object.keys(data).map((menuDisclosure, index) => (
            <Disclosure key={index}>
              {({ open }) => (
                <>
                  <Disclosure.Button
                    className={
                      index === lengthData
                        ? `flex w-full justify-between ${btnStyle}`
                        : open
                        ? `flex w-full justify-between ${btnStyle} mb-1`
                        : `flex w-full justify-between ${btnStyle} mb-3`
                    }
                  >
                    <TextDinamis
                      title={menuDisclosure}
                      semibold={true}
                      textjustify
                      textColor={`text-green-500`}
                    />
                    {open ? (
                      <MiniChevronUp
                        className={`w-4 md:w-5 2xl:w-6 fill-green-500`}
                      />
                    ) : (
                      <MiniChevronDown
                        className={`w-4 md:w-5 2xl:w-6 fill-green-500`}
                      />
                    )}
                  </Disclosure.Button>
                  <Transition
                    show={open}
                    enter="transition duration-100 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-75 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                  >
                    <Disclosure.Panel
                      className={
                        index === lengthData
                          ? `py-1 px-2 mt-1`
                          : `py-1 px-2 mb-3`
                      }
                    >
                      {data[menuDisclosure]}
                    </Disclosure.Panel>
                  </Transition>
                </>
              )}
            </Disclosure>
          ))}
    </div>
  );
};

export default DisclosureCustom;
