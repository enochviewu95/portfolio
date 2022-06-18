/**
 * It changes the background color of the navbar, the color of the text and the logo when the user
 * scrolls down the page.
 */
export const navbarScrollerBackgroundChange = ({ setImageUrl, logoBlack, logoWhite }) => {
    window.addEventListener('scroll', () => {
        document.querySelector('nav').classList.toggle('bg-light', window.scrollY > 0);
        document.querySelector('nav').classList.toggle('bg-opacity-75', window.scrollY > 0);
        document.querySelector('.btn').classList.toggle('text-dark', window.scrollY > 0);

        document.querySelectorAll('.nav-link').forEach(element => {
            element.classList.toggle('text-dark', window.scrollY > 0)
        })

        if (window.scrollY > 0) {
            setImageUrl(logoBlack)
        } else {
            setImageUrl(logoWhite)
        }
    })
}