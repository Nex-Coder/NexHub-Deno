import { Store } from "store";
import { Router } from "oak";

export interface RouterCfgStructure {
    router: Router,
    directories: {
        routes: string,
        view: string
    },
    random: number
}

export function generateRouterStore(appDir: string): Store<RouterCfgStructure> {
    return Store.open<RouterCfgStructure>({
        name: 'cfgRouter',
        default: { 
            router: new Router(), 
            directories: {
                routes: appDir,
                view: `${appDir}/ejs`
            },
            random: Math.floor(Math.random())
        }
    });
}

    