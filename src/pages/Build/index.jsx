import { Button, Collapse, Image, Select } from "antd";
import React, { useState } from "react";
import { partTypes, possibleKeys } from "../../constants/config";
import useHooks from "./useHooks";
import useStyles from "./useStyles";

const fbimage =
  "data:image/png;base64,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";
const { Option } = Select;

const getCost = (price) => {
  console.log(price);
  return Number(price.replace(" ", "").replace("UAH", ""));
};

const Build = () => {
  const classes = useStyles();
  const { items } = useHooks();
  const [selectedItems, setSelectedItems] = useState({
    cases: null,
    cpucoolers: null,
    cpu: null,
    memory: null,
    motherboard: null,
    videocard: null,
    storage: null,
    powersupply: null,
  });
  const [displayedItem, setDisplayedItem] = useState({});
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );
  const getBiggestId = () => {
    let id = 1;
    favorites.forEach((e) => {
      if (e.id >= id) {
        id = e.id + 1;
      }
    });
    return id;
  };
  const handleSave = () => {
    // if (favorites.find((e) => e.id === selectedItems?.id)) {
    //   const index = favorites.findIndex((e) => e.id === selectedItems?.id);
    //   const newFav = favorites.map((e) =>
    //     e.id === selectedItems.id ? selectedItems : e
    //   );
    //   localStorage.setItem("favorites", JSON.stringify(newFav));
    //   setFavorites(newFav);
    // } else {
    localStorage.setItem(
      "favorites",
      JSON.stringify([...favorites, { ...selectedItems, id: getBiggestId() }])
    );
    setFavorites([...favorites, { ...selectedItems, id: getBiggestId() }]);
    // }
  };
  const handleDelete = (id) => (event) => {
    const newArr = favorites.filter((e) => e.id !== id);
    localStorage.setItem("favorites", JSON.stringify(newArr));
    setFavorites(newArr);
  };

  // const getNames = () => {
  //   const arr = [];
  //   console.log(
  //     partTypes.map(({ name }) => {
  //       arr.push(...Array.from(Object.keys(mockReduxData[name][0])));
  //     })
  //   );
  //   console.log(Array.from(new Set(arr)));
  // };
  // getNames();

  return (
    <>
      <div
        style={{
          display: "grid",
          marginBottom: 50,
          gridTemplateColumns: "1fr 1fr",
          gap: 20,
        }}
      >
        <div className={classes.body}>
          {partTypes.map(({ name, label }) => (
            <Select
              style={{ width: "100%" }}
              value={selectedItems[name]?._id}
              onMouseEnter={() =>
                setDisplayedItem((old) =>
                  selectedItems[name] ? selectedItems[name] : old
                )
              }
              placeholder={`Please select ${label}`}
              onChange={(value) =>
                setSelectedItems((old) => ({
                  ...old,
                  [name]: items[name].find((element) => element._id === value),
                }))
              }
            >
              {items?.[name]?.map((item) => (
                <Option
                  key={item._id}
                  value={item._id}
                  onMouseEnter={() => setDisplayedItem(item)}
                >
                  {item.name}
                </Option>
              ))}
            </Select>
          ))}
        </div>
        <div className={classes.body}>
          <Image src={displayedItem?.image} fallback={fbimage} />
          {/* <div>{displayedItem?.name}</div>
          {displayedItem?.displayName && (
            <div>{displayedItem?.displayName}</div>
          )}
          <div>{displayedItem?.price}</div> */}
          <Collapse
            style={{
              width: "100%",
              marginTop: 10,
              overflowY: "auto",
              maxHeight: "30vh",
            }}
            defaultActiveKey={["0"]}
          >
            {possibleKeys.map((key) =>
              displayedItem[key] ? (
                <Collapse.Panel
                  header={
                    <span style={{ textTransform: "capitalize" }}>
                      {key?.replace("_", " ")}
                    </span>
                  }
                  key={key}
                >
                  <div style={{ textAlign: "left", width: "100%" }}>
                    {displayedItem[key]}
                  </div>
                </Collapse.Panel>
              ) : null
            )}
          </Collapse>
        </div>
      </div>
      <div className={classes.summary}>
        <div
          style={{
            width: 300,
            height: 100,
            backgroundColor: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          Total Cost{" "}
          {Array.from(Object.keys(selectedItems)).reduce((prev, current) => {
            console.log(prev, current);
            if (prev === "cases") {
              return (
                getCost(selectedItems["cases"]?.price || "", current) +
                getCost(selectedItems[current]?.price || "", current)
              );
            }
            return (
              Number(prev || 0) +
              getCost(selectedItems[current]?.price || "", current)
            );
          })}{" "}
          UAH
          <Button onClick={handleSave}>Save</Button>
          {/* set selected parts empty object */}
          <Button
            onClick={() =>
              setSelectedItems({
                cases: null,
                cpucoolers: null,
                cpu: null,
                memory: null,
                motherboard: null,
                videocard: null,
                storage: null,
                powersupply: null,
              })
            }
          >
            Clear
          </Button>
          {/* <Button onClick={() => window.location.reload(false)}>Clear</Button> */}
        </div>
        {Array.from(Object.keys(selectedItems)).map((key) => {
          return key === "id" ? null : (
            <div>
              {" "}
              <Image
                fallback={fbimage}
                style={{ width: 100, height: 100 }}
                src={
                  selectedItems[key]?.image
                    ? selectedItems[key]?.image
                    : fbimage
                }
              />
            </div>
          );
        })}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        <span style={{ fontWeight: "bold" }}>Saved</span>
        <div style={{ display: "flex", flexDirection: "row", gap: 10 }}>
          {favorites.map((item, i) => {
            return (
              <div
                style={{
                  background: "white",
                  borderRadius: 15,
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                  width: 100,
                  height: 100,
                  textAlign: "center",
                  justifyContent: "space-between",
                }}
              >
                {item.id}
                <div>
                  {" "}
                  <Button onClick={() => setSelectedItems(item)}>
                    Load
                  </Button>{" "}
                  <Button onClick={handleDelete(item.id)}>Delete</Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Build;
