import Link from "next/link";
import ProductCard from "./components/ProductCard/ProductCard";

export default function Home() {
  return (
    <div className="home">
      <h1>Hello world</h1>
      <Link href="./users/new">New User</Link>
      <ProductCard />
    </div>
  );
}
