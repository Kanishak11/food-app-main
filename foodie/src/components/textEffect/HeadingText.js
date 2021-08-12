import React from "react";
import TextTransition, { presets } from "react-text-transition";
import './HeadingText.css'


const HeadingText = (props) => {
  TEXTS=[...props.data]
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(() =>
      setIndex(index => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <h1 className="text">
      <TextTransition
        text={ TEXTS[index % TEXTS.length] }
        springConfig={ presets.wobbly }
      />
    </h1>
  );
};

export default HeadingText;