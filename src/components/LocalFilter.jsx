//
//
//
//

import { useEffect, useRef, useState } from "react";

const cities = ["city1", "city2", "city3", "city4", "city5"];
const minPrices = ["$60k", "$180k", "$350k", "$500k", "$600k", "$700k", "$900k", "$1.00m", "$1.20m", "No Min."];
const maxPrices = ["$200k", "$300k", "$400k", "$500k", "$600k", "$900k", "$1.20m", "$1.60m", "$1.80m", "No Max."];
const beds = ["1+", "2+", "3+", "4+", "5+", "Any"];
const baths = ["1+", "2+", "3+", "4+", "5+", "Any"];
const types = ["Commercial", "Condo", "Farm", "House", "Lots/Land", "Mobile Home", "Multi-Unit Residential", "Rental"];

const LocalFilter = ({ handleSearch = () => {}, housesArray }) => {
  const [filterState, setFilterState] = useState({});

  const [citiesState, setCitiesState] = useState([]);

  const handleDropdown = (filterItem) => {
    setFilterState((prevState) => ({ ...prevState, [filterItem.key]: { value: filterItem.value, type: filterItem.type } }));
    handleFilter({ ...filterState, [filterItem.key]: { value: filterItem.value, type: filterItem.type } });
  };

  const handleRange = (filterItem) => {
    setFilterState((prevState) => ({ ...prevState, [filterItem.key]: { value: "none", min: filterItem.min, max: filterItem.max, type: "range" } }));
  };

  const handleCheckBox = (filterItem) => {
    setFilterState((prevState) => ({ ...prevState, [filterItem.key]: { value: filterItem.array, type: "checkbox" } }));
  };

  useEffect(() => {
    // Populate the Cities Selector
    const cities = housesArray.map((house) => {
      return house.city;
    });
    //Get the Set
    let setOfCities = [...new Set(cities)];
    setCitiesState(setOfCities);
  }, []);

  //Function that populates a filtered array then export it to our listings
  const handleFilter = (state = filterState) => {
    //Builds the object we will check the Filter Items against
    let workingState = state;

    const keys = Object.keys(workingState);
    const confirmArr = keys.map((key) => {
      if (workingState[key].value === "") {
        return { name: key, value: true, type: workingState[key].type };
      } else {
        if (workingState[key].type === "range") {
          return { name: key, value: false, type: workingState[key].type, min: workingState[key].min, max: workingState[key].max };
        } else {
          return { name: key, value: false, type: workingState[key].type };
        }
      }
    });

    // Filter only the Items we want
    const newArr = housesArray.filter((house) => {
      let isValid = true;

      const solvedArr = confirmArr.map((check) => {
        //Checks all of the Component Types
        if (!check.value) {
          //Check for matching / equality
          if (check.type === "=") {
            if (house[check.name] === workingState[check.name].value) {
              return true;
            } else return false;
          }
          //Check for Numbers greater than
          if (check.type === ">=") {
            const checkAgainst = workingState[check.name].value.replaceAll(/[!@#$%^&*a-zA-Z]/g, "");
            console.log("check against", checkAgainst);
            if (checkAgainst === "") return true;
            if (parseInt(house[check.name]) >= parseFloat(checkAgainst)) {
              return true;
            } else return false;
          }

          if (check.type === "range") {
            let min = check.min;
            let max = check.max;
            if (check.min === "No Min." || check.min === "") min = 0;
            if (check.max === "No Max." || check.max === "") max = 1000000000;

            if (parseInt(house[check.name]) >= min && parseInt(house[check.name]) <= max) {
              return true;
            } else return false;
          }
          if (check.type === "checkbox") {
            const checkArray = workingState[check.name].value;
            if (checkArray.length === 0) return true;
            if (checkArray.includes(house[check.name])) {
              return true;
            } else return false;
          }
          if (check.type === "sort") {
            return true;
          }
        }
      });

      solvedArr.forEach((result) => {
        if (result === false) {
          isValid = false;
        }
      });
      if (isValid) return true;
    });
    console.log(newArr);

    if (keys.includes("sort")) {
      const sortValue = workingState["sort"].value;
      if (sortValue === "Lowest to Highest") {
        newArr.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
      }
      if (sortValue === "Highest to Lowest") {
        newArr.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
      }
    }
    handleSearch(newArr);
  };

  return (
    <div className="flex flex-wrap justify-center mt-5 relative z-10 " style={{ gridTemplateColumns: `repeat(auto-fit, 6rem)` }}>
      <Dropdown title={"City"} name="city" array={citiesState} updateFilter={handleDropdown} type="=" />
      <Dropdown title={"Beds"} name="beds" array={beds} updateFilter={handleDropdown} type=">=" />
      <Dropdown title={"Baths"} name="baths" array={baths} updateFilter={handleDropdown} type=">=" />
      <Range title={"Price"} name="price" lowArray={minPrices} highArray={maxPrices} updateFilter={handleRange} />
      <CheckBox title="Type" name="type" array={types} updateFilter={handleCheckBox} />
      <Dropdown title="Sort" name="sort" array={["Lowest To Highest", "Highest to Lowest"]} type="sort" updateFilter={handleDropdown} />

      <button className="bg-black text-white px-5 py-2" onClick={() => handleFilter()}>
        Search
      </button>
    </div>
  );
};

const Dropdown = ({ title, array, updateFilter, type, name }) => {
  const [state, setState] = useState();
  const dropdownRef = useRef();

  const selectOneClass = (e, className, closeRef) => {
    // const key = className.split("-")[0];
    const value = e.target.innerText;
    setState(value);
    if (value === state) {
      e.target.classList.remove("bg-accent-color");
      updateFilter({ key: name, value: "", type });
      setState("");
      // setFilterState((prevState) => ({ ...prevState, [key]: "" }));
    } else {
      updateFilter({ key: name, value, type });

      // setFilterState((prevState) => ({ ...prevState, [key]: value }));

      const items = document.getElementsByClassName(className);
      for (let i = 0; i < items.length; i++) {
        const element = items[i];
        element.classList.remove("bg-accent-color");
      }
      e.target.classList.add("bg-accent-color");
      if (closeRef) closeRef.current.classList.add("hidden");
    }
  };

  return (
    <>
      <div className="relative cursor-pointer select-none">
        <a onClick={() => dropdownRef.current.classList.toggle("hidden")}>
          <div className="p-2 w-24 border bg-white hover:text-gray-800">
            {title} <span className="text-10">▼</span>
          </div>
        </a>
        {/* Location Dropdown */}
        <div className="hidden" ref={dropdownRef}>
          <div style={{ minWidth: "15rem" }} className="fixed md:absolute left-0 border w-full bg-white z-10">
            <p className=" pl-4 py-1 border-black bg-nav-color text-white tracking-wide w-full md:hidden" style={{ width: "100%" }}>
              {title}
            </p>
            {array.map((item) => (
              <p
                key={item}
                onMouseDown={(e) => {
                  selectOneClass(e, `${name}-item`, dropdownRef);
                }}
                className={`${name}-item` + " select-text text-14 hover:bg-gray-300  w-full p-2 pl-4 pr-2"}
              >
                {item}
              </p>
            ))}
          </div>
        </div>
      </div>
      {/* Location Dropdown
      <div className="absolute left-0 md:hidden" ref={dropdownRef}>
        <div style={{ minWidth: "15rem", width: "fit-content" }} className="absolute   border w-full bg-white z-10">
          {array.map((item) => (
            <p
              key={item}
              onMouseDown={(e) => {
                selectOneClass(e, `${name}-item`, dropdownRef);
              }}
              className={`${name}-item` + " select-text text-14 hover:bg-gray-300  w-full p-2 pl-4 pr-2"}
            >
              {item}
            </p>
          ))}
        </div>
      </div> */}
    </>
  );
};

//
const Range = ({ title, name, lowArray, highArray, updateFilter }) => {
  const [low, setLow] = useState("");
  const [high, setHigh] = useState("");

  const rangeRef = useRef();
  const lowRangeRef = useRef();
  const highRangeRef = useRef();

  const handleChange = (input) => {
    if (input.type === "min") {
      updateFilter({ key: name, min: input.value, max: high });
    } else if (input.type === "max") {
      updateFilter({ key: name, min: low, max: input.value });
    }
  };

  return (
    <div className="relative cursor-pointer select-none">
      <a onClick={() => rangeRef.current.classList.toggle("hidden")}>
        <div className="p-2 w-24 border bg-white hover:text-gray-800">
          {title} <span className="text-10">▼</span>
        </div>
      </a>
      <div className="relative hidden" ref={rangeRef}>
        {/* Price Dropdown */}
        <div className="fixed left-0 w-full md:left-0 md:absolute border md:w-450 bg-white grid gap-4 grid-cols-2 z-10">
          {/* Left Side of Price */}
          <p className=" pl-4 py-1 border-black bg-nav-color text-white tracking-wide w-full md:hidden col-span-2" style={{ width: "100%" }}>
            {title}
          </p>
          {/* Min */}
          <div className="pl-2">
            <div className="flex rounded-md border border-gray-300 overflow-hidden">
              <div className="w-10 h-10 bg-gray-200 flex items-center justify-center text-gray-500">$</div>
              <input
                ref={lowRangeRef}
                className="p-1 box-border"
                placeholder={`Min ${title}`}
                onInput={(e) => {
                  setHigh(e.target.value);
                  handleChange({ type: "min", value: e.target.value });
                }}
                defaultValue={low}
              />
            </div>
            <div className="grid gap-2 text-zinc-800 mt-4">
              {lowArray.map((value) => {
                const emptyValue = value.replaceAll(/(\$)|(m)|(k)/g, "");
                let formattedValue = "";

                if (emptyValue.includes(".")) {
                  formattedValue = emptyValue * 1000000;
                } else if (!emptyValue.includes(".")) {
                  formattedValue = emptyValue * 1000;
                }

                if (emptyValue.includes("No")) {
                  formattedValue = value;
                }
                return (
                  <a
                    key={value}
                    className="text-14"
                    onClick={() => {
                      lowRangeRef.current.value = formattedValue;
                      setLow(formattedValue);
                      handleChange({ type: "min", value: formattedValue });
                    }}
                  >
                    {value}
                  </a>
                );
              })}
            </div>
          </div>
          {/* Max */}
          <div className="pr-2">
            <div className="flex rounded-md border border-gray-300 overflow-hidden">
              <div className="w-10 h-10 bg-gray-200 flex items-center justify-center text-gray-500">$</div>
              <input
                ref={highRangeRef}
                className="p-1 box-border"
                placeholder={`Max ${title}`}
                onInput={(e) => {
                  setHigh(e.target.value);
                  handleChange({ type: "max", value: e.target.value });
                }}
                defaultValue={high}
              />
            </div>
            <div className="grid gap-2 text-zinc-800 mt-4">
              {highArray.map((value) => {
                const emptyValue = value.replaceAll(/(\$)|(m)|(k)/g, "");
                let formattedValue = "";

                if (emptyValue.includes(".")) {
                  formattedValue = emptyValue * 1000000;
                } else if (!emptyValue.includes(".")) {
                  formattedValue = emptyValue * 1000;
                }

                if (emptyValue.includes("No")) {
                  formattedValue = value;
                }
                return (
                  <a
                    key={value}
                    className="text-14"
                    onClick={() => {
                      highRangeRef.current.value = formattedValue;
                      setHigh(formattedValue);
                      handleChange({ type: "max", value: formattedValue });
                    }}
                  >
                    {value}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CheckBox = ({ title, name, array, updateFilter }) => {
  const checkBoxRef = useRef();
  const [state, setState] = useState([]);
  return (
    <>
      {/* Type Selector */}
      <div className="relative cursor-pointer select-none">
        <a onClick={() => checkBoxRef.current.classList.toggle("hidden")}>
          <div className="p-2 w-24 border bg-white hover:text-gray-800">
            {title}
            <span className="text-10"> ▼</span>
          </div>
        </a>
        {/* Type Dropdown */}
        <div className="relative hidden" ref={checkBoxRef}>
          <div style={{ minWidth: "15rem" }} className=" fixed left-0  md:absolute border w-full bg-white z-10">
            <p className=" pl-4 py-1 border-black bg-nav-color text-white tracking-wide w-full md:hidden" style={{ width: "100%" }}>
              {title}
            </p>
            {array.map((value, i) => (
              <div
                key={value}
                id={`${value}-${i}`}
                className="flex pl-4 pr-2 type-item flex items-center hover:bg-gray-300"
                onMouseDown={(e) => {
                  const element = document.getElementById(`${value}-${i}`);

                  const input = element.children[0];

                  if (input.checked) {
                    if (e.target.nodeName !== "INPUT") {
                      input.checked = false;
                    }
                    element.classList.remove("bg-accent-color");
                    const delIndex = state.indexOf(value);
                    let workingArr = [...state];
                    if (delIndex > -1) {
                      workingArr.splice(delIndex, 1);
                    }
                    setState(workingArr);
                    updateFilter({ key: name, array: workingArr });
                  } else if (!input.checked) {
                    if (e.target.nodeName !== "INPUT") {
                      input.checked = true;
                    }
                    element.classList.add("bg-accent-color");
                    setState((prevState) => [...prevState, value]);
                    updateFilter({ key: name, array: [...state, value] });
                  }
                }}
              >
                <input type="checkbox" value={value} />
                <label className=" select-text text-14  p-2 pl-2 pr-2">{value}</label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default LocalFilter;
