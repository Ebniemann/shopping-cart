import { useContext } from "react";
import { cartContext } from "../../Context/CartContext.tsx";
import { Card, Col, Row, Button, Typography } from 'antd';

const { Meta } = Card;

const ProductList = () => {
    const context = useContext(cartContext);
    if (!context) {
        return <div>Cargando...</div>;
    }
    const { products, addToCart } = context;
    return (
        <>
            <Row gutter={[16, 16]}>
                {products.map((p) => (
                    <Col key={p.id} xs={24} sm={12} md={8} lg={6}>
                        <Card
                            hoverable
                            cover={<img alt={p.name} src={p.image} />}
                            actions={[<Button type="primary" onClick={() => addToCart(p)} style={{ backgroundColor: "#E9E4F8", fontWeight: 'bold', color: "#8E79C0" }} >Añadir al carrito</Button>]}
                        >
                            <Meta
                                title={p.name}
                                description={
                                    <div style={{
                                        height: "40px",
                                        overflow: "hidden",
                                        textOverflow: "ellipsis"
                                    }}>
                                        {p.min_description}
                                    </div>
                                } />
                            <Typography.Title level={4} style={{ marginTop: 8 }}>
                                ${p.price.toFixed(2)}
                            </Typography.Title>
                        </Card>
                    </Col>
                ))}
            </Row>
        </>

    );
}
export default ProductList
