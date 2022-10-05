import { useState } from "react";
import Display from "./displayData";
import data from "./data";
import HamburgerMenu from "./hamburgermenu";
import FilterMenu from "./filtermenu";

export default function Home() {
  const [showReset, setShowReset] = useState(false);
  const [displayData, setDisplayData] = useState(data);
  const [searchQuery, setSearchQuery] = useState({
    type: "default",
    location: "default",
    price: "default",
    postedAt: null,
  });
  const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false

  const handleSelectChange = (field, value) => {
    setSearchQuery({ ...searchQuery, [field]: value });
  };

  const handleDateChange = (e) => {
    if (e.target.value.trim()) {
      setSearchQuery({ ...searchQuery, postedAt: e.target.value });
    } else {
      setSearchQuery({ ...searchQuery, postedAt: null });
    }
  };

  const handleReset = () => {
    setDisplayData(data);
    setShowReset(false);
    setSearchQuery({
      type: "default",
      location: "default",
      price: "default",
      postedAt: null,
    });
    setDisplayData(data);
  };

  const isPriceValid = (price, range) => {
    switch (range) {
      case "low": {
        return price >= 1000 && price < 3000;
      }
      case "med": {
        return price >= 3000 && price < 5000;
      }
      default: {
        return price >= 5000;
      }
    }
  };

  const handleSearch = () => {
    let newData = data;
    Object.keys(searchQuery).forEach((key) => {
      if (searchQuery[key] !== null && searchQuery[key] !== "default") {
        if (key === "price") {
          newData = newData.filter((item) =>
            isPriceValid(item[key], searchQuery[key])
          );
        } else {
          newData = newData.filter((item) => item[key] === searchQuery[key]);
        }
      }
    });
    setDisplayData(newData);
    setShowReset(true);
  };

  return (
    <div>
      <div className="h-screen font-body">
        <div className="font-bold text-4xl md:text-6xl flex justify-center pt-5">
          Rent a property
        </div>
        <div className="mx-auto h-4/5 w-4/5 rounded-3xl">
          <div className="filters bg-white h-1/6 w-11/12 rounded-t-3xl mx-auto mt-6 lg:mt-12">
            <div>
              <nav>
                <HamburgerMenu
                  isNavOpen={isNavOpen}
                  setIsNavOpen={setIsNavOpen}
                  handleDateChange={handleDateChange}
                  handleSelectChange={handleSelectChange}
                  handleSearch={handleSearch}
                  handleReset={handleReset}
                  showReset={showReset}
                  searchQuery={searchQuery}
                />
                <FilterMenu
                  isNavOpen={isNavOpen}
                  setIsNavOpen={setIsNavOpen}
                  handleDateChange={handleDateChange}
                  handleSelectChange={handleSelectChange}
                  handleSearch={handleSearch}
                  handleReset={handleReset}
                  showReset={showReset}
                  searchQuery={searchQuery}
                />
              </nav>
              <style>
                {`.hideMenuNav {
        display: none;
            }
        .showMenuNav {
            display: block;
            position: absolute;
            width: 100%;
            height: 100vh;
            top: 0;
            left: 0;
            background: white;
            z-index: 10;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;
        }`}
              </style>
            </div>
          </div>
          <Display data={displayData} />
        </div>
      </div>
    </div>
  );
}
