# Sixphere - Dependency Injector Wrapper


[![Version][version-badge]][version-url]
[![Node version][node-version-badge]][node-version-url]
[![MIT License][mit-license-badge]][mit-license-url]

[![Downloads][downloads-badge]][downloads-url]
[![Total downloads][total-downloads-badge]][downloads-url]

[![Packagephobia][packagephobia-badge]][packagephobia-url]
[![Bundlephobia][bundlephobia-badge]][bundlephobia-url]

------------------------------------------------------------------

Dependency injection lightweight library that allows you inject any service instance in any class in a fast and easy way.


## Install
```bash
npm install '@sixphere/diwrapper' --save
```

## How to use?
The centerpiece of the dependency injector is the `__inject` method. Your class must implement a method with this name and the needed arguments. The library use this method to inject the builded instances.

```javascript
// dummy-component.js
class DummyComponent {
    
    //...
    
    __inject(dummyService1, dummyService2) {
        this.dummyService1 = dummyService1
        this.dummyService2 = dummyService2
    }

    //...
    
}
```

### Bind dependencies
Import the dependency injector wrapper.
```javascript
import { DIWrapper } from '@sixphere/diwrapper'
```

Specify the class and his dependecies.
```javascript
// index.js
let ComposedDummyComponent = DIWrapper.for(DummyComponent).bind([
                                { constructor: DummyService1, args: [] }, 
                                { constructor: DummyService2, args: [] },
                            ])
```

## License
[MIT License][mit-license-url] © 2019 Sixphere

<!-- References -->
[typescript-url]: https://github.com/Microsoft/TypeScript
[java-url]: https://www.java.com/en/download
[nodejs-url]: https://nodejs.org
[npm-url]: https://www.npmjs.com
[node-releases-url]: https://nodejs.org/en/download/releases
[vscode-url]: https://code.visualstudio.com
[vscode-lit-html-url]: https://github.com/mjbvz/vscode-lit-html
[web-component-tester-url]: https://github.com/Polymer/tools/tree/master/packages/web-component-tester
[lit-element-url]: https://github.com/Polymer/lit-element

<!-- Badges -->
<!-- [follow-me-badge]: https://flat.badgen.net/twitter/follow/Fernando Jiménez?icon=twitter -->

[version-badge]: https://flat.badgen.net/npm/v/@sixphere/diwrapper?icon=npm
[lit-element-version-badge]: https://flat.badgen.net/npm/v/lit-element/latest?icon=npm&label=lit-element
[node-version-badge]: https://flat.badgen.net/npm/node/@sixphere/diwrapper
[mit-license-badge]: https://flat.badgen.net/npm/license/@sixphere/diwrapper

[downloads-badge]: https://flat.badgen.net/npm/dm/@sixphere/diwrapper
[total-downloads-badge]: https://flat.badgen.net/npm/dt/@sixphere/diwrapper?label=total%20downloads
[packagephobia-badge]: https://flat.badgen.net/packagephobia/install/@sixphere/diwrapper
[bundlephobia-badge]: https://flat.badgen.net/bundlephobia/minzip/@sixphere/diwrapper

<!-- Links -->
<!-- [follow-me-url]: https://twitter.com/Fernando Jiménez?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=diwrapper -->

[version-url]: https://www.npmjs.com/package/@sixphere/diwrapper
[node-version-url]: https://nodejs.org/en/download
[mit-license-url]: /LICENSE

[downloads-url]: https://www.npmtrends.com/@sixphere/diwrapper
[packagephobia-url]: https://packagephobia.now.sh/result?p=@sixphere/diwrapper
[bundlephobia-url]: https://bundlephobia.com/result?p=@sixphere/diwrapper

[circleci-url]: https://circleci.com/gh//diwrapper/tree/master
[daviddm-url]: https://david-dm.org//diwrapper

[codebeat-url]: https://codebeat.co/projects/<codebeat_path>
[codacy-url]: https://www.codacy.com/app/<codacy_path>
[lgtm-url]: https://lgtm.com/projects/g/<lgtm_path>