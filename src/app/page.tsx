export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 dark:from-gray-900 dark:to-gray-800">
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Welcome to <span className="text-orange-600 dark:text-orange-400">Le Balcon</span> Restaurant
          </h1>
          
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
            Experience fine dining with a view
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🍽️</div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                Exquisite Cuisine
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Crafted with the finest ingredients and passion
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🌆</div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                Stunning Views
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Enjoy panoramic views while you dine
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">⭐</div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                Premium Service
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Attentive staff dedicated to your experience
              </p>
            </div>
          </div>

          <div className="mt-12">
            <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors shadow-lg hover:shadow-xl">
              Make a Reservation
            </button>
          </div>
        </div>
      </main>

      <footer className="text-center py-8 text-gray-600 dark:text-gray-400">
        <p>© 2026 Le Balcon Restaurant. All rights reserved.</p>
      </footer>
    </div>
  );
}
