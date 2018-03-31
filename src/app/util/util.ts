export const isNullOrUndefined = <T>(obj: T | null | undefined): obj is null | undefined => {
    // tslint:disable-next-line no-typeof-undefined
    return typeof obj === "undefined" || obj === null
}
