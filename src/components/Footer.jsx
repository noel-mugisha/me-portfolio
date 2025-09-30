import React from "react";
import { my_data } from "../data";
import "../styles/footer.scss";
import moment from "moment";

export default function Footer() {
  const [time, settime] = React.useState(new Date());
  React.useEffect(() => {
    setInterval(() => {
      settime(new Date());
    }, 1000);

    return () => {};
  }, []);

  return (
    <footer className="absolute bottom-0 left-0 w-full flex justify-between px-0 h-8 items-center text-xs secondary-1 primary-bg-2">
      <div className="h-full flex items-center">
        <span className="h-full px-4 items-center flex">find me on: </span>
        <a
          href={my_data.links.linkedin}
          target="_blank"
          className="h-full px-3 connect-link flex justify-center gap-1 items-center hover:text-white"
        >
          <i className="ri-linkedin-fill text-md"></i>
        </a>
        <a
          href={my_data.links.instagram}
          target="_blank"
          className="h-full px-3 connect-link flex justify-center gap-1 items-center hover:text-white"
        >
          <i className="ri-instagram-fill text-md"></i>
        </a>
        <a
          href={my_data.links.facebook}
          target="_blank"
          className="h-full px-3 connect-link flex justify-center gap-1 items-center hover:text-white"
        >
          <i className="ri-facebook-fill text-md"></i>
        </a>
      </div>
      <div>{moment(time).format("hh:mm:ss")}</div>
      <div className="flex h-full">
        <a
          href={my_data.links.github}
          target="_blank"
          className="px-7 hover:text-white flex justify-center gap-1 items-center h-full border-left"
        >
          @{my_data.github}
          <i className="ri-github-fill text-lg"></i>
        </a>
      </div>
    </footer>
  );
}
