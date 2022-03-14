import {useState, useEffect} from "react";


export const useProtectedSrc = (url, headers) => {
    //The initial value is empty
    const [base64, setBase64] = useState('data:png;base64,')

    useEffect(() => {
        fetch(url, {headers: headers}).then(res => {
            if (res.status === 200) {
                res.arrayBuffer().then(data => {
                    setBase64(_imageEncode(data, url))
                })
            }
        })

    }, [url, headers])

    return base64
}

function _imageEncode(arrayBuffer, url) {
    let b64encoded = btoa([].reduce.call(new Uint8Array(arrayBuffer), function (p, c) {
        return p + String.fromCharCode(c)
    }, ''))
    let mimetype = "image/" + getUrlExtension(url)
    return "data:" + mimetype + ";base64," + b64encoded
}


const getUrlExtension = (url) => {
    try {
        if (url.startsWith('http://')) {
            return url.match(/^http?:\/\/.*[\\\/][^\?#]*\.([a-zA-Z0-9]+)\??#?/)[1]
        } else {
            return url.match(/^https?:\/\/.*[\\\/][^\?#]*\.([a-zA-Z0-9]+)\??#?/)[1]
        }
    } catch (ignored) {
        return 'jpg';
    }
}
