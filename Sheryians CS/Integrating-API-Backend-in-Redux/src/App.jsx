import { useDispatch, useSelector } from "react-redux";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { userDelete } from "./store/reducers/UserReducer";

const App = () => {
  // const data = useSelector((state) => state.UserReducer.users);
  // OR
  const { users } = useSelector((state) => state.UserReducer);
  const dispatch = useDispatch();

  const deleteHandler = (user, index) => {
    console.log(`${user.name} is removed from the list.`);
    dispatch(userDelete(index));
  }

  return (
    <div className="max-w-screen-xl mx-auto px-6 font-medium flex flex-col items-center gap-7">
      <h1 className="my-4 text-3xl text-green-500 underline underline-offset-8">User List</h1>

      <ul className="w-full flex flex-col gap-9">
        {users.map((user, index) => {
          return (
            <li key={user.id} className="w-full text-lg flex justify-between items-center hover:text-red-600">
              <h1>{user.name}</h1>

              <span className="h-7 cursor-pointer flex items-center" onClick={() => deleteHandler(user, index)}>
                <RiDeleteBin6Fill />
              </span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default App;