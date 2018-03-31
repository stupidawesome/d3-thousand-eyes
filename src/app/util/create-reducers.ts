// tslint:disable
import { createReducer } from "ngrx-actions"

export function CreateReducers() {
    return function(target: any) {
        // save a reference to the original constructor
        const original = target

        // a utility function to generate instances of a class
        function construct(constructor: any, args: any) {
            const c: any = function (this: any) {
                return constructor.apply(this, args)
            }
            c.prototype = constructor.prototype

            return new c()
        }

        // the new constructor behaviour
        let f: any = class {
            constructor(...args: any[]) {
                if (this == null) {
                    return createReducer(original)(args[0], args[1])
                } else {
                    return construct(original, args)
                }
            }
        }

        // copy prototype so intanceof operator still works
        f.prototype = original.prototype

        // return new constructor (will override original)
        return f
    }
}
// tslint:enable
