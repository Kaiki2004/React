import { useEffect, useState } from 'react';
import { getProducts, deleteProduct } from '../service/api';
import { Link } from 'react-router-dom';
interface Product {
    id: string;
    name: string;
    description: string;
    genero: string;
    classificacao: string;
    diretor: string;
}
function ProductList() {
    const [products, setProducts] = useState<Product[]>([]);
    useEffect(() => {
        loadProducts();
    }, []);
    const loadProducts = async () => {
        const response = await getProducts();
        setProducts(response.data);
    };
    const handleDelete = async (id: string) => {
        await deleteProduct(id);
        loadProducts();
    };
    return (
        <div>
            <h1> Filmes</h1>
            <Link to="/add">Add Filme</Link>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        {product.name} - {product.genero} - {product.classificacao} - {product.diretor} units
                        <Link to={`/edit/${product.id}`}>Edit</Link>
                        <button onClick={() => handleDelete(product.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default ProductList; 