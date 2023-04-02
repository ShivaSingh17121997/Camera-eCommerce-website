// Note : import the the mentioned components from chakra UI and remove the follwoing once imported

// let Button = () => <div />;
// let FormControl = () => <div />;
// let Input = () => <div />;

import { Button, FormControl, Input, Stack } from "@chakra-ui/react";
import axios from 'axios'
import { useState } from 'react';

export default function Form() {
    const [formData, setformData] = useState({
        title: "",
        price: "",
        image: "",
        description: "",
        title: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post(`https://proud-wig-ray.cyclic.app/Camera`, {
                ...formData,
            })
            .then((res) => {
                console.log(res);
                setformData({
                    title: "",
                    price: "",
                    desc: "",
                    ordering: "",
                    image: "",
                });
            })

    }

    return (
        <div className="addCatContainer">
            <form onSubmit={handleSubmit} className="form" style={{ width: "35%", marginLeft: "600px" }} >
                <FormControl>
                    <br />
                    <br />
                    <Input onChange={(e) => setformData({ ...formData, title: e.target.value })} value={formData.title} className="name" placeholder="title" />
                    <br />
                    <br />
                    <Input onChange={(e) => setformData({ ...formData, price: e.target.value })} value={formData.price} className="price" placeholder="price" type="number" />
                    <br />
                    <br />

                    <Input onChange={(e) => setformData({ ...formData, description: e.target.value })} value={formData.desc} className="desc" placeholder="desc" />
                    <br />
                    <br />
                    <Input onChange={(e) => setformData({ ...formData, ordering: e.target.value })} value={formData.ordering} className="breed" placeholder="ordering" />
                    <br />
                    <br />
                    <Input onChange={(e) => setformData({ ...formData, img: e.target.value })} value={formData.img} className="img" placeholder="image" />
                    <br />
                    <br />
                    <Button onClick={handleSubmit} colorScheme={"green"} className="submitBtn">
                        Submit
                    </Button>
                </FormControl>
                <br />
                <br />
                <br />
                <br /> <br />
                <br /> <br />
                <br />
            </form>
        </div>
    );
}
