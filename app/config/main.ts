/**
 * This config system has a define structure that should be met. Main should supply all configs.
 * Sub configs should (when needed) ask for parameters in their generateXStore function to create their configs.
 * These parameters will be supplied here in main!
 * Every sub config must have a generatorXStore function and a interface defining its structure.
 * 
 * Once thats sorted use this script to get all vars.
 */
import { Store } from "store";
import { Application} from "oak";

// Config imports
import { generateRouterStore, RouterCfgStructure } from "./routes.ts";

import {
    viewEngine,
    engineFactory,
    adapterFactory,
    Engine,
    Adapter,
  } from "view_engine";

// Default var helpers
const app = `${Deno.cwd()}/app`;

/* Main Config Generation */
export interface MainCfgStructure {
    app: Application,
    viewEngine: typeof viewEngine,
    ejs: Engine,
    oakAdapter: Adapter,
    directories: {
        app: string,
        config: string,
        resources: string,
    },
    random: number
}

// Export configs
export const cfgMain: Store<MainCfgStructure> = Store.open<MainCfgStructure>({
        name: 'cfgMain',
        default: { 
            app: new Application(),
            viewEngine: viewEngine,
            ejs: engineFactory.getEjsEngine(),
            oakAdapter: adapterFactory.getOakAdapter(),
            directories: {
                app: app,
                config: `${app}/config`,
                resources: `${app}/resources`
            },
            random: Math.floor(Math.random())
        }
    });

export const cfgRouter: Store<RouterCfgStructure> = generateRouterStore(app);