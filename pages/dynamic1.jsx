export function getServerSideProps() {
  console.log("[SERVER] - generating props for the component");
  return {
    props: {
      number: Math.random(),
    },
  };
}

export default function Dynamic1(props) {
  return (
    <div>
      <h1>Dynamic #1</h1>
      <h2>{props.number}</h2>
    </div>
  );
}
