import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import contactForm from "../../reducers/contactForm";

export default function Form() {
  let dispatch = useDispatch();
  let form = useSelector((state) => state.contactForm);
  const [formActive, setformActive] = React.useState(true);
  let submitBtn = useRef(null);

  let handleChange = (name, val) => {
    dispatch(contactForm.update({ ...form, [name]: val }));
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    submitBtn.current.disabled = true;
    setTimeout(() => setformActive(false), 1000);
  };
  return (
    <div className="h-full w-5/12 flex justify-center items-center flex-col">
      {formActive ? (
        <form className="w-8/12" onSubmit={(e) => handleSubmit(e)}>
          <div className="flex flex-col gap-2.5 my-4 w-full">
            <label className=" w-fit" htmlFor="name">
              _name:
            </label>
            <input
              className="input-bg input-border rounded-md h-10 text-[#465E77] w-full "
              required
              type="text"
              id="name"
              onChange={(e) => handleChange("name", e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2.5 my-4 w-full">
            <label className=" w-fit" htmlFor="email">
              _email:
            </label>
            <input
              className="input-bg input-border rounded-md h-10 text-[#465E77] w-full "
              required
              type="email"
              id="email"
              onInput={(e) => handleChange("email", e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2.5 my-4 w-full">
            <label className=" w-fit" htmlFor="message">
              _message:
            </label>
            <textarea
              required
              className="input-bg pt-3 input-border pr-3 rounded-md w-full h-28 text-[#465E77] max-h-36 min-h-[80px]"
              name="message"
              id="message"
              onInput={(e) => handleChange("message", e.target.value)}
            ></textarea>
          </div>
          <div className="flex flex-col gap-2.5 my-4 w-full items-start">
            <button
              type="submit"
              className="btn-default font-medium px-[14px] py-[10px] rounded-lg text-xs mt-2"
              ref={submitBtn}
            >
              submit-message
            </button>
          </div>
        </form>
      ) : (
        <div className="text-center w-9/12">
          <h2 className="text-xl secondary-white font-normal">Thank you! 👌</h2>
          <p className="secondary-1 mt-2">
            Your message has been received. You will recieve your answer really
            soon!
          </p>
          <button
            className="btn-default font-medium px-[13px] py-[8px] rounded-lg text-xs mt-5"
            onClick={(e) => setformActive(true)}
          >
            send-new-message
          </button>
        </div>
      )}
      <div className=" h-20"></div>
    </div>
  );
}
