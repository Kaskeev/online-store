import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { productsContext } from "../../contexts/productsContext";
import Loading from "../Loading/Loading";
import { Button, Carousel } from "antd";

const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const Details = () => {
  const { getOneProduct, oneProduct } = useContext(productsContext);
  const params = useParams();
  useEffect(() => {
    getOneProduct(params.id);
  }, []);
  return oneProduct ? (
    <div className="container">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ width: "35vw" }}>
          <Carousel autoplay>
            <div>
              <img width="100%" src={oneProduct.image1} alt="" />
            </div>
            <div>
              <img width="100%" src={oneProduct.image2} alt="" />
            </div>
          </Carousel>
        </div>
        <div style={{ width: "35vw" }}>
          <h2>{oneProduct.brand}</h2>
          <h3>{oneProduct.model}</h3>
          <h2>{"$" + oneProduct.price}</h2>
          <Button style={{ width: "100%", margin: "15px 0px" }} size="large">
            Add to Cart
          </Button>
          <div>{oneProduct.description}</div>
        </div>
      </div>
      <video
        autoPlay
        loop
        muted
        width="100%"
        padding="40px"
        src={oneProduct.video}
      ></video>
    </div>
  ) : (
    <Loading />
  );
};

export default Details;
