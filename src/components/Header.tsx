import Input from "./Input";

export default function Header() {
  function handleChange() {}
  return (
    <div className="flex align-middle justify-between pt-5">
      <div className="ml-2">Brand</div>
      <div className="mr-2">
        <Input type="text" placeholder="Search" onChange={handleChange}></Input>
      </div>
    </div>
  );
}
