// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
    production: false,
    endpoints: {
        sfmaps: {
            arteries: "assets/mocks/sfmaps/arteries-topo.json",
            freeways: "assets/mocks/sfmaps/freeways-topo.json",
            neighborhoods: "assets/mocks/sfmaps/neighborhoods-topo.json",
            streets: "assets/mocks/sfmaps/streets-topo.json",
            // tslint:disable no-http-string
            routeList: "http://webservices.nextbus.com/service/publicJSONFeed?command=routeList&a=sf-muni",
            vehicleLocations: "http://webservices.nextbus.com/service/publicJSONFeed?command=vehicleLocations&a=sf-muni",
            // tslint:enable no-http-string
        },
    },
}
