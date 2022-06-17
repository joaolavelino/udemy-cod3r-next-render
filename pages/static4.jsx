export async function getStaticProps() {
  const resp = await fetch("http://localhost:3000/api/produtos");
  const products = await resp.json();
  return {
    props: {
      products,
    },
  };
}

export default function Static4(props) {
  const renderProducts = () => {
    return props.products.map((e) => (
      <li key={e.id}>
        {e.id} | {e.name} | R${e.price}
      </li>
    ));
  };

  return (
    <div>
      <h1>Static #4</h1>
      <ul>{renderProducts()}</ul>
    </div>
  );
}
