import { ArrowRight, Star } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Link } from 'react-router-dom';
export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-white to-orange-50">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-sm font-medium text-orange-700">
              <Star className="h-4 w-4 fill-orange-500 text-orange-500" />
              <span>Over 10,000+ Success Stories</span>
            </div>
            
            <h1 className="text-5xl font-bold leading-tight text-gray-900 sm:text-6xl lg:text-7xl">
              Transform Your Body in Just{' '}
              <span className="text-orange-600">28 Days</span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              Get the exact step-by-step fitness guide that helped thousands of people lose weight, 
              build muscle, and feel incredible—without endless hours at the gym.
            </p>
            
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link to="/sellPage" className="group inline-flex items-center justify-center gap-2 rounded-full bg-orange-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:bg-orange-700 hover:shadow-xl">
                Get Instant Access Now
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <p className="text-sm text-gray-500">
                ⚡ Instant digital download • 60-day money-back guarantee
              </p>
            </div>
            
            {/* Social Proof */}
            <div className="flex items-center gap-8 pt-4">
              <div>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="mt-1 text-sm text-gray-600">
                  <strong>4.9/5</strong> from 2,847 reviews
                </p>
              </div>
              <div className="h-12 w-px bg-gray-300" />
              <div>
                <p className="text-2xl font-bold text-gray-900">10,000+</p>
                <p className="text-sm text-gray-600">Happy Customers</p>
              </div>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-orange-400 to-orange-600 opacity-20 blur-3xl" />
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1758274526138-4da003a5a936?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwdHJhbnNmb3JtYXRpb24lMjB3b21hbnxlbnwxfHx8fDE3Njg5OTE5Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Fitness transformation results"
              className="relative rounded-3xl shadow-2xl object-cover w-full h-[600px]"
            />
            {/* Floating Stats */}
            <div className="absolute bottom-8 left-8 right-8 grid grid-cols-3 gap-4">
              <div className="rounded-xl bg-white/95 p-4 text-center shadow-lg backdrop-blur">
                <p className="text-2xl font-bold text-orange-600">28</p>
                <p className="text-xs text-gray-600">Days</p>
              </div>
              <div className="rounded-xl bg-white/95 p-4 text-center shadow-lg backdrop-blur">
                <p className="text-2xl font-bold text-orange-600">15-30</p>
                <p className="text-xs text-gray-600">Min/Day</p>
              </div>
              <div className="rounded-xl bg-white/95 p-4 text-center shadow-lg backdrop-blur">
                <p className="text-2xl font-bold text-orange-600">100%</p>
                <p className="text-xs text-gray-600">Results</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
