import { useEffect, useState } from 'react';
import '../stylesheet/styleesheet.css';
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
            <br />
            <Link to="/add" className="link-button">Adicionar filmes</Link>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        <br />
                        <div>
                            Nome: {product.name} <br /> Genero: {product.genero} <br />Classificação: {product.classificacao} <br />Diretor: {product.diretor}
                        </div>
                        <br />
                        <Link to={`/edit/${product.id}`}>Editar</Link>
                        <br />
                        <button onClick={() => handleDelete(product.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default ProductList; 