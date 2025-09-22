import ProductList from '../Component/ProductList/ProductList.tsx';
import { PageContainer, ButtonCart, Title, Subtitle, Image } from './styled.ts'
import CartImage from '../assets/cart.png';
import { useState, useContext } from 'react';
import { cartContext } from '../Context/CartContext.tsx';
import Cart from '../Component/Cart/Cart.tsx';
import { Badge } from 'antd';


const Page = () => {
    const context = useContext(cartContext);
    const [openCart, setOpenCart] = useState(false);

    const toggleCart = () => {
        setOpenCart(!openCart);
    }

    const { cart } = context!;

    return (
        <PageContainer>
            <ButtonCart>
                <Image src={CartImage} alt="cart icon" onClick={toggleCart} />
                <Badge count={cart.length} />
            </ButtonCart>
            {openCart && <Cart onClose={() => setOpenCart(false)} />}
            <Title>Productos</Title>
            <Subtitle>Lista de productos disponibles para la compra</Subtitle>
            <ProductList />
        </PageContainer>
    );
}

export default Page
