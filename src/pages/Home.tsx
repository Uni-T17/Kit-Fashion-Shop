import { Link } from "react-router";

export default function Home() {
  return (
    <section className="flex grow items-center">
      <div className="p-8 text-center px-2 md:text-left container mx-auto lg:ml-16">
        <h1 className="text-3xl text-fw-bold md:text-5xl">
          Welcome to Kit Fashion Shop
        </h1>
        <p className="text-gray-700 text-lg md:text-xl my-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat
          distinctio aliquid fugiat quam aperiam, provident magnam tempora
          asperiores deleniti soluta praesentium, sequi error, eius veritatis
          quaerat. Quae omnis eveniet aliquid?
        </p>

        <Link
          to="/shop"
          className="bg-sky-400 text-white px-6 py-3 rounded-md hover:bg-sky-600 shadow-lg"
        >
          Shop Now
        </Link>

        <div className="mt-4">
          <input type="radio" className="rounded-full peer/hello" id="hello" name="greeting"/>
          <label htmlFor="hello">Hello</label>
          <input type="radio" className="rounded-full peer/hola" id="hola" name="greeting" />
          <label htmlFor="hola">Hola</label>
          <p className={"peer-checked/hello:block hidden"}>Hello</p>
          <p className={"peer-checked/hola:block hidden"}>Hola</p>

        </div>
      </div>
    </section>
  );
}
