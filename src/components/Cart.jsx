import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { Container, ListGroup, Image, Button } from "react-bootstrap";
import { clearCart, removeFromCart } from "../store/productSlice";

const Cart = () => {
  const cartItems = useAppSelector((state) => state.products.cart);
  const dispatch = useAppDispatch();
  console.log("cartItems", cartItems);

  const calculateTotal = () =>
    cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div>
      <h1>Cart</h1>
      <Container>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ListGroup>
            {cartItems.map((item, index) => (
              <ListGroup.Item key={index}>
                <div className="d-flex align-items-center">
                  <Image
                    src={item.image}
                    alt={item.name}
                    style={{
                      width: "50px",
                      height: "50px",
                      marginRight: "10px",
                    }}
                    fluid
                  />
                  <div style={{ flex: 1 }}>
                    <h5>{item.name}</h5>
                    <p>Price: ${item.price}</p>
                  </div>
                  <Button
                    onClick={() => dispatch(removeFromCart(item))}
                    variant="danger"
                  >
                    Remove
                  </Button>
                </div>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
        {cartItems.length > 0 && (
            <div className="mt-4">
              <h3>Total: ${calculateTotal()}</h3>
            </div>
          ) && (
            <Button
              onClick={() => dispatch(clearCart(cartItems))}
              variant="danger"
            >
              Clear Cart
            </Button>
          )}
      </Container>
    </div>
  );
};

export default Cart;
