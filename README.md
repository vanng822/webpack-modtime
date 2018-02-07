# webpack-modtime

The output is embedded as binary data in a golang application. Since every build of the output we have a new timestamp and this cause a new build of the application. To avoid this issue we make sure the output have a predictable modified time. Be aware that this should be used when output filename is a hash of the content.

# Usage

```javascript
const WebpackModTime = require('webpack-modtime');
module.exports = {
    ...
    },
    plugins: [
      new WebpackModTime({time: new Date(2016, 11, 12, 12, 12, 12)})
    ]
}
```

The options to WebpackModTime is the same as https://www.npmjs.com/package/touch
