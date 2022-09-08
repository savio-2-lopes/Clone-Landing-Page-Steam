import { MagnifyingGlass } from "phosphor-react";

export function Search() {
  return (
    <div className="container mx-auto bg-blue-700">
      <div className="flex items-center text-white justify-between p-5">
        <div className="pl-5">
          <input type="text" className="bg-blue-700" placeholder="BUSCAR" />
        </div>
        <div className="pr-5">
          <MagnifyingGlass size={32} />
        </div>
      </div>
    </div>
  );
}
