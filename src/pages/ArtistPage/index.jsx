import React from "react";
import { Card, Image, List, Collapse } from "antd";

import useHooks from "./useHooks";
import useStyles from "./useStyles";
import { placeholderImg } from "../../constants/config";
import InfiniteScroll from "react-infinite-scroll-component";
import { NavLink } from "react-router-dom";
import WorksList from "./components/WorksList";

const { Meta } = Card;
const { Panel } = Collapse;

const getColumns = () => {
  if (window.innerWidth > 1200) return 4;
  if (window.innerWidth > 900) return 3;
  if (window.innerWidth > 600) return 2;
  return 1;
};

const ArtistPage = () => {
  const classes = useStyles();
  const { artist } = useHooks();
  return (
    <div>
      <Card
        key={artist?.contentId}
        hoverable
        style={{}}
        cover={
          <Image
            style={{}}
            alt="no pic"
            src={artist?.image}
            fallback={placeholderImg}
          />
        }
      >
        <NavLink
          to={`/artists/${artist?.contentId}`}
          // onClick={handleSelectArtist(artist)}
        >
          <Meta
            title={artist?.artistName}
            description={
              <>
                <Collapse defaultActiveKey={["0"]}>
                  <Panel header="General Info" key="1">
                    <p>
                      <b>Date Lived:</b>{" "}
                      {`${artist?.birthDayAsString}${
                        artist?.deathDayAsString
                          ? " - ".concat(artist?.deathDayAsString)
                          : ""
                      }
                `}
                    </p>
                    <p>
                      <b>Gender:</b> {artist?.gender || "-"}
                    </p>
                    <p>
                      <b>Periods Of Work:</b> {artist?.periodsOfWork || "-"}
                    </p>
                    <p>
                      <b> Active Years: </b>
                      {artist?.activeYearsStart}-{artist?.activeYearsCompletion}
                    </p>
                  </Panel>
                  {artist?.biography && (
                    <Panel header="Biography" key="2">
                      <p>{artist?.biography}</p>
                    </Panel>
                  )}
                  {artist?.series && (
                    <Panel header="Series" key="3">
                      <p>{artist?.series}</p>
                    </Panel>
                  )}
                  {artist?.themes && (
                    <Panel header="Themes" key="4">
                      <p>{artist?.themes}</p>
                    </Panel>
                  )}
                </Collapse>
              </>
            }
          />
        </NavLink>
      </Card>
      <WorksList artist={artist} />
    </div>
  );
};

export default ArtistPage;
