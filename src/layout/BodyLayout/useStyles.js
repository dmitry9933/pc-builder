import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  menu: {
    // "& .ant-menu-item-selected": {
    //   background: "#219ebc !important",
    // },
    "& .ant-menu-item": {
      "&:hover": {
        background: "#224160 !important",
      },
      borderRadius: 0,
      marginRight: 0,
      background: "#376b9c !important",

      "& a": {
        borderRadius: "20px",
        padding: "0px 10px",
        color: "white !important",
        fontWeight: 700,
        verticalAlign: "middle",
      },
    },
  },
});

export default useStyles;
