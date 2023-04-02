import { useEffect, useState } from "react";
import axios from 'axios';
import { Grid, Heading } from "@chakra-ui/react";
import Cartitem from "./Cartitem"



function Cart() {
    const [data, setData] = useState([]);
    const [price, setprice] = useState(0);
    const cartPrice = (val) => {
        setprice(val)
    }

    const fetchData = () => {
        axios.get(`https://proud-wig-ray.cyclic.app/Cart`)
            .then((res) => {
                setData(res.data)

                let sum = 0
                for (let i = 0; i < res.data.length; i++) {
                    sum = sum + res.data[i].price
                    //console.log(res.data[i].price)  
                }
               console.log(res.data)

                cartPrice(sum)
            })
    }

    useEffect(() => {
        fetchData()
    }, [price])


    return <div>
        <Heading>Cart Total: {price}</Heading>
        <Grid templateColumns="repeat(3,1fr)" gap={6} mt={4}>
            {data?.map((item) => {
                return <Cartitem key={item.id} {...item} />
            })}
        </Grid>

        <br />
        <br />
        <br />
    </div>
}

export default Cart;