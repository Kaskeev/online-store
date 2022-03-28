import React from "react";
import AdminProducts from "../components/AdminProducts/AdminProducts";
import { Col } from "antd";
import AddProduct from "../components/AddProduct/AddProduct";

const AdminPages = () => {
  return (
    <div>
      <Col span={12}>
        <AddProduct />
        <AdminProducts />
      </Col>
    </div>
  );
};

export default AdminPages;
