import { Combobox } from "@headlessui/react";
import React, { useState } from "react";
import { CheckIcon, MiniChevronDown, MiniChevronUp } from "../../../assets";
import { TextDinamis } from "../../atoms";

const coba = [
  { key: 1, value: "your-dataset?" },
  { key: 2, value: "your-keyValue?" },
  { key: 3, value: "your-selectedValue?" },
  { key: 4, value: "your-onChange?" },
];

const CbAutocomplete = ({
  className,
  dataset,
  keyValue,
  selectedValue,
  ...props
}) => {
  const datas = dataset ? dataset : coba;
  const [selected, setSelected] = useState("");
  const [input, setInput] = useState("");
  const rounded = "rounded";

  const searchDatas =
    input === ""
      ? datas
      : datas.filter((data) =>
          data[keyValue ? keyValue : `value`]
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(input.toLowerCase().replace(/\s+/g, ""))
        );

  return (
    <Combobox
      as={`div`}
      className={
        className
          ? `w-full bg-white border ${className} ${rounded} border-gray-300`
          : `z-auto ${rounded} w-full bg-white border border-gray-300`
      }
      value={selectedValue ? selectedValue : selected}
      onChange={setSelected}
      {...props}
    >
      {({ open }) => (
        <div className={`w-full ${rounded}`}>
          <div className={`w-full inline-flex`}>
            <Combobox.Input
              className={`focus:outline-none w-full ${rounded} px-2 py-0.5 md:py-1 text-xs md:text-sm lg:text-base text-gray-500 font-inter`}
              spellCheck={false}
              autoComplete={`off`}
              onChange={(e) => setInput(e.target.value)}
              displayValue={() =>
                selectedValue
                  ? selectedValue[keyValue]
                  : selected[`value`]
                  ? selected[`value`]
                  : ""
              }
            />
            <Combobox.Button className={`mx-1`}>
              {open ? (
                <MiniChevronUp
                  className={`w-4 md:w-5 2xl:w-6 fill-gray-400 hover:fill-gray-500 `}
                />
              ) : (
                <MiniChevronDown
                  className={`w-4 md:w-5 2xl:w-6 fill-gray-400 hover:fill-gray-500 `}
                />
              )}
            </Combobox.Button>
          </div>

          <Combobox.Options
            className={`absolute z-10 w-full bg-white mt-1.5 drop-shadow-md rounded-md py-2 max-h-40 overflow-y-auto `}
          >
            {searchDatas.length === 0 && input !== "" ? (
              <div className={`w-full inline-flex justify-center`}>
                <TextDinamis
                  textColor={`text-red-500`}
                  title={`Kode tidak ditemukan!`}
                />
              </div>
            ) : (
              searchDatas.map((data, index) => (
                <Combobox.Option key={index} value={data}>
                  {({ selected, active }) => (
                    <div
                      className={`flex items-center px-3 py-1  ${
                        active
                          ? "bg-green-500 text-white fill-white"
                          : "text-gray-500"
                      } `}
                    >
                      <span className={`pr-3`}>
                        <CheckIcon
                          className={`h-3 md:h-4 lg:h-5 w-3 md:w-4 lg:w-5 ${
                            selected ? "fill-green-500" : "fill-transparent"
                          } ${
                            selected && active
                              ? "fill-neutral-50"
                              : "fill-green-500"
                          } `}
                        />
                      </span>

                      <span>
                        <TextDinamis
                          title={
                            keyValue
                              ? data[keyValue]
                              : data["value"]
                              ? data["value"]
                              : ""
                          }
                          textLight={selected ? false : true}
                          textColor={active ? `text-white` : `text-gray-500`}
                        />
                      </span>
                    </div>
                  )}
                </Combobox.Option>
              ))
            )}
          </Combobox.Options>
        </div>
      )}
    </Combobox>
  );
};

export default CbAutocomplete;
