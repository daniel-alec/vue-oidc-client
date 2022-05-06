# Source for Vue 2 version along with the sample site

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

---

### CAS Configs

#### Properties
```
cas.properties:
...
cas.http-web-request.cors.enabled=true
cas.http-web-request.cors.allow-origins[0]=*
```

#### Service
```
{
  "@class": "org.apereo.cas.services.OidcRegisteredService",
  "clientId": "client",
  "serviceId": "^http(s)?://.*",
  "name": "OIDC",
  "id": 100,
  "scopes" : [ "java.util.HashSet", [ "profile", "openid" ] ]
}
```