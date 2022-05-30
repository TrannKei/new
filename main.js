
function scrollUp()
{
    const scrollUp = document.querySelector('.scrollup')
    if(this.scrollY >= 200) scrollUp.classList.add('show-scroll')
    else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)