import { locations, types } from "./data";

export default function HamburgerMenu({
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
    <section className="flex justify-center lg:hidden">
      <div
        className="hover:cursor-pointer"
        onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
      >
        <div className="text-3xl font-body">Filters</div>
      </div>
      <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
        <div
          className="absolute top-0 right-0 px-8 py-8 hover:cursor-pointer"
          onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
        >
          <svg
            className="h-8 w-8 text-gray-600"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </div>
        <ul className="flex flex-col items-center justify-between min-h-[250px]">
          <li>
            <div className="my-6">
              <div className="text-gray-500 text-lg text-center pb-3">
                Location
              </div>
              <div className="text-xl">
                <select
                  onChange={(e) =>
                    handleSelectChange("location", e.target.value)
                  }
                  value={
                    !!searchQuery?.location ? searchQuery.location : "default"
                  }
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
            <div className="my-6">
              <div className="text-center pb-3 text-gray-500 font-body text-lg">
                Time
              </div>
              <div className="text-xl">
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
            <div className="my-6">
              <div className="text-gray-500 font-body text-lg text-center pb-3">
                Price
              </div>
              <select
                className="text-xl"
                value={!!searchQuery?.price ? searchQuery.price : "default"}
                onChange={(e) => handleSelectChange("price", e.target.value)}
              >
                <option value="default">All</option>
                <option value="low">₹1000-₹3000</option>
                <option value="med">₹3000-₹5000</option>
                <option value="high">₹5000+</option>
              </select>
            </div>
          </li>
          <li>
            <div className="my-6">
              <div className="text-gray-500 font-body text-lg text-center pb-3">
                Property Type
              </div>
              <div className="text-xl">
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
          <li className="my-4">
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
      </div>
    </section>
  );
}
