import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./styles/main.scss";
import AOS from "aos";
import "aos/dist/aos.css";

const app = createApp(App);

app.use(router);

app.mount("#app");
AOS.init();
