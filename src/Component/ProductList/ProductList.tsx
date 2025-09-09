import { useContext } from "react";
import { cartContext } from "../../Context/CartContext.tsx";
import { ProductsGrid, ProductCard, ProductImage, ProductInfo, ProductName, ProductDescription, ProductPrice, AddToCartButton } from './styled.ts'


const ProductList = () => {
    const context = useContext(cartContext);
    if (!context) {
        return <div>Cargando...</div>;
    }
    const { products, addToCart } = context;
    return (
        <ProductsGrid>
            {
                products.map((product) => (
                    <ProductCard key={product.id}>
                        <ProductImage src={product.image} alt={product.name} />
                        <ProductInfo>
                            <ProductName>{product.name}</ProductName>
                            <ProductPrice>Precio: ${product.price.toFixed(2)}</ProductPrice>
                            <ProductDescription>Descripción: {product.min_description}</ProductDescription>
                            <AddToCartButton onClick={() => addToCart(product)}>Añadir al carrito</AddToCartButton>
                        </ProductInfo>
                    </ProductCard>
                ))
            }
        </ProductsGrid>
    );
}
export default ProductList
