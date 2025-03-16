import './style.css'
import TestimonialCard from './TestimonialCard';

function Testimonials() {
  return (
    <>
      <main id="testimonial-main">
        <h1 id="testimonials-h1">Testimonials</h1>
        <section id="testimonial-section">
          <TestimonialCard
            image="/site-images/logos/LemonGreen.png"
            starCount={5}
            review="The food at Little Lemon was amazing! Fresh ingredients and authentic flavors. I'll definitely be coming back for more of their delicious dishes."
            name="Sarah Johnson"
          />
          <TestimonialCard
            image="/site-images/logos/LemonGreen.png"
            starCount={4}
            review="As a lover of Mediterranean cuisine, I was blown away by the freshness of Little Lemon’s dishes. The Greek salad had the perfect balance of flavors, and the homemade focaccia was simply divine. I’ll definitely be back for more!."
            name="Jack Bananas"
          />
          <TestimonialCard
            image="/site-images/logos/LemonGreen.png"
            starCount={3}
            review="I stumbled upon Little Lemon while exploring the neighborhood, and I’m so glad I did! The cozy atmosphere and friendly staff made me feel welcome, and their lemon-infused pasta was one of the best meals I’ve had in a long time."
            name="Mario Brother"
          />
          <TestimonialCard
            image="/site-images/logos/LemonGreen.png"
            starCount={5}
            review="I took my girlfriend here for our anniversary, and it was magical. The candlelit ambiance, the soft Italian music, and the delicious wine selection made it a night to remember. Little Lemon truly captures the heart of Italian dining."
            name="Luigi Johanson"
          />
        </section>
      </main>
    </>
  );
}

export default Testimonials;