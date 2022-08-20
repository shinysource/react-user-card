import React from "react";
import {
  EditOutlined,
  HeartOutlined,
  DeleteFilled,
  MailOutlined,
  PhoneOutlined,
  GlobalOutlined,
} from "@ant-design/icons";
import { Avatar, Card } from "antd";

const { Meta } = Card;

export type UserCardProps = {
  userAvatar: string;
  userDetail: {
    name: string;
    email: string;
    phone: string;
    site: string;
  };
};

const UserCard = ({ userAvatar, userDetail }: UserCardProps) => {
  return (
    <Card
      cover={<img alt="user" src={userAvatar} />}
      actions={[
        <HeartOutlined twoToneColor="#eb2f96" key="setting" />,
        <EditOutlined key="edit" />,
        <DeleteFilled key="ellipsis" />,
      ]}
    >
      <Meta
        title={userDetail.name}
        description={
          <div>
            <MailOutlined /> <span>{userDetail.email}</span>
            <PhoneOutlined /> <span>{userDetail.phone}</span>
            <GlobalOutlined /> <span>{userDetail.site}</span>
          </div>
        }
      />
    </Card>
  );
};
