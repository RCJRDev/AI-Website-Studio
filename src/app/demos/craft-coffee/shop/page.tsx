'use client'

import Link from 'next/link'
import { useState } from 'react'
import { motion } from 'framer-motion'

const coffees = [
  {
    id: 1,
    name: 'Ethiopian Yirgacheffe',
    origin: 'Gedeo Zone, Ethiopia',
    flavor: 'Bright, floral, citrus notes with a wine-like finish',
    roast: 'Light',
    price: 18,
    category: 'single-origin',
    gradient: 'from-amber-600 to-amber-800',
  },
  {
    id: 2,
    name: 'Colombian Supremo',
    origin: 'Huila Region, Colombia',
    flavor: 'Balanced, nutty, caramel sweetness with mild acidity',
    roast: 'Medium',
    price: 16,
    category: 'single-origin',
    gradient: 'from-amber-700 to-yellow-600',
  },
  {
    id: 3,
    name: 'Sumatra Mandheling',
    origin: 'North Sumatra, Indonesia',
    flavor: 'Earthy, full-bodied, hints of dark chocolate',
    roast: 'Dark',
    price: 17,
    category: 'single-origin',
    gradient: 'from-amber-900 to-amber-700',
  },
  {
    id: 4,
    name: 'Guatemala Antigua',
    origin: 'Antigua Valley, Guatemala',
    flavor: 'Smoky, spicy, full body with cocoa undertones',
    roast: 'Medium-Dark',
    price: 17,
    category: 'single-origin',
    gradient: 'from-orange-700 to-amber-600',
  },
  {
    id: 5,
    name: 'Kenya AA',
    origin: 'Nyeri County, Kenya',
    flavor: 'Bold, berry-forward, sparkling acidity',
    roast: 'Light-Medium',
    price: 19,
    category: 'single-origin',
    gradient: 'from-red-700 to-amber-600',
  },
  {
    id: 6,
    name: 'House Blend',
    origin: 'Multi-Origin Blend',
    flavor: 'Smooth, balanced, everyday drinking coffee',
    roast: 'Medium',
    price: 14,
    category: 'blend',
    gradient: 'from-stone-600 to-stone-800',
  },
  {
    id: 7,
    name: 'Espresso Roast',
    origin: 'Brazil & Ethiopia Blend',
    flavor: 'Rich, syrupy body, notes of chocolate and citrus',
    roast: 'Medium-Dark',
    price: 16,
    category: 'blend',
    gradient: 'from-stone-700 to-amber-800',
  },
  {
    id: 8,
    name: 'Decaf Colombia',
    origin: 'Nariño, Colombia',
    flavor: 'Sweet, mild, hints of brown sugar and apple',
    roast: 'Medium',
    price: 17,
    category: 'decaf',
    gradient: 'from-teal-700 to-emerald-600',
  },
]

const categories = [
  { id: 'all', name: 'All Coffees', count: 8 },
  { id: 'single-origin', name: 'Single Origin', count: 5 },
  { id: 'blend', name: 'Blends', count: 2 },
  { id: 'decaf', name: 'Decaf', count: 1 },
]

const grindOptions = ['Whole Bean', 'Coarse (French Press)', 'Medium (Drip)', 'Fine (Espresso)']

