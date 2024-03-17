import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex justify-around items-center gap-64   ">
        <h1 className="text-3xl font-bold ">Recipe Calories</h1>
        <div className="flex gap-2">
          <button type="submit" className="btn">
            Home
          </button>
          <button type="submit" className="btn">
            Recipis
          </button>
          <button type="submit" className="btn">
            About
          </button>
          <button type="submit" className="btn">
            Search
          </button>
        </div>
        <div className="navbar bg-base-100">
          <div className="flex-none gap-2">
            <div className="form-control">
              <input
                type="text"
                placeholder="Search"
                className="input input-bordered w-24 md:w-auto"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8  ">
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage:
              "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-white">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold">
                Discover an exceptional cooking class tailored for you!
              </h1>
              <p className="mb-5 mt-4">
                Learn and Master Basic Programming, Data Structures, Algorithm,
                OOP, Database and solve 500+ coding problems to become an
                exceptionally well world-class Programmer.
              </p>
              <div className="flex item-center">
                <button className="btn btn-outline bg-green-500 rounded-3xl ml-8">
                  Explore Now
                </button>
                <button className="btn rounded-3xl ml-20  ">
                  Our Feedback
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section>
        <h2 className="text-3xl font-bold mt-8">Our Recipes</h2>
        <p className="mt-4">
          With every bite, the chef's table transcends mere dining; it becomes a
          sensory journey that ignites the senses and leaves a lasting
          impression
        </p>
      </section>
      <section className="flex flex-auto ">
        <section className="flex flex-auto gap-4">
          <div>
            {/* .... */}
            <div className="card w-96 bg-base-100 shadow-xl mt-8">
              <figure>
                <img
                  src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body border-b-2 mt-4">
                <h2 className="card-title ">Spaghetti Bolognese</h2>
                <p className="border-b-2">
                  Classic Italian pasta dish with savory meat sauce
                </p>
                <h2 className="text-1xl font-bold">Ingredients: 6</h2>
                <ul className="border-b-2">
                  <li>500g ground beef</li>
                  <li>1 onion, chopped</li>
                  <li>2 cloves garlic, minced</li>
                </ul>
                <div className="flex">
                  <p> 30 minutes</p>
                  <p> 600 calories</p>
                </div>
              </div>
              <button class="btn btn-success w-1/2 rounded-3xl justify-center">
                Want To Cook
              </button>
            </div>
          </div>
          <div className="flex gap-6 ">
            {/* ... */}
            <div className="card w-96 bg-base-100 shadow-xl mt-8 ">
              <figure>
                <img
                  src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body border-b-2 mt-4">
                <h2 className="card-title ">Chicken Caesar Salad</h2>
                <p className="border-b-2">
                  Classic Italian pasta dish with savory meat sauce
                </p>
                <h2 className="text-1xl font-bold">Ingredients: 6</h2>
                <ul className="border-b-2">
                  <li>500g ground beeÎ</li>
                  <li>1 onion, choppeÔ</li>
                  <li>2 cloves garlic, minced</li>
                </ul>
                <div className="flex">
                  <p> 30 minutes</p>
                  <p> 600 calories</p>
                </div>
              </div>
              <button class="btn btn-success w-1/2 rounded-3xl justify-center ">
                Want To Cook
              </button>
            </div>

            <div>
              <table className="table  border-x-2 border-y-2 mt-6 rounded-2xl">
                {/* head */}
                <thead>
                  <tr>
                    <th></th>
                    <th className=" text-1xl font-bold">Name</th>
                    <th>Time</th>
                    <th>Calories</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  <tr>
                    <td>Cy Ganderton</td>
                    <td>Quality Control Specialist</td>
                    <td>Blue</td>
                  </tr>
                  {/* row 2 */}
                  <tr>
                    <td>Hart Hagerty</td>
                    <td>Desktop Support Technician</td>
                    <td>Purple</td>
                  </tr>
                  {/* row 3 */}
                  <tr>
                    <td>Brice Swyre</td>
                    <td>Tax Accountant</td>
                    <td>Red</td>
                  </tr>
                </tbody>
              </table>
              <div>
                <button className="btn btn-success">Preparing</button>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}

export default App;
