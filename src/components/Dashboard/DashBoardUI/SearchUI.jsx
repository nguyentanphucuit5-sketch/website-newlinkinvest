import { Input } from "@/components/ui/input";

const SearchUI = ({ placeholder, handleSearchChange }) => {
  return (
    <div>
      <Input
        type="text"
        className="w-[300px]"
        placeholder={placeholder}
        onChange={handleSearchChange}
      />
    </div>
  );
};

export default SearchUI;
