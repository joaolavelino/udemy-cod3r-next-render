export default function handler(req, res) {
  const id = +req.query.id;

  res
    .status(200)
    .json({ nome: `John Doe ${id}`, id, email: `johndoe${id}@email.com` });
}
