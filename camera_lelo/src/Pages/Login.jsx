
import { AuthContext } from '../Context/AuthContext';
import { Button, Checkbox, Flex, FormControl, FormLabel, Heading, Input, Stack, } from '@chakra-ui/react';
import { useContext, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';



export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const { authState, loginUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let res = await fetch("https://reqres.in/api/login",
                {
                    method: "POST",
                    headers: {
                        "Content-type": "application/json",
                    },
                    body: JSON.stringify({
                        email, password
                    }),
                });
            res = await res.json()
            console.log(res)
            loginUser(res.token)
        } catch (err) {
            console.log(`Error found:`, err)
        }
    };

    if (authState.isAuth) {
        return <Navigate to="/" />
    }


    return (

        //<Stack minH={'100vh'} direction={{ base: 'column', md: 'row', }}>

        <form onSubmit={handleSubmit} >



            <Flex p={8} flex={1} align={'center'} justify={'center'}>

                <Stack spacing={4} w={'full'} maxW={'md'}  >
                    <Heading fontSize={'2xl'}>Sign in to your account</Heading>


                    <FormControl id="email">
                        <FormLabel>Email address</FormLabel>
                        <Input value={email} onChange={(e) => setEmail(e.target.value)} type="email" />
                    </FormControl>


                    <FormControl id="password">
                        <FormLabel>Password</FormLabel>
                        <Input value={password} onChange={(e) => setPassword(e.target.value)} type="password" />
                    </FormControl>


                    <Stack spacing={6}>
                        <Stack
                            direction={{ base: 'column', sm: 'row' }}
                            align={'start'}
                            justify={'space-between'}>
                            <Checkbox>Remember me</Checkbox>
                            <Link color={'blue.500'}>Forgot password?</Link>
                        </Stack>
                        <Button onClick={handleSubmit} colorScheme={'orange'} variant={'solid'}>
                            Sign in
                        </Button>
                    </Stack>


                </Stack>
            </Flex>
            <div>
                <Link to="/"> Go Back </Link>
            </div>
        </form>


    );
}

