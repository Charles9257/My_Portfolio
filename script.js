 

// Smooth scroll for nav links
$(document).on('click', 'a.smooth-menu', function (event) {
    var target = $(this.getAttribute('href'));
    if (target.length) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top - 70
        }, 800, 'easeInOutExpo');
    }
    // Collapse navbar on mobile after click
    if($('.navbar-collapse').hasClass('show')) {
        $('.navbar-collapse').collapse('hide');
    }
});

// Scroll to top button
$(window).scroll(function() {
    if ($(this).scrollTop() > 200) {
        $('#scroll-Top').fadeIn();
    } else {
        $('#scroll-Top').fadeOut();
    }
});
$('#scroll-top').on('click', function() {
    $('html, body').animate({scrollTop: 0}, 800, 'easeInOutExpo');
});

// Owl Carousel for projects or testimonials (if present)
if ($('.owl-carousel').length) {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        dots: true,
        responsive: {
            0: { items: 1 },
            600: { items: 2 },
            1000: { items: 3 }
        }
    });
}


// Animate skill bars on scroll
function animateSkillBars() {
    $('.progress-bar[data-percent]').each(function() {
        var $this = $(this);
        if ($this.visible(true) && !$this.hasClass('animated')) {
            $this.addClass('animated');
            var percent = $this.data('percent');
            $this.animate({ width: percent + '%' }, 1200);
        }
    });
}

// jQuery plugin for element visibility
$.fn.visible = function(partial) {
    var $t = $(this),
        $w = $(window),
        viewTop = $w.scrollTop(),
        viewBottom = viewTop + $w.height(),
        _top = $t.offset().top,
        _bottom = _top + $t.height(),
        compareTop = partial === true ? _bottom : _top,
        compareBottom = partial === true ? _top : _bottom;
    return ((compareBottom <= viewBottom) && (compareTop >= viewTop));
};

$(window).on('scroll resize', animateSkillBars);
$(document).ready(function() {
    animateSkillBars();

    // Projects section: Owl Carousel for transitions
    if ($('.projects .row.g-4').length) {
        // Convert project grid to carousel for mobile/modern look
        var $projectRow = $('.projects .row.g-4');
        if ($(window).width() < 992) {
            if (!$projectRow.hasClass('owl-carousel')) {
                $projectRow.addClass('owl-carousel').removeClass('row g-4');
                $projectRow.owlCarousel({
                    loop: true,
                    margin: 24,
                    nav: true,
                    dots: true,
                    responsive: {
                        0: { items: 1 },
                        600: { items: 2 },
                        1000: { items: 3 }
                    }
                });
            }
        }
    }

    // Profile section: interactive hover overlays
    $('.single-profile').hover(
        function() {
            $(this).find('.single-profile-overlay').fadeIn(200);
        },
        function() {
            $(this).find('.single-profile-overlay').fadeOut(200);
        }
    );
    $('.single-profile-overlay').hide();
});

// Contact form validation and feedback
document.getElementById('submitBtn').addEventListener('click', function (event) {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('comment').value.trim();
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let isValid = true;

    // Validate name
    if (name === '') {
        document.getElementById('nameError').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('nameError').style.display = 'none';
    }
    // Validate email
    if (!emailPattern.test(email)) {
        document.getElementById('emailError').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('emailError').style.display = 'none';
    }
    // Validate subject
    if (subject === '') {
        document.getElementById('subjectError').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('subjectError').style.display = 'none';
    }
    // Validate message
    if (message === '') {
        document.getElementById('messageError').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('messageError').style.display = 'none';
    }
    // If all fields are valid, proceed with form submission
    if (isValid) {
        // Show a success message (modern UX)
        alert('Thank you for contacting me! I will get back to you soon.');
        // Optionally, send email or use mailto
        const mailtoLink = `mailto:charlesugwute3@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent('Name: ' + name + '\n\nMessage: ' + message)}`;
        window.location.href = mailtoLink;
    }
});



