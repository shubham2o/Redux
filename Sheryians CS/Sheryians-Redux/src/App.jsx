import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementAsync } from "./reducers/counterSlice";

const App = () => {
  const { value } = useSelector(state => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="max-w-screen-xl mx-auto text-center flex flex-col gap-7">
      <div className="w-full mt-2 font-medium tracking-wide">
        <h1 className="py-1 text-3xl text-red-500 underline underline-offset-8">Lets get started with Redux Toolkit</h1>
      </div>

      <div className="w-full">
        <h3 className="text-[22px] text-green-500 font-medium">Counter : {value}</h3>
      </div>

      <div className="w-full flex text-lg justify-center items-center gap-7">
        <button className="rounded-xl px-7 py-2.5 bg-zinc-700" onClick={() => dispatch(increment())}>Increment</button>

        <button className="rounded-xl px-7 py-2.5 bg-zinc-700" onClick={() => dispatch(decrement())}>Decrement</button>

        <button className="rounded-xl px-7 py-2.5 bg-zinc-700" onClick={() => dispatch(incrementAsync(5))}>Increment by 5</button>
      </div>
    </div>
  )
}

export default App;