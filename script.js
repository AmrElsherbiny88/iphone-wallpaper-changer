window.onload = function () {
    document.querySelector('.workspace').classList.add('active')
}

const gallery = document.querySelectorAll('.gallery-content__img'),
    mobileBody = document.querySelector('.mobile-body'),
    bg = document.querySelector('.bg-content')

gallery.forEach(g => {
    g.addEventListener('click', function () {
        const imgSrc = this.dataset.img,
            activeGallery = document.querySelector('.gallery-content__img.active')

        activeGallery.classList.remove('active')
        this.classList.add('active')
        bg.style.backgroundImage = `url('${imgSrc}')`
        mobileBody.style.backgroundImage = `url('${imgSrc}')`
    })
})