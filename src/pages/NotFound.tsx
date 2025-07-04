import { Button } from "@/components/ui/button";
import { Link } from "react-router";

export default function NotFound() {
  return (
    <section className="flex grow">
      <div className="mx-auto container my-auto text-center">
        <h1 className="text-3xl font-bold md:text-4xl">404 Not Found!</h1>
        <p className="my-2 md:text-xl">
          Opps!The page you're looking for doesn't exits!
        </p>
        <Link to="/">
          <Button className="bg-sky-500 hover:bg-sky-600">Go Back Home</Button>
        </Link>
      </div>
    </section>
  );
}
