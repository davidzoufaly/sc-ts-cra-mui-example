type MinMax = "min" | "max";
type SpacingVal = 1 | 2 | 3 | 4 | 5;
export type GdTheme = keyof typeof gdTheme;

const defaultFontSize = 16;
const spacingMultiplier = 8;

// can be used MUI theme object, but It is much easier to work with plain custom object
export const gdTheme = {
  typography: {
    fontFamily: ["Arial", "Helvetica", "sans-serif"].join(","),
    fontSize: {
      paragraph: defaultFontSize + "px",
      headingOne: defaultFontSize * 2.5 + "px",
      headingTwo: defaultFontSize * 2.25 + "px",
      headingThree: defaultFontSize * 2 + "px",
      headingFour: defaultFontSize * 1.75 + "px",
      headingFive: defaultFontSize * 1.5 + "px",
      headingSix: defaultFontSize * 1.25 + "px"
    }
  },
  spacing: (spacingVal: SpacingVal) => spacingVal * spacingMultiplier + "px",
  layout: {
    deviceSize: {
      mobileS: "320px",
      mobileM: "375px",
      mobileL: "425px",
      tablet: "768px",
      laptop: "1024px",
      laptopL: "1440px",
      desktop: "2560px"
    },
    breakPoints: {
      mobileS: (minMax: MinMax) =>
        `(${minMax}-width: ${gdTheme.layout.deviceSize.mobileS})`,
      mobileM: (minMax: MinMax) =>
        `(${minMax}-width: ${gdTheme.layout.deviceSize.mobileM})`,
      mobileL: (minMax: MinMax) =>
        `(${minMax}-width: ${gdTheme.layout.deviceSize.mobileL})`,
      tablet: (minMax: MinMax) =>
        `(${minMax}-width: ${gdTheme.layout.deviceSize.tablet})`,
      laptop: (minMax: MinMax) =>
        `(${minMax}-width: ${gdTheme.layout.deviceSize.laptop})`,
      laptopL: (minMax: MinMax) =>
        `(${minMax}-width: ${gdTheme.layout.deviceSize.laptopL})`,
      desktop: (minMax: MinMax) =>
        `(${minMax}-width: ${gdTheme.layout.deviceSize.desktop})`,
      desktopL: (minMax: MinMax) =>
        `(${minMax}-width: ${gdTheme.layout.deviceSize.desktop})`
    }
  },
  colors: {
    primary: {
      light: {
        light: "",
        main: "#AAC4FF",
        dark: ""
      },
      dark: {
        light: "",
        main: "#8093BF",
        dark: ""
      }
    },
    secondary: {
      light: {
        light: "",
        main: "#66A09C",
        dark: ""
      },
      dark: {
        light: "",
        main: "#8DDDD8",
        dark: ""
      }
    },
    error: {
      light: {
        light: "",
        main: "",
        dark: ""
      },
      dark: {
        light: "",
        main: "",
        dark: ""
      }
    },
    warning: {
      light: {
        light: "",
        main: "",
        dark: ""
      },
      dark: {
        light: "",
        main: "",
        dark: ""
      }
    },
    info: {
      light: {
        light: "",
        main: "",
        dark: ""
      },
      dark: {
        light: "",
        main: "",
        dark: ""
      }
    },
    success: {
      light: {
        light: "",
        main: "",
        dark: ""
      },
      dark: {
        light: "",
        main: "",
        dark: ""
      }
    },
    divider: {
      light: {
        light: "",
        main: "",
        dark: ""
      },
      dark: {
        light: "",
        main: "",
        dark: ""
      }
    },
    background: {
     light: {
       light: "",
       main: "#DADADA",
       dark: ""
     },
     dark: {
       light: "",
       main: "#333",
       dark: ""
     }
   },
    textPrimary: {
      light: {
        light: "",
        main: "#333",
        dark: ""
      },
      dark: {
        light: "",
        main: "#DADADA",
        dark: ""
      }
    },
    textSecondary: {
      light: {
        light: "",
        main: "#5F72A5",
        dark: ""
      },
      dark: {
        light: "",
        main: "#FFEFD1",
        dark: ""
      }
    },
  }
};
