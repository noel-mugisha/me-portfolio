import { Resizable } from "re-resizable";
import React from "react";
import FakeScroller from "../../components/FakeScroller";
import Form from "./Form";
import FormCode from "./FormCode";

export default function Editor() {
  return (
    <Resizable
      className="h-full  flex-1 text-sm secondary-1 flex flex-col gap-0 overflow-hidden"
      enable={{
        top: false,
        topLeft: false,
        left: false,
        right: true,
        bottom: false,
        bottomLeft: false,
        bottomRight: false,
        topRight: false,
      }}
    >
      <div className="w-full border-bottom h-[47.7px] flex">
        <button className="flex h-full justify-center px-3 items-center border-right hover:bg-transparent hover:o">
          <span>contact_me</span>
          <i className="ri-close-fill ml-14"></i>
        </button>
      </div>
      <div className="w-full h-full flex justify-between">
        <Form />
        <FormCode />
        <FakeScroller />
      </div>
    </Resizable>
  );
}
