export default function Header() {
  return (
    <div className="flex align-middle justify-between py-2">
      <div className="ml-10">Brand</div>
      <div className="mr-20">
        <input
          className="border border-slate-700 rounded pl-2 pr-10"
          type="text"
          placeholder="Search"
        />
      </div>
    </div>
  );
}
