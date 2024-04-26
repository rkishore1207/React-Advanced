import CreateUser from "../features/users/CreateUser";

function Home() {
  return (
    <div className="font-bold text-stone-700 text-center text-xl my-4">
      <h1 className="mb-4">
        The best pizza.
        <br />
        <span className="text-yellow-500 ">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      <CreateUser/>
    </div>
  );
}

export default Home;
