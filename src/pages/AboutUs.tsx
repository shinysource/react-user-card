import React, { useEffect, useState } from "react";
import { Col, Row, Skeleton } from "antd";

import UserCard from "../components/card/UserCard";
import { getUser, getAvatar } from "../service/api";
import { User } from "../types";

const AboutUs = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState<User[]>([]);

  const fetchUser = () => {
    setIsLoading(true);
    getUser().then((response) => {
      const responseUsers: User[] = response.data;
      responseUsers.map((user) => {
        getAvatar(user.name).then((response) => {
          setUsers((users) => [
            ...users,
            {
              ...user,
              avatar: response.data,
            },
          ]);
        });
      });

      setIsLoading(false);
    });
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <Row gutter={[16, 16]} justify="center" style={{ marginTop: 30 }}>
      {users.map((user, index) => (
        <Col xs={{ span: 20 }} md={{ span: 7 }} lg={{ span: 5 }}>
          <UserCard key={index} user={user} loading={isLoading} />
        </Col>
      ))}
    </Row>
  );
};

export default AboutUs;
