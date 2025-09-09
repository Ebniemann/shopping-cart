import { Item, CartSidebar, CloseButton, Buttons } from './styled.ts'
import { useContext } from "react";
import { cartContext } from "../../Context/CartContext.tsx";

type SidebarProps = {
    onClose: () => void;
};

const Cart = ({ onClose }: SidebarProps) => {
    const context = useContext(cartContext);
    if (!context) {
        return <div>Cargando...</div>;
    }
    const { cart, removeFromCart, subTotal, getCartTotal } = context;
    return (

        <CartSidebar>
            <CloseButton onClick={onClose} > X </CloseButton>
            <h1>Mi  Carrito</h1>

            {cart.length === 0 ? (
                <p>El carrito está vacío</p>
            ) : (
                <>
                    {cart.map((item) => (
                        <Item key={item.id}>
                            <img src={item.image} alt={item.name} />
                            <div>
                                <h2>{item.name}</h2>
                                <p>Precio: ${item.price.toFixed(2)}</p>
                                <p>Cantidad: {item.quantity}</p>
                                <p>Sub-Total: ${subTotal(item).toFixed(2)}</p>
                                <Buttons>
                                    <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
                                    <button onClick={() => context.addToCart(item)}>Sumar</button>
                                </Buttons>
                            </div>
                        </Item>
                    ))}
                    <h2>Total: ${getCartTotal().toFixed(2)}</h2>
                </>
            )}
        </CartSidebar>

    )
}

export default Cart