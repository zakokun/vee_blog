const lightbox = document.querySelector('.image-lightbox');
const lightboxImage = document.querySelector('.image-lightbox-media');
const closeButton = document.querySelector('.image-lightbox-close');
const postImages = document.querySelectorAll('.post-body img');

if (lightbox && lightboxImage && closeButton && postImages.length > 0) {
    const openLightbox = (image) => {
        const fullSrc = image.currentSrc || image.src;
        lightboxImage.src = fullSrc;
        lightboxImage.alt = image.alt || '';
        lightbox.hidden = false;
        lightbox.setAttribute('aria-hidden', 'false');
        document.body.classList.add('lightbox-open');
    };

    const closeLightbox = () => {
        lightbox.hidden = true;
        lightbox.setAttribute('aria-hidden', 'true');
        lightboxImage.src = '';
        lightboxImage.alt = '';
        document.body.classList.remove('lightbox-open');
    };

    postImages.forEach((image) => {
        image.classList.add('post-image-zoomable');
        image.setAttribute('tabindex', '0');
        image.setAttribute('role', 'button');
        image.setAttribute('aria-label', image.alt ? `Expand image: ${image.alt}` : 'Expand image');

        image.addEventListener('click', () => openLightbox(image));
        image.addEventListener('keydown', (event) => {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                openLightbox(image);
            }
        });
    });

    closeButton.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (event) => {
        if (event.target === lightbox) {
            closeLightbox();
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && !lightbox.hidden) {
            closeLightbox();
        }
    });
}
