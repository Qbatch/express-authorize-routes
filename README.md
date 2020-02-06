# express-authorize-routes
Easily authorize roles based on [accesscontrol](https://github.com/onury/accesscontrol) grants as express middleware.

# Usage
```js
import { setGrants, canAccess } from 'express-authorize-routes';

setGrants(YOUR_GRANTS_LIST);
```
then in then routes do

```js
app.get(
 '/',
 (req, res, next) => canAccess('admin', 'user', 'read', 'any')(req, res, next),
 (req, res, next) => {
  console.log('admin can see all the users');
  ...
 },
);
```

And you are done! 
