import React, { useContext, useEffect } from "react";
import { Button, Form, Select, Input, InputNumber } from "antd";
import { brands } from "../../helpers/brands";
import { useParams } from "react-router-dom";
import { productsContext } from "../../contexts/productsContext";

const EditProduct = () => {
  const params = useParams();
  const { getOneProduct, oneProduct } = useContext(productsContext);
  useEffect(() => {
    getOneProduct(params.id);
  }, []);
  return (
    <div className="container">
      <h2>Edit Product</h2>
      <Form
        layout="vertical"
        name="basic"
        //    onFinish={save}
      >
        <Form.Item
          name="brand"
          label="Brand"
          rules={[
            {
              required: true,
              message: "Please input brand!",
            },
          ]}
        >
          <Select>
            {brands.map((item) => (
              <Select.Option key={item.id} value={item.brand}>
                {item.brand}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item
          name="model"
          label="Model"
          rules={[
            {
              required: true,
              message: "Please input Model!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="description"
          label="Description"
          rules={[
            {
              required: true,
              message: "Please input Description!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="price"
          label="Price"
          rules={[
            {
              required: true,
              message: "Please input Price!",
            },
          ]}
        >
          <InputNumber min={1} style={{ width: "100%" }} />
        </Form.Item>
        <Form.Item
          name="image1"
          label="Image 1"
          rules={[
            {
              required: true,
              message: "Please input URL of image 1!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="image2"
          label="Image 2"
          rules={[
            {
              required: true,
              message: "Please input URL of image 2!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="video"
          label="Video"
          rules={[
            {
              required: true,
              message: "Please input URL of Video!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit" width="100%" type="primary">
            Save
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default EditProduct;
