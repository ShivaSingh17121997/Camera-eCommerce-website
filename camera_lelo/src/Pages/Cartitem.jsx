import { Button, Grid, ButtonGroup, Card, CardBody, CardFooter, Heading, Image, Stack, Text } from '@chakra-ui/react';

function CartItem({ price, img, title, desc, }) {
    return <div>
        <Card maxW='sm' >
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
                    <Button variant="solid" colorScheme="red" >
                        Buy
                    </Button>
                    <Button variant="solid" colorScheme="red" >DELETE</Button>
                </ButtonGroup>
            </CardFooter>
        </Card>
    </div>
}
export default CartItem;