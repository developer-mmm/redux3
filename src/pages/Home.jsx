import { useSelector } from "react-redux";
import { useCollection } from "../hooks/useCollection";
import { FormCreate } from "../components";
import TodoList from "../components/TodoList";

export const action = async ({ request }) => {
  let formData = await request.formData();
  let title = formData.get("title");
  let completed = formData.get("completed");
  return { title, completed };
};

function Home() {
  const { user } = useSelector((state) => state.user);
  const { data: todos } = useCollection(
    "todos",
    ["uid", "==", user.uid],
    ["createdAt"]
  );

  return (
    <div className="align-elements ">
      <div className="grid grid-cols-2 ">
        {todos && <TodoList todos={todos} />}
        <div className="pt-10">
          <FormCreate user={user} />
        </div>
      </div>
    </div>
  );
}

export default Home;
