import colors from "./colors";
const Inter_100Thin = "Inter_100Thin";
const Inter_200ExtraLight = "Inter_200ExtraLight";
const Inter_300Light = "Inter_300Light";
const Inter_400Regular = "Inter_400Regular";
const Inter_500Medium = "Inter_500Medium";
const Inter_600SemiBold = "Inter_600SemiBold";
const Inter_700Bold = "Inter_700Bold";
const Inter_800ExtraBold = "Inter_800ExtraBold";
const Inter_900Black = "Inter_900Black";

const Archivo_100Thin = "Archivo_100Thin";
const Archivo_200ExtraLight = "Archivo_200ExtraLight";
const Archivo_300Light = "Archivo_300Light";
const Archivo_400Regular = "Archivo_400Regular";
const Archivo_500Medium = "Archivo_500Medium";
const Archivo_600SemiBold = "Archivo_600SemiBold";
const Archivo_700Bold = "Archivo_700Bold";
const Archivo_800ExtraBold = "Archivo_800ExtraBold";
const Archivo_900Black = "Archivo_900Black";
const Archivo_100Thin_Italic = "Archivo_100Thin_Italic";
const Archivo_200ExtraLight_Italic = "Archivo_200ExtraLight_Italic";
const Archivo_300Light_Italic = "Archivo_300Light_Italic";
const Archivo_400Regular_Italic = "Archivo_400Regular_Italic";
const Archivo_500Medium_Italic = "Archivo_500Medium_Italic";
const Archivo_600SemiBold_Italic = "Archivo_600SemiBold_Italic";
const Archivo_700Bold_Italic = "Archivo_700Bold_Italic";
const Archivo_800ExtraBold_Italic = "Archivo_800ExtraBold_Italic";
const Archivo_900Black_Italic = "Archivo_900Black_Italic";

export default {
  colorType: {
    title: {
      m1: colors.v1,
      m2: colors.v15,
      m3: "#fff",
      m4: "#fff",
      m5: "#fff",
    },
  },

  colors: {
    ...colors,
    background_primary: "#F4F5F6",
    background_secondary: "#FFFFFF",

    text: "#000000",
    text_detail: "#7A7A80",
    title: {
      c1: "#fff",
      c2: "#000000",
      c3: "#FFB89A",
      c4: "#47474D",
      c5: "#fff",
    },

    error: "#DC1637",
    success: "#03B252",

    shape: "#E1E1E8",
    shape_dark: "#29292E",

    background: {
      v1: "#FFFF",
      v2: "#D9D9D9",
    },
  },

  fonts: {
    Inter_100Thin,
    Inter_200ExtraLight,
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
    Inter_900Black,

    Archivo_100Thin,
    Archivo_200ExtraLight,
    Archivo_300Light,
    Archivo_400Regular,
    Archivo_500Medium,
    Archivo_600SemiBold,
    Archivo_700Bold,
    Archivo_800ExtraBold,
    Archivo_900Black,
    Archivo_100Thin_Italic,
    Archivo_200ExtraLight_Italic,
    Archivo_300Light_Italic,
    Archivo_400Regular_Italic,
    Archivo_500Medium_Italic,
    Archivo_600SemiBold_Italic,
    Archivo_700Bold_Italic,
    Archivo_800ExtraBold_Italic,
    Archivo_900Black_Italic,

    interLight: Inter_300Light,
    interRegular: Inter_400Regular,
    interMedium: Inter_500Medium,
    interSemiBold: Inter_600SemiBold,
    interBold: Inter_700Bold,
    primary_300: Inter_300Light,
    primary_400: Inter_400Regular,
    primary_500: Inter_500Medium,
    primary_600: Inter_600SemiBold,
    primary_700: Inter_700Bold,

    secondary_400: Archivo_400Regular,
    secondary_500: Archivo_500Medium,
    secondary_600: Archivo_600SemiBold,
  },
  fontFamily: {
    headline: Inter_700Bold,
    subtitle: Inter_500Medium,
    caption: Inter_700Bold,
    body: Inter_400Regular,
    button: Inter_700Bold,
  },
  fontSize: {
    headline: {
      H1: 64,
      H2: 56,
      H3: 48,
      H4: 40,
      H5: 32,
      H6: 24,
    },
    subtitle: 16,
    caption: 12,
    body: {
      SMALL: 20,
      MEDIUM: 24,
      LARGE: 28,
    },
    button: {
      SMALL: 18,
      MEDIUM: 20,
      LARGE: 24,
    },
  },
  space: {
    0: "2px",
    1: "4px",
    2: "8px",
    3: "12px",
    4: "16px",
    5: "20px",
    6: "24px",
    7: "28px",
    8: "32px",
    9: "36px",
    10: "40px",
  },
  radius: {
    1: "4px",
    2: "8px",
    3: "10px",
    4: "16px",
    5: "20px",
    round: "50%",
  },
  shadows: {
    1: "0 2px 4px 0px rgba(0, 0, 0, 0.2)",
    2: "2px 2px 12px 2px rgba(99, 99, 99, 0.3)",
  },
};
