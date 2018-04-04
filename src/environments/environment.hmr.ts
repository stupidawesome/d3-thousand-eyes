import { Environment } from "@they/sf-muni-map/interfaces/environment.interface"

export const environment: Environment = {
    production: false,
    hmr: true,
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
