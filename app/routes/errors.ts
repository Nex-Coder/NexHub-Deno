import { cfgRouter } from "config";

const router = cfgRouter.get().router

router
.get("/(.*)", (ctx) => {
    ctx.response.status = 404;
    ctx.response.body = "404 | Page not Found";
  })