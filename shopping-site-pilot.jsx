import React, { useState, useEffect } from 'react';
import { ShoppingCart, Search, Menu, X, ChevronRight, Star, Heart, TrendingUp } from 'lucide-react';

export default function ShoppingLanding() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeCategory, setActiveCategory] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const categories = ['New Arrivals', 'Trending', 'Best Sellers', 'Sale'];
  
  const products = [
    { id: 1, name: 'Minimalist Sneakers', price: 129, rating: 4.8, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=500&fit=crop' },
    { id: 2, name: 'Classic Denim Jacket', price: 89, rating: 4.6, image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=500&fit=crop' },
    { id: 3, name: 'Leather Backpack', price: 159, rating: 4.9, image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=500&fit=crop' },
    { id: 4, name: 'Designer Sunglasses', price: 199, rating: 4.7, image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=500&fit=crop' },
    { id: 5, name: 'Wireless Earbuds', price: 179, rating: 4.5, image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=500&fit=crop' },
    { id: 6, name: 'Canvas Tote Bag', price: 45, rating: 4.4, image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=500&fit=crop' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Header */}
      <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                LUXE
              </h1>
              <nav className="hidden md:flex gap-6">
                {['Shop', 'New', 'Brands', 'Sale'].map(item => (
                  <a key={item} href="#" className="text-gray-700 hover:text-indigo-600 transition-colors font-medium">
                    {item}
                  </a>
                ))}
              </nav>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2 hover:bg-gray-200 transition-colors">
                <Search size={18} className="text-gray-500" />
                <input type="text" placeholder="Search products..." className="bg-transparent outline-none text-sm w-48" />
              </div>
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <Heart size={22} className="text-gray-700" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors relative">
                <ShoppingCart size={22} className="text-gray-700" />
                <span className="absolute -top-1 -right-1 bg-indigo-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">3</span>
              </button>
              <button className="md:hidden p-2" onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium">
                <TrendingUp size={16} />
                Spring Collection 2024
              </div>
              <h2 className="text-6xl md:text-7xl font-bold leading-tight bg-gradient-to-r from-gray-900 via-indigo-900 to-purple-900 bg-clip-text text-transparent">
                Redefine Your Style
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Discover curated collections that blend timeless elegance with modern aesthetics. Elevate your wardrobe today.
              </p>
              <div className="flex gap-4 pt-4">
                <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2">
                  Shop Now
                  <ChevronRight size={20} />
                </button>
                <button className="border-2 border-gray-300 px-8 py-4 rounded-full font-semibold hover:border-indigo-600 hover:text-indigo-600 transition-all duration-300">
                  Explore Collections
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-300 to-purple-300 rounded-3xl blur-3xl opacity-30 animate-pulse"></div>
              <img 
                src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&h=1000&fit=crop" 
                alt="Fashion"
                className="relative rounded-3xl shadow-2xl w-full hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="px-6 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex gap-4 overflow-x-auto pb-4">
            {categories.map((cat, idx) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(idx)}
                className={`px-6 py-3 rounded-full font-semibold whitespace-nowrap transition-all duration-300 ${
                  activeCategory === idx
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-50 shadow'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, idx) => (
              <div 
                key={product.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="relative overflow-hidden aspect-[4/5]">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <button className="absolute top-4 right-4 p-3 bg-white/90 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white">
                    <Heart size={20} className="text-gray-700" />
                  </button>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <button className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white text-gray-900 px-6 py-3 rounded-full font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-indigo-600 hover:text-white transform translate-y-4 group-hover:translate-y-0">
                    Quick View
                  </button>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-1 mb-2">
                    <Star size={16} className="fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-semibold text-gray-700">{product.rating}</span>
                  </div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    ${product.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-6 py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            {[
              { title: 'Free Shipping', desc: 'On orders over $100' },
              { title: '30-Day Returns', desc: 'Hassle-free returns' },
              { title: 'Secure Payment', desc: 'Protected transactions' }
            ].map(feature => (
              <div key={feature.title} className="space-y-2 hover:scale-105 transition-transform duration-300">
                <h3 className="text-2xl font-bold">{feature.title}</h3>
                <p className="text-indigo-100">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
