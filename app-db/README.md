# app-db

## Usage

``` js
const setupDatabase = require('platziverse-db')

setupDabase(config).then(db => {
  const {ALumno, Seccion} = db

}).catch(err => console.error(err))
```
