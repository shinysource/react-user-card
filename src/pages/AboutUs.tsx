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
      setUsers(responseUsers);
      setIsLoading(false);
    });
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const handleFavorite = (user: User) => {
    const newUsers = users.map((user_one) => {
      if (user_one.id === user.id) {
        user_one.favorite = !user_one.favorite;
      }
      return user_one;
    });

    setUsers(newUsers);
    return;
  };

  return (
    <Row gutter={[16, 16]} justify="center" style={{ marginTop: 30 }}>
      {users.map((user, index) => (
        <Col xs={{ span: 20 }} md={{ span: 7 }} lg={{ span: 5 }}>
          <UserCard
            key={index}
            user={user}
            loading={isLoading}
            action={handleFavorite}
          />
        </Col>
      ))}
    </Row>
  );
};

export default AboutUs;
