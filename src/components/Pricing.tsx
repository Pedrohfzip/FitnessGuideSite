import { Check, ArrowRight, Clock } from 'lucide-react';

export function Pricing() {
  return (
    <section className="py-20 bg-gradient-to-br from-orange-600 to-orange-700">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Timer/Urgency */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-6 py-3 backdrop-blur">
            <Clock className="h-5 w-5 text-white" />
            <span className="font-semibold text-white">Limited Time Offer - 50% OFF Today Only!</span>
          </div>
        </div>
        
        <div className="rounded-3xl bg-white p-8 shadow-2xl md:p-12">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Start Your Transformation Today
            </h2>
            <p className="text-lg text-gray-600">
              Get instant access to the complete 28-Day Fitness Guide
            </p>
          </div>
          
          {/* Pricing */}
          <div className="text-center mb-8 pb-8 border-b border-gray-200">
            <div className="mb-4">
              <span className="text-2xl text-gray-500 line-through">$97</span>
              <span className="ml-4 text-6xl font-bold text-gray-900">$47</span>
            </div>
            <p className="text-gray-600">One-time payment • Instant digital access</p>
          </div>
          
          {/* What's Included */}
          <div className="mb-8 space-y-4">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">What You Get:</h3>
            {[
              'Complete 28-Day Workout Plan',
              '28-Day Meal Plan with 80+ Recipes',
              'Exercise Demonstration Guide',
              'Progress Tracking Worksheets',
              'Quick Start Guide',
              'Bonus: Supplement Guide ($27 value)',
              'Bonus: Motivation & Mindset Guide ($19 value)',
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="flex-shrink-0 rounded-full bg-green-100 p-1">
                  <Check className="h-5 w-5 text-green-600" />
                </div>
                <p className="text-gray-700">{item}</p>
              </div>
            ))}
          </div>
          
          {/* CTA */}
          <button className="group w-full inline-flex items-center justify-center gap-2 rounded-full bg-orange-600 px-8 py-5 text-xl font-semibold text-white shadow-lg transition-all hover:bg-orange-700 hover:shadow-xl mb-6">
            Get Instant Access for $47
            <ArrowRight className="h-6 w-6 transition-transform group-hover:translate-x-1" />
          </button>
          
          {/* Guarantee */}
          <div className="text-center space-y-4">
            <div className="inline-flex items-center justify-center rounded-full bg-green-100 px-6 py-3">
              <span className="font-semibold text-green-800">✓ 60-Day Money-Back Guarantee</span>
            </div>
            <p className="text-sm text-gray-600">
              Try the program risk-free. If you're not completely satisfied with your results, 
              we'll refund every penny—no questions asked.
            </p>
          </div>
          
          {/* Trust Badges */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <div className="flex items-center justify-center gap-8 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <span>🔒</span>
                <span>Secure Payment</span>
              </div>
              <div className="flex items-center gap-2">
                <span>⚡</span>
                <span>Instant Access</span>
              </div>
              <div className="flex items-center gap-2">
                <span>💯</span>
                <span>Money-Back Guarantee</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom urgency */}
        <p className="text-center mt-8 text-white text-lg">
          <strong>10 people</strong> bought this in the last hour
        </p>
      </div>
    </section>
  );
}
