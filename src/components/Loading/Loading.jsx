import { Alert, Spin } from "antd";
import React from "react";

const Loading = () => {
  return (
    <Spin tip="Loading..." size="large">
      <Alert message="" description="" type="info" />
    </Spin>
  );
};

export default Loading;
