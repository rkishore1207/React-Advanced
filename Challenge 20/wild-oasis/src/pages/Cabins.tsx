/* eslint-disable @typescript-eslint/no-explicit-any */
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import { getCabins } from "../services/apiCabins";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../ui/Spinner";
import CabinTable from "../features/cabins/CabinTable";

function Cabins() {

  const {isLoading,data:cabins,error} = useQuery({
    queryKey:['cabins'],
    queryFn:getCabins
  });

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
    </>
  );
}

export default Cabins;
