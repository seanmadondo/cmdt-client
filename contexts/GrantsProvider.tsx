import { createContext, useContext, useState } from "react";

//create context object
const GrantsContext = createContext(undefined);

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

//Provider State
export function GrantsProvider(props: any) {
  const [value, setValue] = useState(props.value);

  //update querydata when dropdowns change
  const updateQuery = async (option: string[], requestType: string) => {
    const response = await fetch("/api/grants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        sources: option,
      }),
    });

    //Update data
    const data = await response.json();
    setValue({ data: data });
  };

  return (
    <GrantsContext.Provider value={{ ...value, updateQuery }}>
      {props.children}
    </GrantsContext.Provider>
  );
}

//Export useContext Hook
export function useGrantsContext() {
  return useContext(GrantsContext);
}
