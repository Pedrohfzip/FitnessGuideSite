export function Footer() {
  return (
    <footer className="bg-gray-900 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4">
          <h3 className="text-2xl font-bold text-white">28-Day Fitness Transformation</h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Transform your body, boost your confidence, and feel amazing in just 28 days. 
            Join thousands who have already achieved incredible results.
          </p>
          <div className="pt-8 border-t border-gray-800">
            <p className="text-sm text-gray-500">
              © 2026 28-Day Fitness Transformation. All rights reserved.
            </p>
            <div className="mt-4 flex items-center justify-center gap-6 text-sm text-gray-500">
              <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
              <span>•</span>
              <a href="#" className="hover:text-gray-300 transition-colors">Terms of Service</a>
              <span>•</span>
              <a href="#" className="hover:text-gray-300 transition-colors">Contact</a>
            </div>
          </div>
          <div className="pt-6">
            <p className="text-xs text-gray-600">
              Disclaimer: Results may vary. Individual results depend on consistency and effort. 
              Consult with a healthcare professional before starting any fitness program.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
