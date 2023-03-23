import { createStyles, SegmentedControl, rem } from "@mantine/core";
import * as React from "react";
import { MyContext } from "../App";
const useStyles = createStyles((theme) => ({
  root: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.white,
    boxShadow: theme.shadows.md,
    border: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[1]
    }`,
  },

  indicator: {
    backgroundImage: theme.fn.gradient({ from: "#865DFF", to: "black" }),
  },

  control: {
    border: "0 !important",
  },

  label: {
    "&, &:hover": {
      "&[data-active]": {
        color: theme.white,
      },
    },
  },
}));

export default function File() {
  const {
    urlobj,
    seturlobj,
    open,
    setOpen,
  } = React.useContext(MyContext);
  const setdocs = () => {
    const currentset = document.querySelector(
      ".mantine-SegmentedControl-controlActive .mantine-SegmentedControl-input"
    )?.value;
    const doc = document.querySelector(
      ".mantine-SegmentedControl-controlActive"
    );
    console.log(doc);
    doc?.addEventListener("click", () => {
      setOpen(!open);
      const updatedObject = Object.keys(urlobj).reduce((result, key) => {
        if (key === currentset) {
          result[key] = true;
        } else {
          result[key] = false;
        }
        return result;
      }, {});
      seturlobj(updatedObject);
      console.log(urlobj);
    });
  };
  // doc.addEventListener('click',()=>{
  //   console.log(doc)
  // })
  const { classes } = useStyles();
  return (
    <SegmentedControl
      onClick={setdocs}
      radius="xl"
      size="xl"
      style={{ display: "flex", flexWrap: "wrap" }}
      data={["getreference", "pdfmerge", "scannedpdf", "extractimage"]}
      classNames={classes}
    />
  );
}
