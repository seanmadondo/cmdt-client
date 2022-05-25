import { createContext, useContext, useState } from "react";
import { MAIN_SOURCE_ABBR, NZ_ORGS } from "../utils/constants";

//create context object
const NetworkContext = createContext(undefined);

//Provider State
export function NetworkProvider(props: any) {
  const [value, setValue] = useState(props.value);
  const [currentSourceValue, setCurrentSourceValue] =
    useState(MAIN_SOURCE_ABBR);
  const [currentAreaValue, setcurrentAreaValue] = useState(NZ_ORGS);
  const [currentCategoryValue, setCurrentCategoryValue] = useState(
    "Engineering, Biomedical"
  );
  const [currentCategorySourceValue, setCurrentCategorySourceValue] =
    useState("ABI");

  //update querydata when dropdowns change
  const updateQuery = async (option: string[], requestType: string) => {
    //check which parameters we are using for body
    if (requestType === "Area") {
      if (option.includes("NZ Universities")) {
        option = NZ_ORGS;
        setcurrentAreaValue(option);
      } else {
        option = [];
        setcurrentAreaValue(option);
      }
    }
    if (requestType === "Source") {
      if (option.length === 0) {
        option = MAIN_SOURCE_ABBR;
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
        targets: MAIN_SOURCE_ABBR,
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
