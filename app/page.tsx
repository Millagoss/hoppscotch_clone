import { Body } from "./components/Body";
import { Header } from "./components/SearchBar";
import { Sidebar } from "./components/Sidebar";

export default function Home() {
  return (
    <div className="h-screen bg-background">
      <Header />
      <div className="flex">
        <Sidebar />
        <Body />
      </div>
    </div>
  );
}
