


// function Login() {
//     return (
//         <div>
//             <h1>Login page</h1>
//         </div>
//     )
// }

// export default Login;

import {
    Button,
    Checkbox,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Link,
    Stack,
    Image,
    ColorMode, backgroundColor
} from '@chakra-ui/react';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
   // const [authState, loginUser] = useContext(AuthContext);
    const navigate = useNavigate();

    return (
        <Stack minH={'100vh'} direction={{ base: 'column', md: 'row', }}>


            <Flex flex={1} >
                <Image
                    alt={'Login Image'}
                    objectFit={'cover'}
                    src={
                        'https://img.freepik.com/free-photo/dark-blue-textile-texture_23-2147729354.jpg?w=900&t=st=1680234097~exp=1680234697~hmac=b5d7d5803f1a141fd4ae35532a18803f484922af46ae44aa00a087b6048e5024'
                    }
                />


            </Flex>
            <Flex p={8} flex={1} align={'center'} justify={'center'}>

                <Stack spacing={4} w={'full'} maxW={'md'}  >
                    <Heading fontSize={'2xl'}>Sign in to your account</Heading>


                    <FormControl id="email">
                        <FormLabel>Email address</FormLabel>
                        <Input type="email" />
                    </FormControl>


                    <FormControl id="password">
                        <FormLabel>Password</FormLabel>
                        <Input type="password" />
                    </FormControl>


                    <Stack spacing={6}>
                        <Stack
                            direction={{ base: 'column', sm: 'row' }}
                            align={'start'}
                            justify={'space-between'}>
                            <Checkbox>Remember me</Checkbox>
                            <Link color={'blue.500'}>Forgot password?</Link>
                        </Stack>
                        <Button colorScheme={'blue'} variant={'solid'}>
                            Sign in
                        </Button>
                    </Stack>


                </Stack>
            </Flex>


        </Stack>
    );
}

