import { useState, useEffect } from "react";
import { Modal, Input } from "antd";
import { MailOutlined, PhoneOutlined, GlobalOutlined } from "@ant-design/icons";

import { User } from "../../types";

export type EditModalProps = {
  handleOk: (user: User) => void;
  handleCancel: () => void;
  visible: boolean;
  user: User;
};

const EditModal = ({
  handleOk,
  handleCancel,
  visible,
  user,
}: EditModalProps) => {
  const [newUser, setNewUser] = useState<User>(user);

  return (
    <>
      <Modal
        title="Edit"
        visible={visible}
        onOk={() => handleOk(newUser)}
        onCancel={handleCancel}
      >
        <div>
          <Input
            size="large"
            placeholder="Email"
            prefix={<MailOutlined />}
            value={newUser.email}
            onChange={(e) => {
              setNewUser((user) => {
                return { ...user, email: e.target.value };
              });
            }}
          />
        </div>
        <div style={{ marginTop: 20 }}>
          <Input
            size="large"
            placeholder="Phone"
            prefix={<PhoneOutlined />}
            value={newUser.phone}
            onChange={(e) => {
              setNewUser((user) => {
                return { ...user, phone: e.target.value };
              });
            }}
          />
        </div>
        <div style={{ marginTop: 20 }}>
          <Input
            size="large"
            placeholder="Website"
            prefix={<GlobalOutlined />}
            value={newUser.website}
            onChange={(e) => {
              setNewUser((user) => {
                return { ...user, website: e.target.value };
              });
            }}
          />
        </div>
      </Modal>
    </>
  );
};

export default EditModal;
