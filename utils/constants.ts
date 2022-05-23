export const NZ_ORG_ABBR_CONVERSION: any = {
  ABI: "Auckland Bioengineering Institute",
  AUT: "Auckland University of Technology",
  CDHB: "Canterbury District Health Board",
  CI: "Callaghan Innovation",
  LU: "Lincoln University",
  MU: "Massey University",
  UoA: "University of Auckland",
  UoC: "University of Canterbury",
  UoO: "University of Otago",
  UoW: "University of Waikato",
  VUW: "Victoria University of Wellington",
};

export function switchOrg(organisation: string): string {
  switch (organisation) {
    case "Auckland Bioengineering Institute":
      return "ABI";
    case "Auckland University of Technology":
      return "AUT";
    case "Canterbury District Health Board":
      return "CDHB";
    case "Callaghan Innovation":
      return "CI";
    case "Lincoln University":
      return "LU";
    case "Massey University":
      return "MU";
    case "University of Auckland":
      return "UoA";
    case "University of Canterbury":
      return "UoC";
    case "University of Otago":
      return "UoO";
    case "University of Waikato":
      return "UoW";
    case "Victoria University of Wellington":
      return "VUW";
  }
  return "";
}

export const NZ_ORGS: string[] = [
  "Auckland University of Technology",
  "University of Auckland",
  "University of Canterbury",
  "Unitec NZ",
  "University of Waikato",
  "University of Otago",
  "Massey University",
  "Victoria University of Wellington",
  "Callaghan Innovation",
  "Lincoln University",
  "Auckland Bioengineering Institute",
];

export const MAIN_SOURCE_ABBR: string[] = [
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
