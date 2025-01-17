import Product from './Product';
import Button from './Button';

function App() {
  return (
    <div>
      <Product name="Cookies" price={999} />
      <Button label="Click me" />
    </div>
  );
}

export default App;
