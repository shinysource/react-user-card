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
    const newUsers = users.map((userOne) => {
      if (userOne.id === user.id) {
        userOne.favorite = !userOne.favorite;
      }
      return userOne;
    });

    setUsers(newUsers);
    return;
  };

  const handleDelete = (user: User) => {
    const newUsers = users.filter((userOne) => userOne.id !== user.id);

    setUsers(newUsers);
    return;
  };

  return (
    <Row gutter={[16, 16]} justify="center" style={{ margin: 30 }}>
      {users.map((user, index) => (
        <Col xs={{ span: 20 }} md={{ span: 7 }} lg={{ span: 5 }}>
          <UserCard
            key={index}
            user={user}
            loading={isLoading}
            favorite={handleFavorite}
            remove={handleDelete}
          />
        </Col>
      ))}
    </Row>
  );
};

export default AboutUs;
