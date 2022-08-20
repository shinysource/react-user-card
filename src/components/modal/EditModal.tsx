import { Modal, Input } from "antd";
import { MailOutlined, PhoneOutlined, GlobalOutlined } from "@ant-design/icons";

export type EditModalProps = {
  handleOk: () => void;
  handleCancel: () => void;
  visible: boolean;
};

const EditModal = ({ handleOk, handleCancel, visible }: EditModalProps) => {
  return (
    <>
      <Modal
        title="Edit"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div>
          <Input size="large" placeholder="Email" prefix={<MailOutlined />} />
        </div>
        <div style={{ marginTop: 20 }}>
          <Input size="large" placeholder="Phone" prefix={<PhoneOutlined />} />
        </div>
        <div style={{ marginTop: 20 }}>
          <Input
            size="large"
            placeholder="Website"
            prefix={<GlobalOutlined />}
          />
        </div>
      </Modal>
    </>
  );
};

export default EditModal;
