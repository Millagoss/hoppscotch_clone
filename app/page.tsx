import { Body } from "./components/Body";
import { Header } from "./components/SearchBar";
import { Sidebar } from "./components/Sidebar";

export default function Home() {
  return (
    <div className="h-screen overflow-auto bg-background">
      <Header />
      <div className="flex h-full">
        <Sidebar />
        <Body />
      </div>
    </div>
  );
}
