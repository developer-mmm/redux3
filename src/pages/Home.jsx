import { useCollection } from "../hooks/useCollection";

function Home() {
  const {data} = useCollection("todos")
  return <div></div>;
}

export default Home;
