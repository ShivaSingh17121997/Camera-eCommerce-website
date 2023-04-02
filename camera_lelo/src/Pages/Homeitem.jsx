import { Button, Grid, ButtonGroup, Card, CardBody, CardFooter, Heading, Image, Stack, Text } from '@chakra-ui/react';
import axios from "axios"

function Homeitem({ price, img, title, desc , id}) {
    let obj={id:id,title:title,img:img, desc:desc, price:price  }
    const handleAdd = ()=> {
        axios.post(`https://proud-wig-ray.cyclic.app/Cart`,obj)
        .then((res)=>console.log(res))
        .catch((err)=>console.log(err))
    }
    return <div>
        <Card maxW='sm' style={{ marginTop: "50px", marginLeft: "75px" }} >
            <CardBody>
                <Image src={img} alt="carditem" />
                <Stack mt="6" spacing="3" >
                    <Heading size="md" >{title}</Heading>
                    <Text> {desc} </Text>
                    <Text color="blue.600" >Rs:{price}</Text>
                </Stack>
            </CardBody>

            <CardFooter>
                <ButtonGroup spacing="2" >
                    <Button onClick={()=>handleAdd()} variant="solid" colorScheme="red" >
                        Add to cart
                    </Button>
                </ButtonGroup>
            </CardFooter>
        </Card>
    </div>
}
export default Homeitem;

// "img": "https://www.adorama.com/images/product/pkes60brn.jpg",
//     "title": "Polk Audio Signature Elite ES60 Floorstanding Speaker, Walnut",
//     "title_link": "https://www.adorama.com/pkes60brn.html",
//     "price": "6,399.00",
//     "desc": "$75/mo suggested payments with 6‑month special financing.\nLearn how.",
//     "desc_link": "https://www.adorama.com//api/getcontent?ContentName=CAFinancingPromo&Output=Desktop",
//     "ordering": "lense",
//     "id": "2"