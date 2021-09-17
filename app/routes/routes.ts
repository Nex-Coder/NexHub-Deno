import { viewEngine } from "view_engine";
import { cfgMain, cfgRouter } from "config";

// order matters. 
import "./general.ts"
import "./static-content.ts"
import "./errors.ts"

const mainStore = cfgMain.get()
const router = cfgRouter.get().router;
const app = mainStore.app;

app.use(viewEngine(mainStore.oakAdapter, mainStore.ejs));
app.use(router.routes());
app.use(router.allowedMethods());