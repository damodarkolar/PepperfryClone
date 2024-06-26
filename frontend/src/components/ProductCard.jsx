import { StarIcon } from '@chakra-ui/icons';
import { Heading, Text, Button, useDisclosure } from '@chakra-ui/react';
import React, { useState } from 'react'
import { AiOutlineHeart } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { v4 as uuid } from "uuid";
import { addItem } from '../redux/cartSlice';
import AddToCartBT from './AddToCartBT';
import CartSideBar from './CartSideBar';
const getRatings = (id) => {
    let k=Math.floor((Math.random()*(5-3))+3)
    const stars = [];
    for (var i = 0; i < k; i++) {
      stars.push(
        <StarIcon mx={"2px"} w={4} h={4} color={"#FFAA1F"}  key={uuid()} />
      );
    }
    return stars;
  };
export const ProductCard = (props) => {
 

  const {type}=props
    const [enableBt, setEnableBt]=useState(false)
    const {
      id,
      name,
      img,
      madeBy,
      offer_price,
      actual_price,
      total_savings,
      price,
      seater,
      details,
    } = props.product ;
  
    return (
  
      
      <div key={id}
        style={{
          display: "flex",
          flexDirection: "column",
          width: "320px",
          // height: "500px",
          textAlign: "left",
          padding: "10px",
        }}
      >
        <div>
          <div onMouseEnter={() => { setEnableBt(true); console.log("first") }} onMouseLeave={() => { setEnableBt(false); console.log("second") }} style={{position: "relative", textAlign: "center",  color: "white"}}>
          
            <img style={{ width: "100%", height: "350px" }} src={img[0]}   alt="Product"/>
            <div style={{ position: "absolute", bottom: "50px", left: "85px" }}>{enableBt ? (
              // calling action add item from redux store
              <AddToCartBT color={"orange"} product={props.product} />
              ) : null}</div>
        <div style={{position: "absolute",bottom: "22px",right: "8px"}}>{getRatings(id)}</div>
        <AiOutlineHeart />
          </div>
        </div>
        <Link to={`/ProductDetails/${type}/${id}`}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignContent: "left",
            padding: "10px",
          }}
        >
          <Text fontSize="lg" padding="10px 0px 0px 0px">
            {name}
          </Text>
          <p style={{ color: "gray", padding: "10px 0px 0px 0px" }}>{madeBy}</p>
          <div
            style={{
              display: "flex",
              width: "55%",
              justifyContent: "space-between",
              margin: "0px",
              padding: "10px 0px 0px 0px",
            }}
          >
            {
              <>
                <Heading as="h5" size="sm" color="tomato">
                  {"₹ " + offer_price}
                </Heading>
                <s style={{ color: "grey" }}>
                  {" "}
                  <p>{"₹ " + actual_price}</p>
                </s>
              </>
            }
          </div>
          <Heading as="h6" size="xs" color="green.500" padding="10px 0px 0px 0px">
            {total_savings}
          </Heading>
          <p style={{ padding: "10px 0px 0px 0px" }}>
            {"Earn cashback ₹ " + Math.floor(price / 2)}
          </p>
          <p style={{ padding: "10px 0px 0px 0px" }}>
            {`Ships in 1 day`}
          </p>
        </div>
        </Link>
        </div>
      
    );
  }