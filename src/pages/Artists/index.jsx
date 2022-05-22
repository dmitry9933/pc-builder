import React from "react";
import { Card, Image, List } from "antd";

import useHooks from "./useHooks";
import useStyles from "./useStyles";
import { placeholderImg } from "../../constants/config";
import InfiniteScroll from "react-infinite-scroll-component";
import { NavLink } from "react-router-dom";

const { Meta } = Card;

const getColumns = () => {
  if (window.innerWidth > 1200) return 4;
  if (window.innerWidth > 900) return 3;
  if (window.innerWidth > 600) return 2;
  return 1;
};


const Artists = () => {
  const classes = useStyles();
  const { artists, loadMore, handleSelectArtist } = useHooks();
  return (
    <div>
      {/* <InfiniteScroll
        dataLength={artists.length} //This is important field to render the next data
        // next={loadMore}
        hasMore={true}
        // loader={<h4>Loading...</h4>}
        // endMessage={
        //   <p style={{ textAlign: "center" }}>
        //     <b>Yay! You have seen it all</b>
        //   </p>
        // }
      > */}
        <List
          grid={{ gutter: 16, column: getColumns() }}
          dataSource={artists || []}
          renderItem={(item) => (
            <List.Item>
              <Card
                key={item.contentId}
                hoverable
                style={{ width: 240, height: 520 }}
                cover={
                  <Image
                    style={{ objectFit: "cover", height: 400 }}
                    alt="no pic"
                    src={item.image}
                    fallback={placeholderImg}
                  />
                }
              >
                <NavLink
                  to={`/artists/${item.contentId}`}
                  onClick={handleSelectArtist(item)}
                >
                  <Meta
                    title={item.artistName}
                    description={`${item.birthDayAsString}${
                      item.deathDayAsString
                        ? " - ".concat(item.deathDayAsString)
                        : ""
                    }`}
                  />
                </NavLink>
              </Card>
            </List.Item>
          )}
        />
      {/* </InfiniteScroll> */}
    </div>
  );
};

export default Artists;
