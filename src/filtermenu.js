import { locations, types } from "./data";

export default function FilterMenu({
  setIsNavOpen,
  isNavOpen,
  handleSelectChange,
  handleSearch,
  handleReset,
  handleDateChange,
  showReset,
  searchQuery,
}) {
  return (
    <ul className="hidden space-x-8 lg:flex lg:justify-between items-center">
      <li>
        <div>
          <div className="text-gray-500 text-sm">Location</div>
          <div className="text-base border-solid border-2 border-blue-100 rounded-md">
            <select
              onChange={(e) => handleSelectChange("location", e.target.value)}
              value={!!searchQuery?.location ? searchQuery.location : "default"}
            >
              <option value="default">All</option>
              {locations.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
        </div>
      </li>
      <li>
        <div>
          <div className="time text-gray-500 font-body text-sm">Time</div>
          <div className="text-base border-solid border-2 border-blue-100 rounded-md">
            <input
              type="date"
              min="2022-08-25"
              max="2023-09-24"
              onChange={handleDateChange}
              value={!!searchQuery?.postedAt ? searchQuery.postedAt : ""}
            />
          </div>
        </div>
      </li>
      <li>
        <div>
          <div className="price text-gray-500 font-body text-sm">Price</div>
          <div className="text-base border-solid border-2 border-blue-100 rounded-md">
            <select
              value={!!searchQuery?.price ? searchQuery.price : "default"}
              onChange={(e) => handleSelectChange("price", e.target.value)}
            >
              <option value="default">All</option>
              <option value="low">₹1000-₹3000</option>
              <option value="med">₹3000-₹5000</option>
              <option value="high">₹5000+</option>
            </select>
          </div>
        </div>
      </li>
      <li>
        <div>
          <div className="type text-gray-500 font-body text-sm">
            Property Type
          </div>
          <div className="text-base border-solid border-2 border-blue-100 rounded-md">
            <select
              name="type"
              onChange={(e) => handleSelectChange("type", e.target.value)}
              value={!!searchQuery?.type ? searchQuery.type : "default"}
            >
              <option value="default">All</option>
              {types.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
        </div>
      </li>
      <li>
        <button
          className="text-black bg-green-400 rounded-full py-2 px-4 text-lg hover:bg-green-200 transition ease-in"
          onClick={handleReset}
        >
          Reset
        </button>
      </li>
      <li>
        <button
          className="text-black bg-green-400 rounded-full py-2 px-4 text-lg hover:bg-green-200 transition ease-in"
          onClick={handleSearch}
        >
          Search
        </button>
      </li>
    </ul>
  );
}
