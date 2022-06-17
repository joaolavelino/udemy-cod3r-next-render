export function getStaticProps() {
  return {
    props: {
      numero: Math.random(),
    },
  };
}

export default function Static2(props) {
  return (
    <div>
      <h1>Static #2</h1>
      <h2>{props.numero}</h2>
    </div>
  );
}
