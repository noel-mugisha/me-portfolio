import React from "react";
import { useSelector } from "react-redux";
import Brackets from "../../components/Brackets";
import ImportsColorizer from "../../components/ImportsColorizer";
import Keyword from "../../components/Keyword";
import Literal from "../../components/Literal";
import PropertiesColorizer from "../../components/PropertiesColorizer";
import StringColorizer from "../../components/StringColorizer";
import Symbol from "../../components/Symbol";
import moment from "moment";

export default function FormCode() {
  const [newContent, setnewContent] = React.useState();
  var content;
  const contentRef = React.useRef();
  let form = useSelector((state) => state.contactForm);

  content = (
    <p className="text-xs h-fit secondary-1" ref={contentRef}>
      <p>
        <Keyword keyword={"const"} />
        <Literal literal={" button"} />
        <Symbol symbol={" = "} />
        <ImportsColorizer imported={"document"} />
        <Symbol symbol={"."} />
        <PropertiesColorizer property={"querySelector"} />
        <Brackets brackets={"("} />
        <StringColorizer onequote string={"#sendBtn"} />
        <Brackets brackets={")"} />
        <Symbol symbol={";"} />
      </p>
      <br />
      <p>
        <Keyword keyword={"const "} />
        <Literal literal={" message"} />
        <Symbol symbol={" = "} />
        <Brackets brackets={"{"} second />
      </p>
      <div className="ml-7">
        <p>
          <PropertiesColorizer property={"name"} />
          <Symbol symbol={": "} />
          <StringColorizer string={form.name} />
          <Symbol symbol={","} />
        </p>
        <p>
          <PropertiesColorizer property={"email"} />
          <Symbol symbol={": "} />
          <StringColorizer string={form.email} />
          <Symbol symbol={","} />
        </p>
        <p>
          <PropertiesColorizer property={"message"} />
          <Symbol symbol={": "} />
          <StringColorizer string={form.message} />
          <Symbol symbol={","} />
        </p>
        <p>
          <PropertiesColorizer property={"date"} />
          <Symbol symbol={": "} />
          <StringColorizer string={moment(new Date()).format("ddd DD MMM")} />
          <Symbol symbol={","} />
        </p>
      </div>
      <p></p>
      <p>
        <Brackets brackets={"}"} second />
      </p>
      <br />
      <p>
        <Literal literal={"button"} />
        <Symbol symbol={"."} />
        <PropertiesColorizer property={"addEventListener"} />
        <Brackets brackets={"("} />
        <StringColorizer string={"click"} onequote />
        <Symbol symbol={", "} />
        <Brackets brackets={"("} second />
        <Brackets brackets={")"} second />
        <Symbol symbol={" => "} />
        <Brackets brackets={"{"} second />
      </p>
      <p className="pl-7">
        <Literal literal={"form"} />
        <Symbol symbol={"."} />
        <PropertiesColorizer property={"send"} />
        <Brackets brackets={"("} />
        <Literal literal={"message"} />
        <Brackets brackets={")"} />
        <Symbol symbol={";"} />
      </p>
      <p>
        <Brackets brackets={"}"} second />
        <Brackets brackets={")"} />
      </p>
      <span className=" invisible">--</span>
    </p>
  );
  React.useEffect(() => {
    let p_content = contentRef.current;
    let p_content_height = p_content.offsetHeight; // 12 for padding top
    let p_content_lineHeight = Number(
      getComputedStyle(p_content).lineHeight.substring(0, 2)
    );
    let lines = Math.ceil(p_content_height / p_content_lineHeight);
    setnewContent(
      <p className="w-4 text-xs h-full mr-7">
        {[...Array(lines).keys()].map((number, i) => (
          <span key={i}>{number + 1} </span>
        ))}
      </p>
    );
    return () => {};
  }, [contentRef]);
  return (
    <div className="h-full w-7/12 p-10 flex border-left">
      {newContent}
      {content}
    </div>
  );
}
