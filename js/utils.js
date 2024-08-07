async function injectSVG({src, el}) {
    return fetch(src)
        .then(r => r.text())
        .then(text => {
            el.innerHTML = text;
        })
        .catch(console.error.bind(console));
}