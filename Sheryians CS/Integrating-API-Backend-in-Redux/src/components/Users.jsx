import { useDispatch, useSelector } from "react-redux";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { userDelete } from "../store/reducers/UserReducer";

const Users = () => {
    const { users } = useSelector((state) => state.UserReducer);
    const dispatch = useDispatch();

    const deleteHandler = (user, index) => {
        console.log(`${user.name} is removed from the list.`);
        dispatch(userDelete(index));
    }

    return (
        <div className="w-full h-[92.5%] rounded-3xl p-7 font-medium bg-black">
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

export default Users;