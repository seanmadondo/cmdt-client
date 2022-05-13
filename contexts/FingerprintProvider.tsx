import { createContext, useContext } from "react";

//create context object
const FingerprintContext = createContext(undefined);

//Export provider
export function FingerprintProvider(props: any) {
  let { value, children } = props;

  //update querydata when dropdowns change
  const updateQuery = async (source: string, target: string) => {
    const response = await fetch(" http://localhost:8010/proxy/subject", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ sources: [source], targets: [target] }),
    });
    //Data
    const data = await response.json();

    value = { data: data };
    console.log(value);
  };

  return (
    <FingerprintContext.Provider value={{ ...value, updateQuery }}>
      {children}
    </FingerprintContext.Provider>
  );
}

//Export useContext Hook
export function useFingerprintContext() {
  return useContext(FingerprintContext);
}
