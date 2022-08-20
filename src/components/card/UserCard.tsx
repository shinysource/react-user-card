import React from "react";
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

import { User } from "../../types";

const { Meta } = Card;

export type UserCardProps = {
  user: User;
  loading: boolean;
  action: (e: User) => void;
};

const UserCard = ({ user, loading, action }: UserCardProps) => {
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
              onClick={() => action(user)}
            />
          ) : (
            <HeartTwoTone
              twoToneColor="#eb2f96"
              key="setting"
              onClick={() => action(user)}
            />
          ),
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
