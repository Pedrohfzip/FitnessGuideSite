import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Michael Thompson',
    result: 'Lost 22 lbs',
    rating: 5,
    text: 'I was skeptical at first, but this program delivered beyond my expectations. The workouts are challenging but doable, and the meal plans are actually delicious. Down 22 pounds!',
  },
  {
    name: 'Emily Chen',
    result: 'Lost 14 lbs',
    rating: 5,
    text: 'Finally, a program that actually works! I love that I can do everything at home. My clothes fit better, I have more energy, and I feel like a new person.',
  },
  {
    name: 'David Martinez',
    result: 'Lost 19 lbs',
    rating: 5,
    text: 'This is the most straightforward fitness program I\'ve ever tried. No fluff, just results. I\'m stronger, leaner, and more confident than ever before.',
  },
  {
    name: 'Amanda White',
    result: 'Lost 16 lbs',
    rating: 5,
    text: 'As someone who\'s tried every diet and workout under the sun, I can honestly say this is different. It\'s sustainable, effective, and easy to follow. Highly recommend!',
  },
  {
    name: 'James Wilson',
    result: 'Lost 25 lbs',
    rating: 5,
    text: 'Game changer! I was able to lose 25 pounds while still eating foods I enjoy. The program taught me how to make better choices without feeling deprived.',
  },
  {
    name: 'Lisa Anderson',
    result: 'Lost 13 lbs',
    rating: 5,
    text: 'I never thought I could stick to a fitness program for 28 days, but this one made it easy. The results speak for themselves—I feel amazing!',
  },
];

export function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-4">
            Join 10,000+ Success Stories
          </h2>
          <p className="text-xl text-gray-600">
            See what our customers are saying about their transformations
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4 flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-6">{testimonial.text}</p>
              <div className="border-t border-gray-200 pt-4">
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-orange-600 font-medium">{testimonial.result}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
