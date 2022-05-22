import { createContext, useContext, useState } from "react";

//create context object
const NetworkContext = createContext(undefined);

const sourceData = [
  "ABI",
  "AUT",
  "CDHB",
  "CI",
  "LU",
  "MU",
  "UoA",
  "UoC",
  "UoO",
  "UoW",
  "VUW",
];

const targetData = [
  "Auckland University of Technology",
  "University of Auckland",
  "University of Canterbury",
  // "Institute of Environmental Science & Research (ESR) - New Zealand",
  "Unitec NZ",
  "University of Waikato",
  // "AgResearch - New Zealand",
  // "Auckland City Hospital",
  // "Auckland District Health Board",
  "University of Otago",
  "Massey University",
  // "Christchurch Hospital New Zealand",
  "Victoria University of Wellington",
  "Callaghan Innovation",
  "Lincoln University",
  "Auckland Bioengineering Institute",
  // "Canterbury District Health Board",
];

//Provider State
export function NetworkProvider(props: any) {
  const [value, setValue] = useState(props.value);
  const [currentSourceValue, setCurrentSourceValue] = useState(sourceData);
  const [currentAreaValue, setcurrentAreaValue] = useState(targetData);
  const [currentCategoryValue, setCurrentCategoryValue] = useState(
    "Engineering, Biomedical"
  );
  const [currentCategorySourceValue, setCurrentCategorySourceValue] =
    useState("ABI");

  //update querydata when dropdowns change
  const updateQuery = async (option: string[], requestType: string) => {
    //check which parameters we are using for body
    // requestType === "Area" && setcurrentAreaValue(option);
    if (requestType === "Area") {
      if (option.includes("NZ Universities")) {
        option = targetData;
        setcurrentAreaValue(option);
      } else {
        option = ["ALL"];
        setcurrentAreaValue(option);
      }
    }
    if (requestType === "Source") {
      if (option.length === 0) {
        option = sourceData;
        setCurrentSourceValue(option);
      } else {
        setCurrentSourceValue(option);
      }
    }

    const response = await fetch("/api/network", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        sources: requestType === "Source" ? option : currentSourceValue,
        targets: requestType === "Area" ? option : currentAreaValue,
      }),
    });

    //Update data
    const data = await response.json();
    setValue({ networkData: data, categoryData: value.categoryData });
  };

  const updateCategoryQuery = async (option: string, requestType: string) => {
    //check which parameters we are using for body
    requestType === "Category" && setCurrentCategoryValue(option);
    requestType === "Source" && setCurrentCategorySourceValue(option);
    const response = await fetch("/api/subjects", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        sources: [
          requestType === "Source" ? option : currentCategorySourceValue,
        ],
        categories: [
          requestType === "Category" ? option : currentCategoryValue,
        ],
      }),
    });

    //Update data
    const data = await response.json();
    setValue({
      categoryData: data,
      networkData: value.networkData,
    });
  };

  return (
    <NetworkContext.Provider
      value={{ ...value, updateQuery, updateCategoryQuery }}
    >
      {props.children}
    </NetworkContext.Provider>
  );
}

//Export useContext Hook
export function useNetworkContext() {
  return useContext(NetworkContext);
}
