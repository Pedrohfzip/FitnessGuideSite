import { ImageWithFallback } from './figma/ImageWithFallback';

export function Transformation() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-4">
            Real People. Real Results.
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join thousands who have already transformed their bodies and lives with our proven 28-day program
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div className="space-y-6">
            <div className="rounded-2xl bg-orange-50 p-8">
              <p className="text-lg text-gray-700 italic mb-4">
                "I've tried countless fitness programs, but nothing worked until I found this. 
                I lost 18 pounds in 28 days and feel amazing! The best part? I did it all from home."
              </p>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-orange-200 flex items-center justify-center font-bold text-orange-700">
                  SM
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Sarah Mitchell</p>
                  <p className="text-sm text-gray-600">Lost 18 lbs in 28 days</p>
                </div>
              </div>
            </div>
            
            <div className="rounded-2xl bg-orange-50 p-8">
              <p className="text-lg text-gray-700 italic mb-4">
                "As a busy mom of two, I never thought I'd have time to get in shape. 
                This program proved me wrong—only 20 minutes a day and I'm in the best shape of my life!"
              </p>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-orange-200 flex items-center justify-center font-bold text-orange-700">
                  JR
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Jessica Rodriguez</p>
                  <p className="text-sm text-gray-600">Lost 15 lbs in 28 days</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1674834726923-3ba828d37846?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwc3VjY2VzcyUyMHJlc3VsdHN8ZW58MXx8fHwxNzY4OTkxOTc4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Success transformation results"
              className="rounded-2xl shadow-2xl object-cover w-full h-[500px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
