import { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Cards() {
  

  const [products, setproducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((data) => data.json())
      .then((result) =>setproducts(result));
  }, []);

  const card=products.map((prod)=>{
    return(
      <div className="col-md-3 m-3 text-center  flex justify-end items-end ">
      <Card style={{ width: '18rem' }} className=" h-100 flex justify-end py-3">
      <div className=" flex justify-center">
      <Card.Img variant="top" src={prod.image} style={{width:"auto", height:120}}/>
      </div>
      <Card.Body>
        <Card.Title>{prod.title}</Card.Title>
        
       
      </Card.Body>
      <footer>
      <Card.Text >
        ₹{prod.price}
        </Card.Text>
      <Button className=" bg-blue-400">Add To Cart</Button>
      </footer>
    </Card>
    </div>
  );


  
  })

  return (
  <div className="row">
    {card}
  </div>
  );



}

export default Cards;
