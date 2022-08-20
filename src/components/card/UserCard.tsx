import React from "react";
import {
  EditOutlined,
  HeartTwoTone,
  DeleteFilled,
  MailOutlined,
  PhoneOutlined,
  GlobalOutlined,
} from "@ant-design/icons";
import { Avatar, Card } from "antd";

import { User } from "../../types";

const { Meta } = Card;

export type UserCardProps = {
  user: User;
  loading: boolean;
};

const UserCard = ({ user, loading }: UserCardProps) => {
  return (
    <>
      <Card
        cover={<img alt="user" src={user.avatar} />}
        actions={[
          <HeartTwoTone twoToneColor="#eb2f96" key="setting" />,
          <EditOutlined key="edit" />,
          <DeleteFilled key="ellipsis" />,
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
    </>
  );
};

export default UserCard;
