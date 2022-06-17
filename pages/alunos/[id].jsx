export async function getStaticPaths() {
  const resp = await fetch("http://localhost:3000/api/alunos/tutores");
  const ids = await resp.json();

  const paths = ids.map((id) => {
    return { params: { id: `${id}` } };
  });

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const resp = await fetch(
    `http://localhost:3000/api/alunos/${context.params.id}`
  );
  const aluno = await resp.json();

  return {
    props: { aluno },
  };
}

export default function AlunoPorId(props) {
  const { aluno } = props;
  return (
    <div>
      <h1>Detalhes do Aluno</h1>
      <h2>{aluno?.nome}</h2>
      <h5>{aluno?.id}</h5>
      <h3>{aluno?.email}</h3>
    </div>
  );
}
