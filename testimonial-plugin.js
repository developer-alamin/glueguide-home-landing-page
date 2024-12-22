$(document).ready(function () {
    let currentIndex = 0;
    const testimonials = $('.testimonial');
    const totalTestimonials = testimonials.length;
    const $testimonialsContainer = $('.testimonials-container');
  
    // Function to update the slider and active class
    function updateSlider(index) {
      // Remove the active class from all testimonials
      testimonials.removeClass('active');
  
      // Move the testimonials container to the right position
      const offset = -index * 100; // Each testimonial takes 100% of the width
      $testimonialsContainer.css('transform', 'translateX(' + offset + '%)');
  
      // Add the active class to the current testimonial
      testimonials.eq(index).addClass('active');
    }
  
    // Show the next testimonial
    $('.next-btn').click(function () {
      currentIndex = (currentIndex + 1) % totalTestimonials; // Loop back to first testimonial when reaching the last
      updateSlider(currentIndex);
    });
  
    // Show the previous testimonial
    $('.prev-btn').click(function () {
      currentIndex = (currentIndex - 1 + totalTestimonials) % totalTestimonials; // Loop back to last testimonial when reaching the first
      updateSlider(currentIndex);
    });
  
    // Initial load
    updateSlider(currentIndex);
  });
  