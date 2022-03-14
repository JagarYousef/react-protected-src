# react-protected-src

Use custom headers in `<img>` `src` attribute easily. <br />
With this hook you can use custom headers (e.g. JWT token) directly in `src` without worrying about the extra steps, and then you get your clean code.

<br />

#### 1. Installation:

```shell
npm i react-protected-src
```
or with yarn: 
```shell
yarn add react-protected-src
```

<br />

#### 2. Import:

```javascript
import {useProtectedSrc} from "react-protected-src";
```

<br />

#### 3. Usage:

```javascript
export function Page() {
    const base64 = useProtectedSrc('http://example.com/image.jpg', {'Authorization': 'Bearer SOME_TOKEN'})
    return (
        <div>
            <img src={base64} />
        </div>
    )
}
```

<br />

#### nextJS example:

```javascript
export default function Home() {
    const base64 = useProtectedSrc('http://example.com/image.jpg', {'Authorization': 'Bearer SOME_TOKEN'})
    return (
        <div>
            <Image src={base64} width={100} height={100} />
        </div>
    )
}
```