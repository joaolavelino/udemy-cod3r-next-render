export async function getServerSideProps() {
  const resp = await fetch("http://localhost:3000/api/produtos");
  const products = await resp.json();
  return {
    props: {
      products,
    },
  };
}

export default function Dynamic2(props) {
  const renderProducts = () => {
    return props.products.map((e) => (
      <li key={e.id}>
        {e.id} | {e.name} | R${e.price}
      </li>
    ));
  };

  return (
    <div>
      <h1>Dynamic #2</h1>
      <ul>{renderProducts()}</ul>
    </div>
  );
}
