import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import CardsData from "./CardsData";
import './style.css';
import { useDispatch } from "react-redux";
import {ADD,DLT} from '../redux/actions/action';


const Cards = () => {
  const [data, setData] = useState(CardsData);
  // console.log(data);

  const dispatch= useDispatch(CardsData);

  const send=(element)=>{
    //  console.log(e);
     dispatch(ADD(element));
  }
  return (
    <div className="container mt-3">
      <h2 className="text-center"> Add items into the Cart</h2>
      <div className="row d-flex justify-content-center align-item-center ">
        {data.map((element, id) => {
          return (
            <Card style={{ width: "22rem", border:"none" }} className="mx-2 mt-4 card_style">
              <Card.Img variant="top" src={element.imgdata} style={{height:"13rem"}} className="mt-3"/>
              <Card.Body>
                <Card.Title>{element.rname}</Card.Title>
                <Card.Text>
                  Price:₹{element.price}
                </Card.Text>
                <div className="button_div d-flex justify-content-center">
                <Button variant="primary" onClick={()=>send(element)} className="col-lg-12">Add to Cart</Button>
                </div>

                
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
