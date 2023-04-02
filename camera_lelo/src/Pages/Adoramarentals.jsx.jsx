
import axios from 'axios';

import { Box, Button, Center, Img, SimpleGrid, Text, VStack, Select, Spinner } from '@chakra-ui/react'

import { useEffect, useReducer, useState } from "react"

const initialState = {
  data: [],
  isLoading: false,
  error: null,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "REQUEST":
      return { ...state, isLoading: true, error: null };
    case "SUCCESS":
      return {
        ...state, isLoading: false, error: null, data: payload,
      }
    case "ERROR":
      return { ...state, isLoading: false, error: action.payload };
  }
};

export default function Adorama() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [order, setOrder] = useState("asc");
  const [ordering, setOrdering] = useState(null);
  const { data } = state;

  const getApiData = (order = "asc") => {
    dispatch({ type: "REQUEST" });
    axios(
      `https://proud-wig-ray.cyclic.app/Camera?_sort=price&order=${order}`
    )
      .then((res) => {
        dispatch({ type: "SUCCESS", payload: res.data })
      })
      .catch((err) => {
        dispatch({ type: "ERROR", payload: err.message });
      });
  };

  const handleDelete = (id) => {
    axios
      .delete(
        `https://proud-wig-ray.cyclic.app/Camera/${id}`
      )
      .then((res) => {
        console.log(res);
        getApiData();
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    dispatch({ type: "REQUEST" });
    if (ordering) {
      axios(
        `https://proud-wig-ray.cyclic.app/Camera?ordering=${ordering}&_sort=price&order=${order}`
      )
        .then((res) => {
          dispatch({ type: "SUCCESS", payload: res.data });
        })
        .catch((err) => {
          dispatch({ type: "ERROR", payload: err.message });
        });
    } else {
      getApiData(order);
    }
  }, [ordering, order]);


  return (
    <div>

      <div className="sortingButtons">
        <Button colorScheme={"green"} className="sortByCostAsc" onClick={() => setOrder("asc")} m={2} isDisabled={order === "asc"} > Sort by Asc </Button>
        <Button colorScheme={"red"} className="sortByCostDesc" m={2} onClick={() => setOrder("desc")} isDisabled={order === "desc"}> Sort by Desc </Button>
      </div>

      <Center>
        <Select onChange={(e) => setOrdering(e.target.value)} placeholder="select option">
          <option value="camera">camera</option>
          <option value="lense">lense</option>
          <option value="digital">digital</option>
          {/* <option value="Birman">Birman</option>
          <option value="Himalayan">Himalayan</option> */}
        </Select>
      </Center>

      {/* Map the below container against your data */}
      {state.isLoading ? (
        <Spinner />
      ) : (
        <SimpleGrid columns={4} p={10} gap={5} className="main_container">
          {data.length > 0 && data.map((el) => (
            < Box className="catsDetails"
              key={el.id}
            >
              <Center>
                <Img
                  borderRadius={"10px"}
                  src={el.image}
                  height="300px"
                  width={'300px'}
                  alt="catImage"
                />
              </Center>


              <VStack spacing={2} p={2}>

                <img src={el.img} alt="img" />
                <Text className="name" fontSize={"20px"} fontWeight="bold"> Name:{el.name} </Text>
                <Text className="cost"> {el.price}</Text>
                {/* <Text className="likes">Likes: {el.likes}</Text> */}
                <Text className="breed">Type:{el.ordering}</Text>
                <Text h={"150px"} lineHeight="1.5em" height={"4em"} overflow={"hidden"} className="description">{el.desc}</Text>

                <Button className="delete" onClick={() => handleDelete(el.id)} >Delete</Button>

              </VStack>
            </Box>
          ))
          }
        </SimpleGrid>
      )}
    </div>

  );

}
