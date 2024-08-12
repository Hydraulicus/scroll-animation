async function injectSVG({src, el}) {
    return fetch(src)
        .then(r => r.text())
        .then(text => {
            el.innerHTML = text;
        })
        .catch(console.error.bind(console));
}

const isSafari = () => {
    const ua = window.navigator.userAgent;
    const iOS = ua.match(/Macintosh/i) || ua.match(/iPad/i) || ua.match(/iPhone/i);
    const webkit = ua.match(/WebKit/i);
    const iOSSafari = iOS && webkit && !ua.match(/CriOS/i) && !ua.match(/EdgiOS/i) && !ua.match(/Chrome/i) && !ua.match(/Edg/i);

    return iOSSafari
}