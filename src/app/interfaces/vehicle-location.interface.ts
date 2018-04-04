export interface Vehicle {
    id: string
    lon: string
    routeTag: string
    predictable: string
    speedKmHr: string
    dirTag: string
    heading: string
    lat: string
    secsSinceReport: string
    leadingVehicleId: string
}

export interface LastTime {
    time: string
}

export interface Error {
    content: string
    shouldRetry: string
}

export interface VehicleLocations {
    vehicle: Vehicle[]
    lastTime: LastTime
    copyright: string
    Error: Error
}
