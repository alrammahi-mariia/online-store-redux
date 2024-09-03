import PropTypes from "prop-types";
import { Container, Image } from "react-bootstrap";

const Product = ({ product }) => {
  console.log("product", product);

  return (
    <Container>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>Price: {product.price}</p>
      <Image src={product.image} fluid />
      {/* Remaining fields from Product here including image. Using Bootstrap image component*/}
    </Container>
  );
};

// Prop validation:

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  }),
};

export default Product;
