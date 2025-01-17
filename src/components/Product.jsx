function Product({ name, price }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Price: {price} credits</p>
    </div>
  );
}
function App() {
  return (
    <div>
      <h1>Our Products</h1>
      <Product name="Cookies" price={1000} />
      <Product name="Chips" price={200} />
      <Product name="Soda" price={70} />
    </div>
  );
}

export default App;
