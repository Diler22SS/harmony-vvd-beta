// Icon
import "font-awesome/css/font-awesome.min.css";
import { aliases, fa } from "vuetify/iconsets/fa4";

// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

// Vuetify
import { createVuetify } from "vuetify";

export default createVuetify({
  theme: {
    themes: {
      light: {
        colors: {
          primary: "#1867C0",
          secondary: "#5CBBF6",
        },
      },
    },
  },
  icons: {
    defaultSet: "fa",
    aliases,
    sets: {
      fa,
    },
  },
});
// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
