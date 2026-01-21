import { CheckCircle2 } from 'lucide-react';

const benefits = [
  'Lose 10-20 pounds in just 28 days',
  'Build lean, toned muscle',
  'Boost your energy levels',
  'Feel confident in your own skin',
  'No gym membership required',
  'Works for any fitness level',
];

export function Benefits() {
  return (
    <section className="bg-gray-900 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            What You'll Achieve in Just 28 Days
          </h2>
        </div>
        
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center gap-3 rounded-xl bg-gray-800 p-6">
              <CheckCircle2 className="h-6 w-6 flex-shrink-0 text-green-500" />
              <p className="text-lg text-white">{benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
