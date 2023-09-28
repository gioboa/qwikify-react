/* eslint-disable qwik/jsx-img */
/** @jsxImportSource react */

import { qwikify$ } from "@builder.io/qwik-react";
import { ButtonBase, Slider, Box } from "@mui/material";
import Button from "@mui/material/Button";

export const MyButton = qwikify$(ButtonBase);
export const MySlider = qwikify$(Slider);

const Island1Button = ({ onClick }: { onClick: () => void }) => {
  console.log("Island_1: React <Button/> Render");
  return (
    <Button variant="contained" size="large" onClick={onClick}>
      Increment
    </Button>
  );
};

function Display({ count }: { count: number }) {
  console.log("Island_2: React <Display count=" + count + "/> Render");
  return <h1 className="react">Count: {count}</h1>;
}

export const Island_1 = qwikify$(Island1Button, { eagerness: "hover" });
export const Island_2 = qwikify$(Display);
