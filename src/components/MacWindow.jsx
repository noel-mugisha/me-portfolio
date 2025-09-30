import React from "react";

export default function MacImgWindow({ img, img_name, styles }) {
  return (
    <div className={" flex flex-col justify-center " + styles}>
      <div className="w-100 h-9 px-4 primary-bg-2 flex justify-start items-center gap-1.5 rounded-tl-lg rounded-tr-lg bg-white">
        <div className=" rounded-full h-2 w-2 bg-red-600"></div>
        <div className=" rounded-full h-2 w-2 bg-yellow-600"></div>
        <div className=" rounded-full h-2 w-2 bg-green-600"></div>
        <p className="text-xs ml-7 secondary-1">
          {img_name.toLowerCase().split(" ").join("_")}.png
        </p>
      </div>
      <div className=" border-secondary rounded-bl-lg rounded-br-lg w-100 h-64 flex justify-center">
        <img src={img} alt={img_name} className="h-full" draggable={false} />
      </div>
    </div>
  );
}
