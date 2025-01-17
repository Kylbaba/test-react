import Product from './Product';
import Button from './Button';

export default function App() {
  return (
    <div>
      <Product name="Cookies" price={999} />
      <Button label="Click me" />
    </div>
  );
}
