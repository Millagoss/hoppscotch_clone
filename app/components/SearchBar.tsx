import {
  IconCloud,
  IconDownload,
  IconSearch,
  IconWorld,
} from "@tabler/icons-react";

export const Header = () => {
  return (
    <header className="flex items-center border-border border-b justify-between text-white py-2">
      <div className="text-xs pl-5 font-bold">HOPPSCOTCH</div>

      <div className="flex items-center gap-3">
        <div className="relative w-80">
          <IconSearch className="size-4 absolute text-gray-400 top-2 left-3" />
          <input
            type="text"
            placeholder='Try "Share request"'
            className="w-full bg-[#262626] text-xs text-gray-400 rounded-md py-2 px-4 pl-10 focus:outline-none"
          />
          <div className="absolute top-[16px] left-3/4 transform -translate-y-1/2 gap-1 flex text-gray-500">
            <kbd className="text-[11px] bg-foreground px-2 rounded">Ctrl</kbd>
            <kbd className="text-[11px] bg-foreground px-2 rounded">K</kbd>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <div className="hover:bg-hover px-2 cursor-pointer flex justify-center rounded-sm py-2">
            <IconDownload className="size-4 text-gray-400" />
          </div>
          <div className="hover:bg-hover px-2 cursor-pointer flex justify-center rounded-sm py-2">
            <IconWorld className="size-4 text-gray-400" />
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <button className="bg-[#182923] gap-2 flex items-center text-green-400 hover:bg-green-900 text-xs py-[6px] px-4 rounded-md border-[#134132] border">
          <IconCloud className="size-4" />
          Save My Workspace
        </button>
        <button className="bg-indigo-600 hover:bg-indigo-500 text-xs text-white py-2 px-4 rounded">
          Login
        </button>
      </div>
    </header>
  );
};
