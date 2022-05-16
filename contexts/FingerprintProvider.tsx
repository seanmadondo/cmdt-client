import { createContext, useContext, useState } from "react";

//create context object
const FingerprintContext = createContext(undefined);

//Provider State
export function FingerprintProvider(props: any) {
  const [value, setValue] = useState(props.value);
  const [currentSourceValue, setCurrentSourceValue] = useState("ABI");
  const [currentTargetValue, setCurrentTargetValue] = useState("ALL");

  //update querydata when dropdowns change
  const updateQuery = async (option: string, requestType: string) => {
    //check which parameters we are using for body
    requestType === "Target" && setCurrentTargetValue(option);
    requestType === "Source" && setCurrentSourceValue(option);
    const response = await fetch("/api/subjects", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        sources: [requestType === "Source" ? option : currentSourceValue],
        targets: [requestType === "Target" ? option : currentTargetValue],
      }),
    });

    //Update data
    const data = await response.json();
    setValue({ data: data });
  };

  return (
    <FingerprintContext.Provider value={{ ...value, updateQuery }}>
      {props.children}
    </FingerprintContext.Provider>
  );
}

//Export useContext Hook
export function useFingerprintContext() {
  return useContext(FingerprintContext);
}
