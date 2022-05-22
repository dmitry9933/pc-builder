import { Card, Image, List, Modal, Spin } from "antd";
import Meta from "antd/lib/card/Meta";
import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { NavLink } from "react-router-dom";
import { placeholderImg } from "../../../../constants/config";
import useHooks from "./useHooks";

const getColumns = () => {
  if (window.innerWidth > 1200) return 4;
  if (window.innerWidth > 900) return 3;
  if (window.innerWidth > 600) return 2;
  return 1;
};

const WorksList = ({ artist }) => {
  const { works, work, loadMore, handleSelectWork, isLoading } = useHooks({
    artist,
  });
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = (id) => () => {
    setIsModalVisible(true);
    handleSelectWork(id);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };
  return (
    <div>
      <h3 style={{ margin: "30px 0px" }}>Works: </h3>
      <List
        grid={{ gutter: 16, column: getColumns() }}
        dataSource={works || []}
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
              <Meta
                onClick={showModal(item.contentId)}
                title={item?.title}
                description={
                  <>
                    <p>
                      <b>Artist: </b> {item?.artistName || "-"}
                    </p>
                    <p>
                      <b> Date Completed: </b>
                      {item?.completitionYear || "-"}
                    </p>
                  </>
                }
              />
            </Card>
          </List.Item>
        )}
      />
      <Modal
        title={work?.title || "Details"}
        visible={isModalVisible}
        footer={null}
        onCancel={closeModal}
      >
        <Spin spinning={isLoading}>
          {work?.artistName && (
            <p>
              <b>Artist: </b>
              {work?.artistName}
            </p>
          )}
          {work?.auction && (
            <p>
              <b>Auction: </b>
              {work?.auction}
            </p>
          )}{" "}
          {work?.completitionYear && (
            <p>
              <b>Completition Year: </b>
              {work?.completitionYear}
            </p>
          )}{" "}
          {work?.description && (
            <p>
              <b>Description: </b>
              {work?.description}
            </p>
          )}{" "}
          {work?.galleryName && (
            <p>
              <b>Gallery Name: </b>
              {work?.galleryName}
            </p>
          )}
          {work?.genre && (
            <p>
              <b>Genre: </b>
              {work?.genre}
            </p>
          )}
          {work?.lastPrice && (
            <p>
              <b>Last Price: </b>
              {work?.lastPrice}
            </p>
          )}
          {work?.location && (
            <p>
              <b>Location: </b>
              {work?.location}
            </p>
          )}
          {work?.material && (
            <p>
              <b>Material: </b>
              {work?.material}
            </p>
          )}
          {work?.style && (
            <p>
              <b>Style: </b>
              {work?.style}
            </p>
          )}
          {work?.yearOfTrade && (
            <p>
              <b>Year Last Sold: </b>
              {work?.yearOfTrade}
            </p>
          )}
        </Spin>
      </Modal>
    </div>
  );
};

export default WorksList;
