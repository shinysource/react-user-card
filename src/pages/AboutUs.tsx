import React, { useEffect, useState } from "react";
import { Col, Row, Skeleton } from "antd";

import UserCard from "../components/card/UserCard";
import { getUser, getAvatar } from "../service/api";
import { User } from "../types";

const AboutUs = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState<User[]>([]);
  const [modalUser, setModalUser] = useState<User | null>(null);
  const [isRemoveModalVisible, setIsRemoveModalVisible] = useState(false);
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);

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

  // Remove Modal
  const handleDelete = (user: User) => {
    const newUsers = users.filter((userOne) => userOne.id !== user.id);

    setUsers(newUsers);
    return;
  };

  const showRemoveModal = (user: User) => {
    setModalUser(user);
    setIsRemoveModalVisible(true);
  };

  const handleRemoveOk = () => {
    if (!modalUser) return;
    handleDelete(modalUser);
    setModalUser(null);
    setIsRemoveModalVisible(false);
  };

  const handleRemoveCancel = () => {
    setModalUser(null);
    setIsRemoveModalVisible(false);
  };

  console.log(modalUser);

  // Edit Modal
  const handeEdit = (user: User) => {
    const newUsers = users.map((userOne) => {
      if (userOne.id === user.id) {
        return user;
      }
      return userOne;
    });

    setUsers(newUsers);
    return;
  };

  const showEditModal = (user: User) => {
    setModalUser(user);
    setIsEditModalVisible(true);
  };

  const handleEditOk = (newUser: User) => {
    if (!modalUser) return;
    handeEdit(newUser);
    setModalUser(null);
    setIsEditModalVisible(false);
  };

  const handleEditCancel = () => {
    setModalUser(null);
    setIsEditModalVisible(false);
  };

  return (
    <Row gutter={[16, 16]} justify="center">
      {users.map((user) => (
        <Col xs={{ span: 20 }} md={{ span: 7 }} lg={{ span: 5 }}>
          <UserCard
            key={user.id}
            user={user}
            loading={isLoading}
            favorite={handleFavorite}
            isRemoveModalVisible={
              isRemoveModalVisible &&
              modalUser !== null &&
              modalUser.id === user.id
            }
            showRemoveModal={showRemoveModal}
            handleRemoveOk={handleRemoveOk}
            handleRemoveCancel={handleRemoveCancel}
            isEditModalVisible={
              isEditModalVisible &&
              modalUser !== null &&
              modalUser.id === user.id
            }
            showEditModal={showEditModal}
            handleEditOk={handleEditOk}
            handleEditCancel={handleEditCancel}
          />
        </Col>
      ))}
    </Row>
  );
};

export default AboutUs;
