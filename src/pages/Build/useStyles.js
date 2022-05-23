import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  body: {
    display: "flex",
    alignItems: "center",
    minHeight: 500,
    flexDirection: "column",
    // "& > div": {
    //   // flexGrow: 1,
    // },
  },
  summary: {
    minHeight: 280,
    display: "flex",
    flexWrap: "wrap",
    gap: 10,
    "& > div": {
      overflow: "hidden",
      borderRadius: 15,
      flexShrink: 0,
      height: 100,
    },
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
