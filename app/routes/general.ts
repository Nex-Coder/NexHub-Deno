import { cfgRouter } from "config";

const routerStore = cfgRouter.get()
const router = routerStore.router;
const viewPath = routerStore.directories.view

router
.get("/", async (ctx) => {
    ctx.upgrade.
    await ctx.render(`${viewPath}/index.ejs`, {data: {name: 'David'}});
});