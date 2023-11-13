
$( document ).ready(function() {

    $('.about ul li a').click((e) => {
        e.preventDefault();
        $('.contents').hide();
        $('.about ul li a').removeClass('active').addClass('not-active');
        
        e.target.classList.remove('not-active');
        e.target.classList.add('active');
        
        switch(true) {
            case e.target.textContent == 'About me': $('.about-content').show();
            break;
            case e.target.textContent == 'Resume': $('.resume-content').show();
            break;
            case e.target.textContent == 'Testimonials': $('.testimon-content').show();
            break;
            case e.target.textContent == 'Contact': $('.contact-content').show();
            break;
        }
    });
});