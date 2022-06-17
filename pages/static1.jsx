// import { useEffect, useState } from "react";

export default function Static1() {
  // const [num, setNum] = useState(0);
  // useEffect(() => {
  //   setNum(Math.random());
  // }, []); //O useState e useEffect faz o Next entender que a aplicação deixou de ser estática, se tornando renderizada em runtime, como SSR.

  return (
    <div>
      <h1>Static #1</h1>
      {/* <h2>{num}</h2> */}
    </div>
  );
}
