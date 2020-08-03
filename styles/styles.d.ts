import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      danger: string;
      light: string;
      dark: string;
    };
  }
}
