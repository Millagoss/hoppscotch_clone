import { Body } from "./components/Body";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

export default function Home() {
  return (
    <>
      <Header />
      <div className="flex">
        <Sidebar />
        <Body />
      </div>
    </>
  );
}
