import User from "./components/user";

function App() {
  return (
    <div>
      <h1>shashidhar</h1>
      <User name="shashidhar" description="FSWT" />
      <button className="border-2 px-2 py-1 border-blue-500 rounded bg-blue-500 text-white hover:bg-transparent hover:border-2 hover:text-blue-500 outline-none focus:outline-none focus:ring focus:border-blue-300">
        Hello Tailwind
      </button>
    </div>
  );
}

export default App;
