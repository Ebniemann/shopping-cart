import ProductList from '../Component/ProductList/ProductList.tsx';
import { PageContainer, ButtonCart, Title, Subtitle, Header } from './styled.ts'
import CartImage from '../assets/cart.png';
import { useState, useContext } from 'react';
import { cartContext } from '../Context/CartContext.tsx';
import Cart from '../Component/Cart/Cart.tsx';
import { Badge, Dropdown, Space } from 'antd';
import type { MenuProps } from 'antd';
import { MenuOutlined } from '@ant-design/icons';

const items: MenuProps['items'] = [
    {
        key: '1',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="XXXXXXXXXXXXXXXXXXXXXXXX">
                1st menu item
            </a>
        ),
    },
    {
        key: '2',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="XXXXXXXXXXXXXXXXXXXXXX">
                2nd menu item
            </a>
        ),
    },
    {
        key: '3',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="XXXXXXXXXXXXXXXXXXXXXXXXXXXXX">
                3rd menu item
            </a>
        ),
    },
];


const Page = () => {
    const context = useContext(cartContext);
    const [openCart, setOpenCart] = useState(false);

    const toggleCart = () => {
        setOpenCart(!openCart);
    }

    const { cart } = context!;

    return (
        <PageContainer>
            <Header>
                <Dropdown menu={{ items }}>
                    <a onClick={(e) => e.preventDefault()}>
                        <Space >
                            <MenuOutlined />
                            {/* <DownOutlined /> */}
                        </Space>
                    </a>
                </Dropdown>
                <Title>Mi Tienda</Title>
                <ButtonCart onClick={toggleCart}>
                    <Badge count={cart.length} size="default" color="#f5222d" style={{
                        position: 'absolute',
                        top: -10,
                        right: -10,
                        transform: 'translate(-10%, 45%)',
                    }}>
                        <img src={CartImage} alt="cart icon" />
                    </Badge>
                </ButtonCart>
            </Header>
            {openCart && <Cart onClose={() => setOpenCart(false)} />}
            <Subtitle>Lista de productos disponibles para la compra</Subtitle>
            <ProductList />
        </PageContainer >
    );
}

export default Page
