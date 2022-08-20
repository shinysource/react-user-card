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
import { Card } from "antd";

import RemoveModal from "../modal/RemoveModal";
import EditModal from "../modal/EditModal";
import { User } from "../../types";

const { Meta } = Card;

export type UserCardProps = {
  user: User;
  loading: boolean;
  favorite: (e: User) => void;
  isRemoveModalVisible: boolean;
  showRemoveModal: (e: User) => void;
  handleRemoveOk: (e: User) => void;
  handleRemoveCancel: () => void;
  isEditModalVisible: boolean;
  showEditModal: (e: User) => void;
  handleEditOk: (e: User) => void;
  handleEditCancel: () => void;
};

const UserCard = ({
  user,
  loading,
  favorite,
  isRemoveModalVisible,
  showRemoveModal,
  handleRemoveOk,
  handleRemoveCancel,
  isEditModalVisible,
  showEditModal,
  handleEditOk,
  handleEditCancel,
}: UserCardProps) => {
  const removeOk = () => {
    handleRemoveOk(user);
  };

  const editOk = () => {
    handleEditOk(user);
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
          <EditOutlined key="edit" onClick={() => showEditModal(user)} />,
          <DeleteFilled key="ellipsis" onClick={() => showRemoveModal(user)} />,
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
        handleOk={removeOk}
        handleCancel={handleRemoveCancel}
        visible={isRemoveModalVisible}
      />
      <EditModal
        handleOk={editOk}
        handleCancel={handleEditCancel}
        visible={isEditModalVisible}
      />
    </>
  );
};

export default UserCard;
