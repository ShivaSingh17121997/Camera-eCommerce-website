

import { useEffect, useState } from "react";
import axios from 'axios';

import { Button, Grid, ButtonGroup, Card, CardBody, CardFooter, Heading, Image, Stack, Text } from '@chakra-ui/react';
import Homeitem from "./Homeitem";


function Home() {




    const [data, setData] = useState([]);
    

    const fetchData = () => {
        axios.get(`https://proud-wig-ray.cyclic.app/Home`)
            .then((res) => {
                setData(res.data)
                console.log(res)
            })
    }

    useEffect(() => {
        fetchData()
    }, [])


    return <div>
       
        <Grid templateColumns="repeat(3,1fr)" gap={6} mt={4}>
            {data?.map((item) => {
                return <Homeitem key={item.id} {...item} />
            })}
        </Grid>

        <br />
        <br />
        <br />

        
    </div>
}

export default Home;