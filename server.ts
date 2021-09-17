  // NexHub Server
  /* todo 
    figure out how to catch file not found and return proper 404 error
    make a test & experimental subdomain for testing
    make sure the deno is running servers on startup
    lookin to tus js https://github.com/tus/tus-js-client/blob/master/docs/installation.md
*/
/* startup */
import "./app/bootstrap.ts"

/* exit */
console.log("Server exited...")