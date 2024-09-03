import ProductForm from '../components/ProductForm';
import '../stylesheet/styleesheet.css';
function AddProduct() {
    return (
        <div id='home'>
            <h1>Adicione um Filme</h1>
            <ProductForm />
        </div>
    );
}
export default AddProduct;