import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { DLT,ADD } from "../redux/actions/action";

const CardDetails = () => {
  const [data, setData] = useState([]);
  console.log(data);

  const { id } = useParams();
  const dispatch = useDispatch();

  const history= useNavigate();

  const send=(element)=>{
    //  console.log(e);
     dispatch(ADD(element));
  }

  const dlt = (id) => {
    dispatch(DLT(id));
    history("/");
  };
  const getData = useSelector((state) => state.cartreducer.carts);
  console.log(getData);

  const compare = () => {
    let comparedata = getData.filter((e) => {
      return e.id === id;
    });
    setData(comparedata);
  };

  useEffect(() => {
    compare();
  }, [id]);

  return (
    <div className="container mt-2">
      <h2 className="text-center">Items Details Page</h2>
      <section>
        <div className="container mt-3">
          <div className="iteamsdetails">
            {data.map((ele) => {
              return (
                <>
                  <div className="items_img">
                    <img src={ele.imgdata}></img>
                  </div>

                  <div className="details">
                    <Table>
                      <tr>
                        <td>
                          <p>
                            <strong>Restaurant : </strong>
                            {ele.rname}
                          </p>
                          <p>
                            <strong>Price : </strong>₹{ele.price}
                          </p>
                          <p>
                            <strong>Dishes : </strong>
                            {ele.address}
                          </p>
                          <p>
                            <strong>Total : </strong>₹{ele.price * ele.qnty}
                          </p>
                          <div className='mt-5 d-flex justify-content-between align-items-center' style={{width:100,cursor:"pointer",background:"#ddd",color:"#111"}}>
                            <span style={{fontSize:24}}>-</span>
                            <span style={{fontSize:22}}>{ele.qnty}</span>
                            <span style={{fontSize:24}} onClick={()=>send(ele)}>+</span>

                          </div>
                        </td>
                        <td>
                          <p>
                            <strong>Rating : </strong>{" "}
                            <span
                              style={{
                                background: "green",
                                color: "#fff",
                                padding: "2px 5px",
                                borderRadius: "5px",
                              }}
                            >
                              {" "}
                              {ele.rating}★{" "}
                            </span>
                          </p>
                          <p>
                            <strong>OrderReview : </strong>
                            <span>{ele.somedata}</span>
                          </p>
                          <p>
                            <strong>Remove : </strong>
                            <span>
                              <i
                                class="fa-solid fa-trash"
                                style={{
                                  color: "red",
                                  fontSize: 20,
                                  cursor: "pointer",
                                }} onClick={()=>dlt(ele.id)}
                              ></i>
                            </span>
                          </p>
                        </td>
                      </tr>
                    </Table>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CardDetails;
