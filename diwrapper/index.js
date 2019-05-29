/**
 * 
 * @param {object} klass Class where the dependencies will be injected
 * @param {array} deps Array of dependencies to inject for the class given
 * 
 */
function __createInjectorSubclass(klass, deps) {
    return class extends klass {
        constructor () {
            super();
            
            if(typeof this.__inject !== "function")
                throw new TypeError(`method [ __inject ] must be implemented in class [ ${klass.name} ] before wrap it.`)

            this.__inject(...Array.from(deps).map(dep => new dep.constructor(...dep.args)))
        }
    }
}

/**
 * Dependency injection wrapper
 */
class DIWrapper {

    /**
     * Specify the class where the dependencies will be injected
     * @param {object} klass 
     */
    static for(klass){
        return {
            /**
             * Return a subclass in order to inject the given dependencies to the class (@see DIWrapper.for) 
             */
            bind: deps => __createInjectorSubclass(klass, deps)
        }
    }
}

export { DIWrapper }