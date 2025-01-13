import Product from './components/Product';
import Button from './components/Button';

export default function App() {
  return (
    <div>
      <Product name="Cookies" price={999} />
      <Button label="Click me" />
    </div>
  );
}
