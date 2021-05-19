import { Nav } from '../src/Components/Navbar';
import './App.css';
import { ProductList } from '../src/Components/Productslist';
import { ProductProvider } from './Components/ProductContext';
import AddProduct from './Components/AddProduct'

function App() {
  const listOfItems  = [
    
]
  return (
    <div className= 'App'>
    <ProductProvider>
    <Nav />
    <AddProduct/>
    <ProductList />
    </ProductProvider>
    </div>
  );
}

export default App;
