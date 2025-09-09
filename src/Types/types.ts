export interface Product {
    id: number;
    name: string;
    price: number;
    min_description: string;
    image: string;
    category: string;
    stock: number;

}
export interface CartItem extends Product {
    quantity: number;
}