import { Resizable } from "re-resizable";
import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import Brackets from "../../components/Brackets";
import FakeScroller from "../../components/FakeScroller";
import Keyword from "../../components/Keyword";
import Literal from "../../components/Literal";
import PropertiesColorizer from "../../components/PropertiesColorizer";
import StringColorizer from "../../components/StringColorizer";
import Symbol from "../../components/Symbol";
import { my_data } from "../../data";
import ImportsColorizer from "../../components/ImportsColorizer";

export default function Editor() {
  const active_persInfo_state = useSelector((state) => state.active_persInfo);
  const education_level_state = useSelector((state) => state.education_level);
  var active_panel;
  var content;
  const bioRef = useRef();
  switch (active_persInfo_state) {
    case 0:
      active_panel = "bio";
      content = (
        <p className=" h-fit" ref={bioRef}>
          <br />
          About me <br />
          <br />
          {my_data.bio}
          <br />
          <span className=" invisible">--</span>
        </p>
      );
      break;
    case 1:
      active_panel = "interests";
      content = (
        <p className="h-fit " ref={bioRef}>
          <p>
            <Keyword keyword={"const"} />
            <Literal literal={" interests"} />
            <Symbol symbol={": "} />
            <Keyword keyword={"string"} />
            <Brackets brackets={"[]"} />
            <Symbol symbol={" = "} />
            <Brackets brackets={"["} second={true} />
          </p>
          {my_data.interests.map((interest, i) => (
            <p className="ml-7" key={i}>
              <StringColorizer string={interest} />
              <Symbol symbol={","} />
              <br />
            </p>
          ))}
          <Brackets brackets={"]"} second={true} />
          <Symbol symbol={";"} />
        </p>
      );
      break;
    case 2:
      active_panel = my_data.education[education_level_state].level
        .toLowerCase()
        .split(" ")
        .join("-");
      content = (
        <p className="h-fit whitespace-nowrap" ref={bioRef}>
          <p className="">
            <Keyword keyword={"import "} />
            <Brackets brackets={"{ "} second={true} />
            <ImportsColorizer imported={"EducationSchema "} />
            <Brackets brackets={"} "} second={true} />
            <Keyword keyword={"from "} />
            <StringColorizer string={"./EducationSchema"} onequote />
            <Symbol symbol={";"} />
          </p>
          <br />
          <p>
            <Keyword keyword={"const "} />
            <Literal
              literal={
                "my_" +
                my_data.education[education_level_state].level
                  .toLowerCase()
                  .split(" ")
                  .join("_")
              }
            />
            <Symbol symbol={":"} />
            <ImportsColorizer imported={" EducationSchema "} />
            <Symbol symbol={" = "} />
            <Brackets brackets={"{"} />
          </p>
          <div className="ml-7">
            <p>
              <PropertiesColorizer property={"level"} />
              <Symbol symbol={": "} />
              <StringColorizer
                string={my_data.education[education_level_state].level}
              />
              <Symbol symbol={","} />
            </p>
            <p>
              <PropertiesColorizer property={"school"} />
              <Symbol symbol={": "} />
              <StringColorizer
                string={my_data.education[education_level_state].school}
              />
              <Symbol symbol={","} />
            </p>
            <p>
              <PropertiesColorizer property={"duration"} />
              <Symbol symbol={": "} />
              <StringColorizer
                string={
                  my_data.education[education_level_state].to -
                  my_data.education[education_level_state].from +
                  1 +
                  " years"
                }
              />
              <Symbol symbol={","} />
            </p>
            <p>
              <PropertiesColorizer property={"fromTo"} />
              <Symbol symbol={": "} />
              <StringColorizer
                string={
                  my_data.education[education_level_state].from +
                  " - " +
                  my_data.education[education_level_state].to
                }
              />
              <Symbol symbol={","} />
            </p>
            <p>
              <PropertiesColorizer property={"courses"} />
              <Symbol symbol={": "} />
              <Brackets brackets={"["} second={true} />
            </p>
            {my_data.education[education_level_state].courses.map((course) => (
              <p className="pl-6">
                <StringColorizer string={course} />
                <Symbol symbol={","} />
              </p>
            ))}
            <p>
              <Brackets brackets={"]"} second={true} />
              <Symbol symbol={","} />
            </p>
          </div>
          <p>
            <Brackets brackets={"}"} />
            <Symbol symbol={";"} />
          </p>
        </p>
      );
      break;
    default:
      active_panel = "";
  }
  const [newContent, setnewContent] = useState();
  const [comments, setcomments] = useState();
  useEffect(() => {
    let p_bio = bioRef.current;
    let p_bio_height = p_bio.offsetHeight; // 12 for padding top
    let p_bio_lineHeight = Number(
      getComputedStyle(p_bio).lineHeight.substring(0, 2)
    );
    let lines = Math.ceil(p_bio_height / p_bio_lineHeight);
    setnewContent(
      <p className="w-4 h-full mr-7">
        {[...Array(lines).keys()].map((number, i) => (
          <span key={i}>{number + 1} </span>
        ))}
      </p>
    );
    if (active_panel === "bio") {
      setcomments(
        <p className="h-full mr-1.5">
          <span>/**</span>
          <br />
          {[...Array(lines - 2).keys()].map((number, i) => (
            <>
              <span key={i}>&nbsp;*&nbsp;</span>
              <br />
            </>
          ))}
          <span>&nbsp;*/</span>
        </p>
      );
    }
    return () => {};
  }, [active_panel, bioRef.current]);
  return (
    <Resizable
      className="h-full border-right text-sm secondary-1 flex-col gap-0 overflow-y-auto no-scrollbar"
      defaultSize={{ width: "55%" }}
      minWidth={"45%"}
      maxWidth={"60%"}
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
      <div className="w-full border-bottom h-[43.7px] flex">
        <button className="flex h-full justify-center px-3 items-center border-right hover:bg-transparent text-sm">
          <span>{active_panel}.tsx</span>
          <i className="ri-close-fill ml-14"></i>
        </button>
      </div>
      <div className="w-full h-full flex flex-1 justify-between">
        <div className="px-8 pr-0 pt-3 w-11/12 flex">
          {newContent}
          {active_panel === "bio" && comments}
          {content}
        </div>
        <FakeScroller />
      </div>
    </Resizable>
  );
}
