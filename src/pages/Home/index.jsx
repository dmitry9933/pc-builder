import React from "react";
import useHooks from "./useHooks";

import useStyles from "./useStyles";

const Home = () => {
  const classes = useStyles();
  const {items} = useHooks()
  return <p className={classes.hello}>hello</p>;
};

export default Home;

// cases: (8) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
// cpu: (15) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
// cpucoolers: (10) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
// didInvalidate: true
// didInvalidateItem: true
// isCreating: false
// isDeleting: false
// isFetching: false
// isFetchingItem: false
// isUpdating: false
// item: null
// items: []
// lastUpdated: 0
// lastUpdatedItem: 0
// memory: (10) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
// motherboard: (10) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
// powersupply: (10) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
// storage: (11) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
// videocard: (10) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}