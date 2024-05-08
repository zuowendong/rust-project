import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import { invoke } from "@tauri-apps/api";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");

invoke("greet", { name: "zwd" }).then((response) => console.log(response));
