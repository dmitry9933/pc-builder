import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  hello: {
    color: "blue",
  },
  header: {
    background: "blue",
  },
  body: {
    background: "yellow",
  },
  carouselWrapper: {
    "& h3": {
      "& img": {
        transition: "opacity 1s",
        opacity: 1,
      },
      "& div": {
        transition: "opacity 1s",
        opacity: 0,
        position: "relative",
        top: "-66%",
        zIndex: 10000,
      },
      "&:hover": {
        "& img": {
          opacity: 0.5,
        },
        "& div": {
          opacity: 1,
        },
      },
    },
  },
  blurCover: {
    // display: "none",
    "&:hover": {
      // display: "block",
    },
  },
});

export default useStyles;
