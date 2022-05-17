import { createContext, useContext, useState } from "react";

//create context object
const OverviewContext = createContext(undefined);

//Provider State
export function OverviewProvider(props: any) {
  const [value, setValue] = useState(props.value);

  //update querydata when dropdowns change
  const updateQuery = async (option: string, requestType?: string) => {
    const response = await fetch("/api/overview-category-update", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        targets: ["ALL"],
        categories: [option],
      }),
    });

    //Update data
    const data = await response.json();
    setValue(data);
  };

  return (
    <OverviewContext.Provider value={{ ...value, updateQuery }}>
      {props.children}
    </OverviewContext.Provider>
  );
}

//Export useContext Hook
export function useOverviewContext() {
  return useContext(OverviewContext);
}
