/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import { getCabins } from "../services/apiCabins";

function Cabins() {

  const [cabin,setCabin] = useState<any>({});

  useEffect(()=>{
    getCabins().then((data:any)=>setCabin(data));
  },[]);

  return (
    <Row type="horizontal">
      <Heading as="h1">All cabins</Heading>
      <p>{cabin.Image}</p>
      {/* <img src={require(`${cabin.Image}`)}/> */}
    </Row>
  );
}

export default Cabins;
