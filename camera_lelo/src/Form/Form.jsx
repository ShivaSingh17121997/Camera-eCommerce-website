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
          name: "",
          cost: "",
          likes: "",
          description: "",
          breed: "",
          image: "",
        });
      })

  }

  return (
    <div className="addCatContainer">
      <form onSubmit={handleSubmit} className="form">
        <FormControl>
          <Input onChange={(e) => setformData({ ...formData, name: e.target.value })} value={formData.name} className="name" placeholder="Name" />
          <Input onChange={(e) => setformData({ ...formData, cost: e.target.value })} value={formData.cost} className="cost" placeholder="Cost" type="number" />

          <Input onChange={(e) => setformData({ ...formData, likes: e.target.value })} value={formData.likes} className="likes" placeholder="Likes" type="number" />
          <Input onChange={(e) => setformData({ ...formData, description: e.target.value })} value={formData.description} className="description" placeholder="Description" />
          <Input onChange={(e) => setformData({ ...formData, breed: e.target.value })} value={formData.breed} className="breed" placeholder="Breed" />
          <Button onClick={handleSubmit} colorScheme={"green"} className="submitBtn">
            Submit
          </Button>
        </FormControl>
      </form>
    </div>
  );
}
