import { cfgMain, cfgRouter } from "config";
import { send } from "oak";

const router = cfgRouter.get().router;
const publicResources = cfgMain.get().directories.resources

router
.get("/resources/(.*)", async (ctx) => {
  await send(ctx, ctx.request.url.pathname.substring(publicResources.length), {
    root: `${Deno.cwd()}${publicResources}`,
    index: "index.html",
  });
})
.get("/favicon.ico", async (ctx) => {
  await send(ctx, "/favicon.ico", {
    root: `${Deno.cwd()}`,
  });
});