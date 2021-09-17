import { parse } from "std";

/* pre-startup checks */
const port = parse(Deno.args).port;

if (typeof(port) !== 'number') { 
  throw new Error("Missing/Invalid port was found on startup. Please assign a port in commandline with '--port 80' for example.") 
}

/* Starting / Bootstraping */
import { cfgMain } from "config";
import "./routes/routes.ts";

/* Started */
console.log("Bootstrapped");
await cfgMain.get().app.listen({ port: port });