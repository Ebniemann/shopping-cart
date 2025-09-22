import { Item, CartSidebar, CloseButton, Buttons, CartHeader, CartBody, CartFooter } from './styled';
import { useContext } from "react";
import { cartContext } from "../../Context/CartContext";

type SidebarProps = {
    onClose: () => void;
};

const Cart = ({ onClose }: SidebarProps) => {
    const context = useContext(cartContext);
    if (!context) return <div>Cargando...</div>;

    const { cart, removeFromCart, subTotal, getCartTotal, addToCart } = context;

    return (
        <CartSidebar>
            {/* Header */}
            <CartHeader>
                <h1>Mi Carrito</h1>
                <CloseButton onClick={onClose}>✕</CloseButton>
            </CartHeader>

            {/* Body scrollable */}
            <CartBody>
                {cart.length === 0 ? (
                    <p>El carrito está vacío</p>
                ) : (
                    cart.map((item) => (
                        <Item key={item.id}>
                            <img src={item.image} alt={item.name} />
                            <div>
                                <h2>{item.name}</h2>
                                <p>Precio: ${item.price.toFixed(2)}</p>
                                <p>Cantidad: {item.quantity}</p>
                                <p>Sub-Total: ${subTotal(item).toFixed(2)}</p>
                                <Buttons>
                                    <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
                                    <button onClick={() => addToCart(item)}>Sumar</button>
                                </Buttons>
                            </div>
                        </Item>
                    ))
                )}
            </CartBody>

            {/* Footer */}
            <CartFooter>
                <h2>Total: ${getCartTotal().toFixed(2)}</h2>
            </CartFooter>
        </CartSidebar>
    );
};

export default Cart;