export default function CraftCoffeeShop() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [selectedGrind, setSelectedGrind] = useState('Whole Bean')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [cartCount, setCartCount] = useState(0)

  const filteredCoffees = activeCategory === 'all'
    ? coffees
    : coffees.filter(c => c.category === activeCategory)

  const addToCart = () => {
    setCartCount(prev => prev + 1)
  }

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-40 bg-stone-900/95 backdrop-blur-sm text-white border-b border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/demos/craft-coffee" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-full bg-amber-600 flex items-center justify-center group-hover:bg-amber-500 transition-colors">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375" />
                </svg>
              </div>
              <span className="text-xl font-bold tracking-tight">Craft Coffee Roasters</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <Link href="/demos/craft-coffee" className="text-stone-300 hover:text-white transition-colors">Home</Link>
              <Link href="/demos/craft-coffee/shop" className="text-amber-400 font-medium">Shop</Link>
              <Link href="/demos/craft-coffee#subscribe" className="text-stone-300 hover:text-white transition-colors">Subscribe</Link>
              <Link href="/demos/craft-coffee#about" className="text-stone-300 hover:text-white transition-colors">Our Story</Link>
            </div>

            <div className="flex items-center gap-4">
              <button className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-amber-600 text-white rounded-lg hover:bg-amber-500 transition-colors font-medium relative">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                Cart ({cartCount})
              </button>

              {/* Mobile menu button */}
              <button
                type="button"
                className="md:hidden p-2 text-stone-300 hover:text-white"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle navigation menu"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  {mobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-stone-800">
              <div className="flex flex-col gap-4">
                <Link href="/demos/craft-coffee" className="text-stone-300 hover:text-white transition-colors">Home</Link>
                <Link href="/demos/craft-coffee/shop" className="text-amber-400 font-medium">Shop</Link>
                <Link href="/demos/craft-coffee#subscribe" className="text-stone-300 hover:text-white transition-colors">Subscribe</Link>
                <Link href="/demos/craft-coffee#about" className="text-stone-300 hover:text-white transition-colors">Our Story</Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Page Header */}
      <section className="bg-stone-900 text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl"
          >
            <nav aria-label="Breadcrumb" className="mb-4">
              <ol className="flex items-center gap-2 text-sm text-stone-400">
                <li><Link href="/demos/craft-coffee" className="hover:text-white transition-colors">Home</Link></li>
                <li><span aria-hidden="true">/</span></li>
                <li className="text-white">Shop</li>
              </ol>
            </nav>
            <h1 className="text-4xl sm:text-5xl font-bold">Shop Our Coffees</h1>
            <p className="mt-4 text-lg text-stone-300 leading-relaxed">
              Every bag is roasted to order and shipped within 24 hours. Experience the difference of truly fresh coffee.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Shop Content */}
      <section className="py-12" aria-labelledby="products-heading">
        <h2 id="products-heading" className="sr-only">Products</h2>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <aside className="lg:w-64 flex-shrink-0">
              <div className="bg-white rounded-xl p-6 shadow-sm lg:sticky lg:top-20">
                <h3 className="font-semibold text-stone-900 mb-4">Categories</h3>
                <div className="space-y-1" role="listbox" aria-label="Filter by category">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`w-full text-left px-4 py-2.5 rounded-lg transition-colors flex items-center justify-between ${
                        activeCategory === category.id
                          ? 'bg-amber-100 text-amber-800 font-medium'
                          : 'text-stone-600 hover:bg-stone-100'
                      }`}
                      role="option"
                      aria-selected={activeCategory === category.id}
                    >
                      <span>{category.name}</span>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${
                        activeCategory === category.id
                          ? 'bg-amber-200 text-amber-800'
                          : 'bg-stone-100 text-stone-500'
                      }`}>
                        {category.count}
                      </span>
                    </button>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-stone-200">
                  <label htmlFor="grind-select" className="block font-semibold text-stone-900 mb-3">Default Grind</label>
                  <select
                    id="grind-select"
                    value={selectedGrind}
                    onChange={(e) => setSelectedGrind(e.target.value)}
                    className="w-full px-4 py-2.5 border border-stone-300 rounded-lg text-stone-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                  >
                    {grindOptions.map((grind) => (
                      <option key={grind} value={grind}>{grind}</option>
                    ))}
                  </select>
                </div>

                <div className="mt-8 pt-6 border-t border-stone-200">
                  <div className="bg-gradient-to-br from-amber-50 to-amber-100/50 rounded-xl p-5 border border-amber-200/50">
                    <p className="text-amber-900 font-semibold">Subscribe & Save</p>
                    <p className="text-amber-700 text-sm mt-1.5 leading-relaxed">Get up to 15% off with a subscription. Free shipping included.</p>
                    <Link
                      href="/demos/craft-coffee#subscribe"
                      className="mt-4 w-full py-2.5 bg-amber-600 text-white rounded-lg text-sm font-medium hover:bg-amber-500 transition-colors inline-block text-center"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </aside>

            {/* Product Grid */}
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                <p className="text-stone-600">
                  Showing <span className="font-medium text-stone-900">{filteredCoffees.length}</span> coffees
                </p>
                <div>
                  <label htmlFor="sort-select" className="sr-only">Sort products</label>
                  <select
                    id="sort-select"
                    className="px-4 py-2.5 border border-stone-300 rounded-lg text-stone-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 bg-white"
                  >
                    <option>Sort by: Featured</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Name: A-Z</option>
                  </select>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredCoffees.map((coffee, index) => (
                  <motion.article
                    key={coffee.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 group"
                  >
                    <div className={`aspect-square bg-gradient-to-br ${coffee.gradient} relative`}>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <svg className="w-12 h-12 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375" />
                          </svg>
                        </div>
                      </div>
                      <span className="absolute top-4 right-4 px-3 py-1.5 bg-white/95 rounded-full text-xs font-medium text-stone-700 shadow-sm">
                        {coffee.roast}
                      </span>
                    </div>
                    <div className="p-5">
                      <p className="text-xs text-amber-600 font-medium tracking-wide">{coffee.origin}</p>
                      <h3 className="font-bold text-stone-900 mt-1 text-lg">{coffee.name}</h3>
                      <p className="mt-2 text-stone-500 text-sm line-clamp-2 leading-relaxed">{coffee.flavor}</p>
                      <div className="mt-5 flex items-center justify-between">
                        <div>
                          <span className="text-xl font-bold text-stone-900">${coffee.price}</span>
                          <span className="text-stone-500 text-sm ml-1">/ 12oz</span>
                        </div>
                        <button
                          onClick={addToCart}
                          className="p-2.5 bg-stone-900 text-white rounded-lg hover:bg-stone-800 transition-colors"
                          aria-label={`Add ${coffee.name} to cart`}
                        >
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subscription Banner */}
      <section className="py-16 bg-stone-900" aria-labelledby="subscription-banner-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-white">
              <h2 id="subscription-banner-heading" className="text-3xl font-bold">Never run out of coffee</h2>
              <p className="mt-4 text-stone-300 leading-relaxed">
                Set up a subscription and get your favorite coffee delivered on your schedule. Customize your grind, adjust frequency, skip or cancel anytime.
              </p>
              <ul className="mt-6 space-y-3" role="list">
                {['Up to 15% off every order', 'Free shipping always', 'Exclusive subscriber roasts'].map((benefit) => (
                  <li key={benefit} className="flex items-center gap-3 text-stone-300">
                    <svg className="w-5 h-5 text-amber-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-center md:justify-end">
              <Link
                href="/demos/craft-coffee#subscribe"
                className="px-8 py-4 bg-amber-600 text-white rounded-lg hover:bg-amber-500 transition-colors font-semibold text-lg shadow-lg shadow-amber-900/30"
              >
                Start Your Subscription
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 text-white py-12 border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link href="/demos/craft-coffee" className="flex items-center gap-3 group">
              <div className="w-8 h-8 rounded-full bg-amber-600 flex items-center justify-center group-hover:bg-amber-500 transition-colors">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375" />
                </svg>
              </div>
              <span className="font-semibold">Craft Coffee Roasters</span>
            </Link>
            <p className="text-stone-500 text-sm">
              © {new Date().getFullYear()} Craft Coffee Roasters
            </p>
            <div className="flex items-center gap-6 text-stone-400 text-sm">
              <span className="hover:text-white transition-colors cursor-pointer">Privacy</span>
              <span className="hover:text-white transition-colors cursor-pointer">Terms</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
