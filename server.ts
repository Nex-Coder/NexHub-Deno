  // app.ts
  import { parse } from "https://deno.land/std@0.106.0/flags/mod.ts";
  import { Application, Router, send} from "https://deno.land/x/oak@v6.2.0/mod.ts";
  import {
    viewEngine,
    engineFactory,
    adapterFactory,
  } from "https://deno.land/x/view_engine@v1.4.5/mod.ts";

  const port = parse(Deno.args).port;
  if (typeof(port) !== 'number') { throw new Error("Missing/Invalid port was found on startup. Please assign a port in commandline with '--port 80' for example.") }

  const ejsEngine = engineFactory.getEjsEngine();
  const oakAdapter = adapterFactory.getOakAdapter();
  const router = new Router();

  var viewPath: string = "app/ejs/";
  const publicResources = "/resources"

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
  })
  .get("/(.*)", (ctx) => {
    ctx.response.status = 404;
    ctx.response.body = "404 | Page not Found";
  });


  const app = new Application();
  app.use(viewEngine(oakAdapter, ejsEngine));
  app.use(router.routes());
  app.use(router.allowedMethods());

  await app.listen({ port: port });