export function getStaticProps() {
  return {
    revalidate: 4, //seconds
    props: {
      numero: Math.random(),
    },
  };
}

export default function Static3(props) {
  return (
    <div>
      <h1>Static #3</h1>
      <h2>{props.numero}</h2>
    </div>
  );
}
