function randomNumber() {
  return parseInt(Math.random() * 100000 + 1);
}

export default function handler(req, res) {
  res.status(200).json([
    { id: randomNumber(), name: "Pen", price: 5.6 },
    { id: randomNumber(), name: "Pencil", price: 4.2 },
    { id: randomNumber(), name: "Eraser", price: 3.4 },
    { id: randomNumber(), name: "Notebook", price: 15.9 },
  ]);
}
