import { Button, Modal } from "antd";
import React, { useState } from "react";

export type RemoveModalProps = {
  handleOk: () => void;
  handleCancel: () => void;
  visible: boolean;
};

const RemoveModal = ({ handleOk, handleCancel, visible }: RemoveModalProps) => {
  return (
    <>
      <Modal
        title="Delete"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="confirm" type="primary" onClick={handleOk}>
            Confirm
          </Button>,
          <Button key="cancel" onClick={handleCancel}>
            Cancel
          </Button>,
        ]}
      >
        <p>I want to remove this user.</p>
      </Modal>
    </>
  );
};

export default RemoveModal;
