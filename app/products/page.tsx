import { ShoppingBag } from 'lucide-react';

export const metadata = {
  title: 'Products | Alok Sharma',
  description: 'Digital products - cheatsheets, roadmaps, and bundles for developers.',
};

const products = [
  {
    title: "Coming Soon",
    description: "Exciting digital products are on the way! Stay tuned for developer cheatsheets, roadmaps, and learning bundles.",
    price: null,
    category: "Upcoming",
    available: false,
  },
];

export default function ProductsPage() {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Products</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          Digital resources to help you level up your skills - cheatsheets, roadmaps, and bundles.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg mb-4">
                <ShoppingBag className="text-blue-600 dark:text-blue-400" size={24} />
              </div>
              <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full">
                {product.category}
              </span>
              <h3 className="text-lg font-semibold mt-3 mb-2">{product.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                {product.description}
              </p>
              {product.available ? (
                <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  {product.price ? `Buy - ${product.price}` : 'Get it'}
                </button>
              ) : (
                <button
                  disabled
                  className="w-full px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400 rounded-lg cursor-not-allowed"
                >
                  Coming Soon
                </button>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-gray-50 dark:bg-gray-900/50 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Want to be notified?</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Get notified when new products are available. No spam, just updates.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
