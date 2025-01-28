import {
  IconCloud,
  IconDownload,
  IconSearch,
  IconWorld,
} from "@tabler/icons-react";

export const Header = () => {
  return (
    <header className="flex items-center border-border border-b justify-between text-white px-2 py-2">
      <div className="text-xs pl-3 font-bold">HOPPSCOTCH</div>

      <div className="flex items-center gap-4">
        <div className="relative w-80">
          <IconSearch className="size-4 absolute text-gray-400 top-2 left-3" />
          <input
            type="text"
            placeholder='Try "Share request"'
            className="w-full bg-[#262626] text-xs text-gray-400 rounded-md py-2 px-4 pl-10 focus:outline-none"
          />
          <div className="absolute top-[16px] left-3/4 transform -translate-y-1/2 text-gray-500">
            <kbd className="text-xs bg-gray-700 px-1 rounded">Ctrl</kbd> +{" "}
            <kbd className="text-xs bg-gray-700 px-1 rounded">K</kbd>
          </div>
        </div>
        <IconDownload className="size-5 cursor-pointer text-gray-400" />
        <IconWorld className="size-5 cursor-pointer text-gray-400" />
      </div>
      <div className="flex items-center gap-2">
        <button className="bg-[#182923] gap-2 flex items-center text-green-400 hover:bg-green-900 text-xs py-[6px] px-4 rounded-md border-[#134132] border">
          <IconCloud className="size-5" />
          Save My Workspace
        </button>
        <button className="bg-indigo-600 hover:bg-indigo-500 text-xs text-white py-2 px-4 rounded">
          Login
        </button>
      </div>
    </header>
  );
};
