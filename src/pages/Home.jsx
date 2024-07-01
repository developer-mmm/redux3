import { useCollection } from "../hooks/useCollection";

function Home() {
  const {data} = useCollection("todos")
  return <div className="card bg-neutral mt-20 ml-40 text-neutral-content w-96">
  <div className="card-body items-center text-center">
    <h2 className="card-title">Todos!</h2>
    <p >Reading books</p>
    <div className="card-actions justify-end">
      <button className="btn mt-4 btn-primary btn-sm">ADD</button>
      <button className="btn mt-4 btn-accent text-red-600 btn-sm">Delet</button>
    </div>
  </div>
</div>;
}

export default Home;
