# All about Axios fetch

## HTTP Methods(With the help of API):

Tells a server what action to perform on a resource, such as creating, reading, updating, or deleting data.

- **GET**: Get/fetch existing data.
- **POST**: Add new data.
- **PUT**: Modify existing data.(Replaces the entire resource)
- **PATCH**: Modify existing data.(update specific fields without affecting ohters)
- **DELETE**: Remove existing data.

## What is Fetch?

We can call the API/ or hits the API with the help of **fetch**.

- Browser built-in function.
- No installation.
- Returns Promise.
- Needs to convert JSON in readable JavaScript Object.
- More code, less features.


**Basic Example**
```jsx
useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => setUsers(data))
    .catch(err => console.log(err))
}, [])
```

## What is Axios?

- External library.
- Clean syntax.
- Automatic JSON parsing.
- Better error handling.
- Intercetpors (request/response).
- Timeouts inside.
- Upload/Download progress support.


**Installation**
```
npm install axios
```

**Basic Example**
```jsx
useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(res => setUsers(res.data))
    .catch(err => console.log(err))
}, [])
```

## Fetch vs Axios

| Feature           | Fetch          | Axios              |
|------------------|---------------|--------------------|
| Built-in         | Yes           | No (install)       |
| JSON parse       | Manually      | Automatic          |
| Error handling   | Weak          | Strong             |
| Upload progress  | No            | Yes                |
| Interceptors     | No            | Yes                |
| Timeout          | Manual        | Built-in           |
| Syntax           | Long          | Short              |


**Axios** is a popular JavaScript library for making HTTP requests from both browsers and Node.js, simplifying communication with servers to fetch or send data.

How to install Axios:

- Using CDN: this is mostly use with the HTML, CSS, and JS file to we can builds these things to make projects.
```jsx
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
```

- Using npm:
```npm install axios```

## Axios Configuration

these are the available config options for making requests.

```jsx
const config = {
    url: './users',
    method: 'get',   // default 
    baseURL: 'https://some-domain.com/api',
    params: {
        id: 1
    },
    data: {
        name: 'alpha',
        age: 21,
    },
    responseType: 'json',
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    }
}
```

```axios(config)```

Note:
- timeout is by default 0 which means no time limit.
- Some headers are also by default set, so you don't need to mention such headers.(you can see in browser network tab)

**Only the url is required. Requests will default to GET if method is not specified.**


## Different Response Types (Axios / HTTP)

| responseType | Used For | Description |
|-------------|---------|------------|
| json | API responses (default) | Automatically JSON parse karta hai |
| text | Plain string / HTML | Simple text response return karta hai |
| blob | File download | Images, PDFs, videos, zip files ke liye use hota hai |
| arraybuffer | Low-level binary | Audio processing, video streaming, custom binary protocols |
| document | XML / HTML | Browser me document object return karta hai |
| stream | Node.js streaming | Server-side streaming ke liye use hota hai |

## Shorthand Request Methods

- axios.request(config)
- axios.get(url, config)
- axios.delete(url, config)
- axios.head(url, config)
- axios.options(url, config)
- axios.post(url, data, config)
- axios.put(url, data, config)
- axios.patch(url, data, config)

## Axios Advanced Features 

### Interceptors

Request ke beeck me kuch inject krna.

```jsx
axios.interceptors.request.use(config => {
    config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`
    return config
});
```

```jsx
axios.interceptors.response.use(
    res => res,
    err => {
        console.log("Global Error:", err)
        return Promise.reject(err)
    }
);
```

### Timeouts

```jsx
axios.get(url, { timeout: 5000 })
.catch(err => console.log("Timeout Error"))
```

### File Upload Progess

```jsx
axios.post(url, formData, {
    onUploadProgress: (progress) => {
        console.log((porgress.loaded / progress.total) * 100)
    }
});
```

## Using Axios instance 

```jsx
const api = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com"
});

const fetchUsers = async () => {
    const { data } = await api.get("./users")
    setUsers(data)
}
```

You can mention baseURL, default headers, timeout, auth token and common configuration, etc.


### Instance vs Interceptor

Axios Instance vs Interceptor

| Feature        | Axios Instance                          | Interceptor                                      |
|----------------|------------------------------------------|--------------------------------------------------|
| Purpose        | Reusable axios configuration             | Auto-run logic before request / after response   |
| Handles        | baseURL, timeout, headers, etc.          | token inject, error handling, logging, loader    |
| Runs           | Only when API call is made               | Automatically on every request/response          |
| Without it     | Duplicate config in every request        | Duplicate logic in every request                 |