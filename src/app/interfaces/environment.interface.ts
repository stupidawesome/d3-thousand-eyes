export interface Environment {
    production: boolean
    hmr: boolean
    endpoints: {
        sfmaps: {
            arteries: string;
            freeways: string;
            neighborhoods: string;
            streets: string;
            // tslint:disable no-http-string
            routeList: string;
            vehicleLocations: string;
            // tslint:enable no-http-string
        };
    }
}
