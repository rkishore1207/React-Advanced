/* eslint-disable @typescript-eslint/no-explicit-any */
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import { getCabins } from "../services/apiCabins";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../ui/Spinner";
import CabinTable from "../features/cabins/CabinTable";
import { useState } from "react";
import { ButtonApp } from "../ui/Button";
import CreateCabinForm from "../features/cabins/CreateCabinForm";

function Cabins() {

  const {isLoading,data:cabins,error} = useQuery({
    queryKey:['cabins'],
    queryFn:getCabins
  });

  const [showForm,setShowForm] = useState<boolean>(false);

  if(isLoading) return <Spinner/>;

  if(error) return null;


  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
      </Row>
      <Row>
        <CabinTable cabins={cabins}/>
      </Row>
      <Row>
        <ButtonApp onClick={()=>setShowForm((showForm:boolean) => !showForm)}>Add Cabin</ButtonApp>
      </Row>
      <Row>
        {
          showForm && <CreateCabinForm/>
        }
      </Row>
    </>
  );
}

export default Cabins;
