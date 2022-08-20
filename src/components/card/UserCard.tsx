import React, { useState } from "react";
import {
  EditOutlined,
  HeartTwoTone,
  HeartFilled,
  DeleteFilled,
  MailOutlined,
  PhoneOutlined,
  GlobalOutlined,
} from "@ant-design/icons";
import { Avatar, Card } from "antd";

import RemoveModal from "../modal/RemoveModal";
import { User } from "../../types";

const { Meta } = Card;

export type UserCardProps = {
  user: User;
  loading: boolean;
  favorite: (e: User) => void;
  remove: (e: User) => void;
};

const UserCard = ({
  user,
  loading,
  remove: handleDelete,
  favorite,
}: UserCardProps) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    handleDelete(user);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Card
        cover={
          <img
            alt="user"
            src={`https://avatars.dicebear.com/v2/avataaars/{{${user.name}}}.svg?options[mood][]=happy`}
          />
        }
        actions={[
          user.favorite === true ? (
            <HeartFilled
              key="setting"
              style={{ color: "#eb2f96" }}
              onClick={() => favorite(user)}
            />
          ) : (
            <HeartTwoTone
              twoToneColor="#eb2f96"
              key="setting"
              onClick={() => favorite(user)}
            />
          ),
          <EditOutlined key="edit" />,
          <DeleteFilled key="ellipsis" onClick={() => showModal()} />,
        ]}
        loading={loading}
      >
        <Meta
          title={user.name}
          description={
            <div>
              <div>
                <MailOutlined /> <span>{user.email}</span>
              </div>
              <div>
                <PhoneOutlined /> <span>{user.phone}</span>
              </div>
              <div>
                <GlobalOutlined /> <span>{"http://" + user.website}</span>
              </div>
            </div>
          }
        />
      </Card>
      <RemoveModal
        handleOk={handleOk}
        handleCancel={handleCancel}
        visible={isModalVisible}
      />
    </>
  );
};

export default UserCard;
