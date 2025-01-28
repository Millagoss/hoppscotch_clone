import { Body } from "./components/Body";
import { Header } from "./components/SearchBar";
import { Sidebar } from "./components/Sidebar";

export default function Home() {
  return (
    <div className="h-screen">
      <Header />
      <div
        style={{
          height: "calc(100vh - 81px)",
        }}
        className="flex"
      >
        <Sidebar />
        <Body />
      </div>
      <div className="h-8 border-border border-b border-t">footer</div>
    </div>
  );
}
