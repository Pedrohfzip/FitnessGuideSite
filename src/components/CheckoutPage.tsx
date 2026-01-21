import { useState, useEffect } from 'react';
import { Check, X, Lock, Download, Star, Clock, ArrowRight, Shield, Zap, Trophy } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function CheckoutPage() {
  const [timeLeft, setTimeLeft] = useState({ minutes: 15, seconds: 0 });
  const [selectedPackage, setSelectedPackage] = useState<'basic' | 'complete'>('complete');

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { minutes: prev.minutes - 1, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

 return (
    <div className="min-h-screen justi bg-gray-50">

      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">28-Day Fitness Transformation</h1>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Lock className="h-4 w-4" />
              <span>Secure Checkout</span>
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Urgency Banner */}
        <div className="mb-8 rounded-2xl bg-gradient-to-r from-yellow-600 to-orange-600 p-6 text-center shadow-xl">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Clock className="h-6 w-6 text-white" />
            <h2 className="text-2xl font-bold text-white">Special Offer Expires In:</h2>
          </div>
          <div className="flex items-center justify-center gap-4 text-white">
            <div className="rounded-lg bg-white/20 px-6 py-3 backdrop-blur">
              <div className="text-4xl font-bold">{String(timeLeft.minutes).padStart(2, '0')}</div>
              <div className="text-sm">Minutes</div>
            </div>
            <div className="text-3xl">:</div>
            <div className="rounded-lg bg-white/20 px-6 py-3 backdrop-blur">
              <div className="text-4xl font-bold">{String(timeLeft.seconds).padStart(2, '0')}</div>
              <div className="text-sm">Seconds</div>
            </div>
          </div>
          <p className="mt-4 text-lg text-white font-semibold">
            🔥 67% OFF ends soon - Don't miss out on this limited-time deal!
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 justify-center">
          {/* Left Column - Product Info */}
          <div className="flex flex-col lg:col-span-2 space-y-6">
            {/* Hero Image */}
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758274526138-4da003a5a936?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwdHJhbnNmb3JtYXRpb24lMjB3b21hbnxlbnwxfHx8fDE3Njg5OTE5Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Fitness transformation"
                className="w-full h-[400px] object-cover"
              />
            </div>

            {/* Main Headline */}
            <div className="rounded-2xl bg-white p-8 shadow-lg">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Transform Your Body in Just 28 Days - Guaranteed!
              </h1>
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Get the complete step-by-step fitness system that's helped over 10,000 people lose weight, 
                build lean muscle, and feel amazing—without spending hours at the gym.
              </p>
              
              <div className="flex items-center gap-2 mb-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="font-semibold text-gray-900">4.9/5</span>
                <span className="text-gray-600">(2,847 reviews)</span>
              </div>

              <div className="flex items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <Download className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Instant Digital Download</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-700">60-Day Guarantee</span>
                </div>
              </div>
            </div>

            {/* What You Get */}
            <div className="rounded-2xl bg-white p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">What's Included:</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  '28-Day Progressive Workout Plan',
                  'Complete Meal Plan & Recipes',
                  'Exercise Demonstration Guide',
                  'Progress Tracking System',
                  'Supplement Recommendations',
                  'Motivation & Mindset Guide',
                  'Quick Start Guide',
                  'Lifetime Access & Updates',
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 rounded-full bg-green-100 p-1 mt-0.5">
                      <Check className="h-4 w-4 text-green-600" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonials */}
            <div className="rounded-2xl bg-gradient-to-br from-orange-50 to-white p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Real Results From Real People:</h2>
              <div className="space-y-6">
                {[
                  {
                    name: 'Sarah M.',
                    result: 'Lost 18 lbs',
                    text: 'I never thought losing weight could be this easy! The workouts are quick and effective, and I actually enjoyed the meals. Best investment I\'ve made in myself!',
                  },
                  {
                    name: 'Michael T.',
                    result: 'Lost 22 lbs',
                    text: 'This program changed my life. I\'m stronger, more confident, and my energy levels are through the roof. Worth every penny!',
                  },
                  {
                    name: 'Emily C.',
                    result: 'Lost 14 lbs',
                    text: 'As a busy mom, I thought I\'d never have time to get in shape. This program proved me wrong. I did it all from home in just 20 minutes a day!',
                  },
                ].map((testimonial, index) => (
                  <div key={index} className="rounded-xl bg-white p-6 shadow-sm">
                    <div className="flex gap-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                    <div className="flex items-center justify-between">
                      <p className="font-semibold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm font-medium text-orange-600">{testimonial.result}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Guarantee */}
            <div className="rounded-2xl bg-green-50 border-2 border-green-200 p-8 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 rounded-full bg-green-600 p-3">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    100% Money-Back Guarantee
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    We're so confident you'll love your results that we offer a full 60-day money-back guarantee. 
                    If you're not completely satisfied for ANY reason, just send us an email and we'll refund 
                    every penny—no questions asked. You have absolutely nothing to lose!
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Checkout */}
          <div className="flex flex-col lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Package Selection */}
              <div className="rounded-2xl bg-white p-6 shadow-xl border-2 border-orange-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Choose Your Package:</h3>
                
                {/* Complete Package */}
                <button
                  onClick={() => setSelectedPackage('complete')}
                  className={`w-full rounded-xl border-2 p-6 text-left transition-all mb-4 ${
                    selectedPackage === 'complete'
                      ? 'border-orange-600 bg-orange-50'
                      : 'border-gray-200 hover:border-orange-300'
                  }`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="inline-flex items-center gap-2 rounded-full bg-orange-600 px-3 py-1 mb-2">
                        <Trophy className="h-4 w-4 text-white" />
                        <span className="text-xs font-bold text-white">BEST VALUE</span>
                      </div>
                      <h4 className="text-lg font-bold text-gray-900">Complete Package</h4>
                      <p className="text-sm text-gray-600">Everything + Bonuses</p>
                    </div>
                    <div className={`h-6 w-6 rounded-full border-2 flex items-center justify-center ${
                      selectedPackage === 'complete' ? 'border-orange-600 bg-orange-600' : 'border-gray-300'
                    }`}>
                      {selectedPackage === 'complete' && <Check className="h-4 w-4 text-white" />}
                    </div>
                  </div>
                  <div className="space-y-2 mb-3">
                    {[
                      '28-Day Program',
                      'Meal Plans & Recipes',
                      'Exercise Guide',
                      '2 Bonus Guides ($46 value)',
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-gray-700">
                        <Check className="h-4 w-4 text-green-600 flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-gray-900">$47</span>
                    <span className="text-lg text-gray-500 line-through">$143</span>
                    <span className="text-sm font-semibold text-green-600">Save $96!</span>
                  </div>
                </button>

                {/* Basic Package */}
                <button
                  onClick={() => setSelectedPackage('basic')}
                  className={`w-full rounded-xl border-2 p-6 text-left transition-all ${
                    selectedPackage === 'basic'
                      ? 'border-orange-600 bg-orange-50'
                      : 'border-gray-200 hover:border-orange-300'
                  }`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="text-lg font-bold text-gray-900">Basic Package</h4>
                      <p className="text-sm text-gray-600">Core Program Only</p>
                    </div>
                    <div className={`h-6 w-6 rounded-full border-2 flex items-center justify-center ${
                      selectedPackage === 'basic' ? 'border-orange-600 bg-orange-600' : 'border-gray-300'
                    }`}>
                      {selectedPackage === 'basic' && <Check className="h-4 w-4 text-white" />}
                    </div>
                  </div>
                  <div className="space-y-2 mb-3">
                    {[
                      '28-Day Workout Plan',
                      'Basic Meal Guidelines',
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-gray-700">
                        <Check className="h-4 w-4 text-green-600 flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                    {[
                      'No Exercise Guide',
                      'No Bonus Materials',
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-gray-400">
                        <X className="h-4 w-4 flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-gray-900">$27</span>
                    <span className="text-lg text-gray-500 line-through">$97</span>
                  </div>
                </button>
              </div>

              {/* Order Summary */}
              <div className="rounded-2xl bg-white p-6 shadow-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Order Summary</h3>
                <div className="space-y-3 mb-4 pb-4 border-b border-gray-200">
                  <div className="flex justify-between">
                    <span className="text-gray-700">
                      {selectedPackage === 'complete' ? 'Complete Package' : 'Basic Package'}
                    </span>
                    <span className="font-semibold text-gray-900">
                      ${selectedPackage === 'complete' ? '47' : '27'}
                    </span>
                  </div>
                  <div className="flex justify-between text-green-600">
                    <span>Special Discount</span>
                    <span className="font-semibold">
                      -${selectedPackage === 'complete' ? '96' : '70'}
                    </span>
                  </div>
                </div>
                <div className="flex justify-between text-xl font-bold text-gray-900 mb-6">
                  <span>Total Today:</span>
                  <span className="text-orange-600">
                    ${selectedPackage === 'complete' ? '47' : '27'}
                  </span>
                </div>

                {/* CTA Button */}
                <button className="w-full group rounded-xl bg-gradient-to-r from-orange-600 to-orange-700 px-8 py-5 text-lg font-bold text-white shadow-lg transition-all hover:shadow-xl hover:scale-[1.02] mb-4">
                  <div className="flex items-center justify-center gap-2">
                    <Lock className="h-5 w-5" />
                    <span>Complete Secure Checkout</span>
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </div>
                </button>

                <div className="space-y-3 text-sm text-gray-600">
                  <div className="flex items-center justify-center gap-2">
                    <Zap className="h-4 w-4 text-orange-600" />
                    <span>Instant access after purchase</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Shield className="h-4 w-4 text-green-600" />
                    <span>Secure 256-bit SSL encryption</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Check className="h-4 w-4 text-blue-600" />
                    <span>60-day money-back guarantee</span>
                  </div>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="rounded-xl bg-gray-50 p-6 text-center">
                <p className="text-sm text-gray-600 mb-3">Trusted by 10,000+ customers</p>
                <div className="flex items-center justify-center gap-4 text-xs text-gray-500">
                  <div className="flex items-center gap-1">
                    <div className="h-6 w-6 rounded bg-gray-300" />
                    <span>Visa</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="h-6 w-6 rounded bg-gray-300" />
                    <span>Mastercard</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="h-6 w-6 rounded bg-gray-300" />
                    <span>PayPal</span>
                  </div>
                </div>
              </div>

              {/* Social Proof */}
              <div className="rounded-xl bg-orange-50 border border-orange-200 p-4 text-center">
                <p className="text-sm font-semibold text-orange-900">
                  🔥 <strong>23 people</strong> purchased in the last hour
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
