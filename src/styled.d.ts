import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    color: {
      bgLight: string;
      bgDark: string;
      linear: string;
      orange: string;
      white: string;
      accent: string;
      light: string;
      success: string;
      error: string;
    };
    text: {
      h1: {
        fontStyle: string;
        fontWeight: string;
        fontSize: string;
        lineHeight: string;
        letterSpacing: string;
        textTransform: string;
      };
      h2: {
        fontStyle: string;
        fontWeight: string;
        fontSize: string;
        lineHeight: string;
        letterSpacing: string;
        textTransform: string;
      };
      h3: {
        fontStyle: string;
        fontWeight: string;
        fontSize: string;
        lineHeight: string;
        letterSpacing: string;
        textTransform: string;
      };
      body: {
        fontStyle: string;
        fontWeight: string;
        fontSize: string;
        lineHeight: string;
        letterSpacing: string;
      };
      bold: {
        fontStyle: string;
        fontWeight: string;
        fontSize: string;
        lineHeight: string;
      };
      small: {
        fontStyle: string;
        fontWeight: string;
        fontSize: string;
        lineHeight: string;
      };
      preTitle: {
        fontStyle: string;
        fontWeight: string;
        fontSize: string;
        lineHeight: string;
        letterSpacing: string;
        textTransform: string;
      };
      button: {
        fontStyle: string;
        fontWeight: string;
        fontSize: string;
        lineHeight: string;
        letterSpacing: string;
        textTransform: string;
      };
      link: {
        fontStyle: string;
        fontWeight: string;
        fontSize: string;
        lineHeight: string;
        textDecorationLine: string;
      };
    };
    button: {
      shadow: string;
    };
  }
}
