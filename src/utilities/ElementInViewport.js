import jQuery from 'jquery'

export const isElementInViewport = (el) => {
    if (typeof jQuery === "function" && el instanceof jQuery) {
        el = el[0];
    }
    const rect = el.getBoundingClientRect();
    return (
        (rect.top <= 0 && rect.bottom >= 0)
        || (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.top <= (window.innerHeight || document.documentElement.clientHeight))
        ||
        (rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
    )
}

export const scroll = window.requestAnimationFrame ||
    function (callback) {
        window.setTimeout(callback, 1000 / 60)
    }
