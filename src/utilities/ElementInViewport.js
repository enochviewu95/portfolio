import jQuery from 'jquery'

/**
 * If the top of the element is above the top of the viewport and the bottom of the element is below
 * the top of the viewport, or if the bottom of the element is below the bottom of the viewport and the
 * top of the element is above the bottom of the viewport, or if the top of the element is below the
 * top of the viewport and the bottom of the element is above the bottom of the viewport, then the
 * element is in the viewport.
 * @param el - The element to check if it's in the viewport.
 * @returns A function that takes an element as an argument and returns a boolean.
 */
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

/* A polyfill for requestAnimationFrame. */
export const scroll = window.requestAnimationFrame ||
    function (callback) {
        window.setTimeout(callback, 1000 / 60)
    }


/**
 * It loops through all the elements with the class name passed in the componentClass parameter, and if
 * the element is in the viewport, it adds the class 'is-visible' to the element.
 */
export const displayOnScrollElement = ({ componentClassName }) => {
    const elementsToShow = document.querySelectorAll(componentClassName);
    const loop = () => {
        elementsToShow.forEach(element => {
            if (isElementInViewport(element)) {
                element.classList.add('is-visible')
            } else {
                element.classList.remove('is-visible')
            }
        });
        scroll(loop)
    }
    loop();
}
