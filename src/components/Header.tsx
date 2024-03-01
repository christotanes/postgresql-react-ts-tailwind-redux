export default function Header() {
  return (
    <div className="flex align-middle justify-between pt-5">
      <div className="ml-2">Brand</div>
      <div className="mr-2">
        <input
          className="border border-slate-700 rounded"
          type="text"
          placeholder="Search"
        />
      </div>
    </div>
  );
}
