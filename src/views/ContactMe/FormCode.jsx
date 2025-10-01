import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import Keyword from "../../components/Keyword";
import Literal from "../../components/Literal";
import PropertiesColorizer from "../../components/PropertiesColorizer";
import StringColorizer from "../../components/StringColorizer";
import Symbol from "../../components/Symbol";
import ImportsColorizer from "../../components/ImportsColorizer";
import Brackets from "../../components/Brackets";
import moment from "moment";

export default function FormCode() {
  const form = useSelector((state) => state.contactForm);
  const [displayedCode, setDisplayedCode] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  const typingTimeoutRef = useRef(null);

  const codeSkeleton = [
    { type: 'keyword', text: 'const' },
    { type: 'space', text: ' ' },
    { type: 'literal', text: 'button' },
    { type: 'space', text: ' ' },
    { type: 'symbol', text: '=' },
    { type: 'space', text: ' ' },
    { type: 'import', text: 'document' },
    { type: 'symbol', text: '.' },
    { type: 'property', text: 'querySelector' },
    { type: 'bracket', text: '(' },
    { type: 'string', text: '#submit-btn', onequote: true },
    { type: 'bracket', text: ')' },
    { type: 'symbol', text: ';' },
    { type: 'newline', text: '\n' },
    { type: 'newline', text: '\n' },
    { type: 'keyword', text: 'const ' },
    { type: 'literal', text: 'message' },
    { type: 'space', text: ' ' },
    { type: 'symbol', text: '=' },
    { type: 'space', text: ' ' },
    { type: 'bracket', text: '{', second: true },
    { type: 'newline', text: '\n' },
    { type: 'indent', text: '  ' },
    { type: 'property', text: 'name' },
    { type: 'symbol', text: ': ' },
    { type: 'dynamic', field: 'name' }, // dynamic field
    { type: 'symbol', text: ',' },
    { type: 'newline', text: '\n' },
    { type: 'indent', text: '  ' },
    { type: 'property', text: 'email' },
    { type: 'symbol', text: ': ' },
    { type: 'dynamic', field: 'email' }, // dynamic field
    { type: 'symbol', text: ',' },
    { type: 'newline', text: '\n' },
    { type: 'indent', text: '  ' },
    { type: 'property', text: 'message' },
    { type: 'symbol', text: ': ' },
    { type: 'dynamic', field: 'message' }, // dynamic field
    { type: 'symbol', text: ',' },
    { type: 'newline', text: '\n' },
    { type: 'indent', text: '  ' },
    { type: 'property', text: 'date' },
    { type: 'symbol', text: ': ' },
    { type: 'dynamic', field: 'date' }, // dynamic date field
    { type: 'newline', text: '\n' },
    { type: 'bracket', text: '}', second: true },
    { type: 'symbol', text: ';' },
    { type: 'newline', text: '\n' },
    { type: 'newline', text: '\n' },
    { type: 'literal', text: 'button' },
    { type: 'symbol', text: '.' },
    { type: 'property', text: 'addEventListener' },
    { type: 'bracket', text: '(' },
    { type: 'string', text: 'click', onequote: true },
    { type: 'symbol', text: ', ' },
    { type: 'bracket', text: '()', second: true },
    { type: 'space', text: ' ' },
    { type: 'symbol', text: '=>' },
    { type: 'space', text: ' ' },
    { type: 'bracket', text: '{', second: true },
    { type: 'newline', text: '\n' },
    { type: 'indent', text: '  ' },
    { type: 'literal', text: 'form' },
    { type: 'symbol', text: '.' },
    { type: 'property', text: 'send' },
    { type: 'bracket', text: '(' },
    { type: 'literal', text: 'message' },
    { type: 'bracket', text: ')' },
    { type: 'symbol', text: ';' },
    { type: 'newline', text: '\n' },
    { type: 'bracket', text: '}', second: true },
    { type: 'bracket', text: ')' },
    { type: 'symbol', text: ';' },
  ];

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);

    return () => clearInterval(cursorInterval);
  }, []);

  
  useEffect(() => {
    setDisplayedCode("");
    setIsTyping(true);

    let currentIndex = 0;
    let currentCharCount = 0;

    const typeNextCharacter = () => {
      if (currentIndex < codeSkeleton.length) {
        const currentToken = codeSkeleton[currentIndex];
        const tokenText = currentToken.text || "";

        if (currentToken.type === "dynamic") {
          currentIndex++;
          typeNextCharacter();
          return;
        }

        if (currentCharCount < tokenText.length) {
          setDisplayedCode(prev => prev + tokenText[currentCharCount]);
          currentCharCount++;

          let delay;
          const currentChar = tokenText[currentCharCount - 1];

          if (currentChar === '\n') {
            delay = Math.random() * 200 + 150;
          } else if (';,{}'.includes(currentChar)) {
            delay = Math.random() * 150 + 100;
          } else if (currentChar === ' ') {
            delay = Math.random() * 80 + 40;
          } else if ('()[]'.includes(currentChar)) {
            delay = Math.random() * 100 + 50;
          } else {
            delay = Math.random() * 120 + 30;
          }

          if (Math.random() < 0.08) {
            delay += Math.random() * 300 + 200;
          }

          typingTimeoutRef.current = setTimeout(typeNextCharacter, delay);
        } else {
          currentIndex++;
          currentCharCount = 0;
          typeNextCharacter();
        }
      } else {
        setIsTyping(false);
      }
    };

    typeNextCharacter();

    return () => {
      if (typingTimeoutRef.current) {
        clearTimeout(typingTimeoutRef.current);
      }
    };
  }, []); 

  
  const renderCodeWithHighlighting = () => {
    let renderedChars = 0;
    const elements = [];
    let key = 0;

    for (let i = 0; i < codeSkeleton.length; i++) {
      const token = codeSkeleton[i];
      const tokenText = token.text || "";

      if (token.type === "dynamic") {
        let dynamicValue = "";
        if (token.field === "name") dynamicValue = form.name;
        if (token.field === "email") dynamicValue = form.email;
        if (token.field === "message") dynamicValue = form.message;
        if (token.field === "date") {
          dynamicValue = moment(new Date()).format("ddd DD MMM"); 
        }

        elements.push(
          <StringColorizer key={key++} string={dynamicValue} onequote={false} />
        );
        continue;
      }

      const tokenLength = tokenText.length;
      const charsToShow = Math.min(tokenLength, displayedCode.length - renderedChars);

      if (charsToShow <= 0) break;

      const visibleText = tokenText.substring(0, charsToShow);
      renderedChars += charsToShow;

      if (token.type === 'keyword') {
        elements.push(<Keyword key={key++} keyword={visibleText} />);
      } else if (token.type === 'literal') {
        elements.push(<Literal key={key++} literal={visibleText} />);
      } else if (token.type === 'property') {
        elements.push(<PropertiesColorizer key={key++} property={visibleText} />);
      } else if (token.type === 'string') {
        elements.push(<StringColorizer key={key++} string={visibleText} onequote={token.onequote} />);
      } else if (token.type === 'symbol') {
        elements.push(<Symbol key={key++} symbol={visibleText} />);
      } else if (token.type === 'import') {
        elements.push(<ImportsColorizer key={key++} imported={visibleText} />);
      } else if (token.type === 'bracket') {
        elements.push(<Brackets key={key++} brackets={visibleText} second={token.second} />);
      } else if (token.type === 'newline') {
        elements.push(<br key={key++} />);
      } else if (token.type === 'space' || token.type === 'indent') {
        elements.push(<span key={key++}>{visibleText.replace(/ /g, "\u00a0")}</span>);
      }

      if (renderedChars >= displayedCode.length) break;
    }

    return elements;
  };

  return (
    <div className="h-full w-7/12 p-10 flex border-left text-xs secondary-1">
      {/* Line Numbers Column */}
      <div className="mr-4 text-right select-none leading-[1.4]">
        {[...Array(13).keys()].map((n) => (
          <div key={n}>{n + 1}</div>
        ))}
      </div>

      {/* Code Block with Typing Effect */}
      <div className="h-fit leading-[1.4] relative whitespace-pre">
        {renderCodeWithHighlighting()}
        {/* Blinking Cursor */}
        {isTyping && (
          <span 
            className={`inline-block w-[1px] h-3 bg-white ${showCursor ? 'opacity-100' : 'opacity-0'}`}
            style={{ transition: 'opacity 0.1s' }}
          />
        )}
      </div>
    </div>
  );
}
