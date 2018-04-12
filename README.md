# Backend-Coding-Challenge
Backend Coding Challenge

# auth

POST /auth

```js
body={
    pass: string()
    user: string()
}
```
RESPONSE
```js
body={
    token: string()
}
```

# api/v1/page-landing

POST

```js
body={
    html: string()
}

headers:{
    Authorization: `Bearer ${token}`
}
```
RESPONSE
```js
body={
    result:'ok'
}
```

PUT

```js
body={
    html: string()
}

headers:{
    Authorization: `Bearer ${token}`
}
```
RESPONSE
```js
body={
    page: pageUpdated
}
```

PUT

```js
headers:{
    Authorization: `Bearer ${token}`
}
```
RESPONSE
```js
body={
    pages: array()
}
```

#/pages/:slug

GET

```js
body={
    html: string()
}

headers:{
    Authorization: `Bearer ${token}`
}
```
RESPONSE
```js
body= html()
```

