import Router from "next/router";

export const Search = ({
  searchText,
  setSearchText,
}: {
  searchText: string;
  setSearchText: (value: string) => void;
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const handleSearch = () => {
    if (searchText !== "") {
      Router.push({
        pathname: "/",
        query: { search: searchText },
      });
    } else {
      Router.push({
        pathname: "/",
      });
    }
  };
  return (
    <div className="flex justify-around mb-4">
      <input
        className="p-4 border-solid border-2"
        type="text"
        value={searchText}
        onChange={handleChange}
      />
      <button onClick={handleSearch} className="p-4 border-solid border-2">
        Search
      </button>
    </div>
  );
};
