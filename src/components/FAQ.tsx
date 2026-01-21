import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'Do I need any equipment?',
    answer: 'No! The program is designed to be done with just your bodyweight. However, if you have dumbbells or resistance bands, we include variations to make workouts more challenging.',
  },
  {
    question: 'What if I\'m a complete beginner?',
    answer: 'Perfect! This program is designed for all fitness levels. Each exercise includes modifications for beginners, and you can progress at your own pace.',
  },
  {
    question: 'How long are the workouts?',
    answer: 'Each workout takes 15-30 minutes. They\'re designed to be efficient and effective, so you can fit them into even the busiest schedule.',
  },
  {
    question: 'Will I really see results in 28 days?',
    answer: 'Yes! When you follow the program consistently, you can expect to lose 10-20 pounds, build lean muscle, and feel significantly more energized. Our 10,000+ success stories speak for themselves.',
  },
  {
    question: 'What if I have dietary restrictions?',
    answer: 'The meal plan includes vegetarian options and notes for common allergens. You can easily substitute ingredients to match your dietary needs while still getting great results.',
  },
  {
    question: 'Is this a monthly subscription?',
    answer: 'No! This is a one-time payment of $47. You get lifetime access to all materials with no recurring charges.',
  },
  {
    question: 'What format is the program delivered in?',
    answer: 'You\'ll get instant access to download the complete guide as a PDF. You can view it on any device or print it out—whatever works best for you.',
  },
  {
    question: 'What if it doesn\'t work for me?',
    answer: 'We offer a 60-day money-back guarantee. If you\'re not satisfied for any reason, just email us and we\'ll refund your full purchase—no questions asked.',
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-gray-50">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Got questions? We've got answers.
          </p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="rounded-xl bg-white shadow-sm overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-8">{faq.question}</h3>
                <ChevronDown
                  className={`h-5 w-5 flex-shrink-0 text-gray-500 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
