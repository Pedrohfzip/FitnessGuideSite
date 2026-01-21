import { Dumbbell, Apple, Calendar, Video, Users, Trophy } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const features = [
  {
    icon: Dumbbell,
    title: 'Daily Workouts',
    description: '28 days of progressive workouts that take just 15-30 minutes. No equipment needed!',
  },
  {
    icon: Apple,
    title: 'Meal Plans',
    description: 'Simple, delicious meal plans with easy-to-follow recipes. No calorie counting required.',
  },
  {
    icon: Calendar,
    title: 'Day-by-Day Guide',
    description: 'Know exactly what to do each day. No guesswork, no confusion—just follow the plan.',
  },
  {
    icon: Video,
    title: 'Exercise Demonstrations',
    description: 'Clear photos and instructions for every exercise so you always know proper form.',
  },
  {
    icon: Users,
    title: 'For All Fitness Levels',
    description: 'Whether you\'re a beginner or experienced, this program adapts to your level.',
  },
  {
    icon: Trophy,
    title: 'Progress Tracker',
    description: 'Track your measurements, weight, and progress throughout your 28-day journey.',
  },
];

export function Features() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-4">
            Everything You Need to Succeed
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            This isn't just another fitness PDF. It's a complete transformation system that gives you 
            everything you need to achieve the body you've always wanted.
          </p>
        </div>
        
        <div className="grid gap-8 lg:grid-cols-2 items-center mb-16">
          <div>
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1627257058769-0a99529e4312?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3Jrb3V0JTIwaG9tZSUyMGV4ZXJjaXNlfGVufDF8fHx8MTc2ODg3MzQ3OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Home workout exercise"
              className="rounded-2xl shadow-xl object-cover w-full h-[500px]"
            />
          </div>
          <div>
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1543352632-5a4b24e4d2a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwbWVhbCUyMHByZXB8ZW58MXx8fHwxNzY4OTcxNzU4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Healthy meal preparation"
              className="rounded-2xl shadow-xl object-cover w-full h-[500px]"
            />
          </div>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div key={index} className="rounded-2xl bg-white p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="mb-4 inline-flex rounded-xl bg-orange-100 p-3">
                <feature.icon className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
