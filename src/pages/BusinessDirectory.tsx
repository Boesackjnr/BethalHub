import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, MapPin, Phone, Globe, ShieldCheck, Star, Grid, List as ListIcon, Filter, Briefcase, Building2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Business } from '../types';

const mockBusinesses: Business[] = [
  {
    id: '1',
    name: 'Bethal Logistics & Transport',
    description: 'Expert logistics and transportation services in Mpumalanga. Specialized in cold chain and heavy haulage.',
    category: 'Logistics',
    location: '12 Industrial St, Bethal',
    contact: '017 123 4567',
    website: 'https://bethallogistics.co.za',
    verified: true,
    ownerId: 'user1'
  },
  {
    id: '2',
    name: 'Sunrise Engineering Bethal',
    description: 'Full-service engineering consulting and mechanical repairs. Over 20 years of experience serving the local mines.',
    category: 'Engineering',
    location: 'Bethal Extension 4',
    contact: '017 999 8888',
    verified: true,
    ownerId: 'user2'
  },
  {
    id: '3',
    name: 'Mvelase Fresh Produce',
    description: 'Supplying fresh local vegetables and fruits to households and restaurants across Bethal.',
    category: 'Agriculture',
    location: 'Bethal North Farm',
    contact: '082 111 2222',
    verified: false,
    ownerId: 'user3'
  },
  {
    id: '4',
    name: 'Digital Edge Web Agency',
    description: 'Helping Bethal businesses get online with professional websites and social media marketing.',
    category: 'Technology',
    location: 'Bethal CBD Office 12',
    contact: '017 333 4444',
    website: 'https://digitaledge.co.za',
    verified: true,
    ownerId: 'user4'
  }
];

const BusinessCard = ({ business }: { business: Business, key?: any }) => (
  <motion.div
    layout
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    className="bg-white border border-slate-200 rounded-xl shadow-sm hover:border-blue-300 transition-all cursor-pointer group flex flex-col h-full hover:shadow-md"
  >
    <div className="relative h-48 w-full shrink-0 overflow-hidden rounded-t-xl bg-slate-200">
      <img
        src={`https://picsum.photos/seed/${business.id}/600/400`}
        alt={business.name}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        referrerPolicy="no-referrer"
      />
      <div className="absolute top-3 right-3 flex flex-col gap-2">
        {business.verified && (
          <div className="bg-white/90 backdrop-blur shadow-sm p-1.5 rounded-lg text-brand-accent">
            <ShieldCheck size={18} />
          </div>
        )}
      </div>
      <div className="absolute bottom-3 left-3">
        <span className="bg-brand-blue/90 backdrop-blur text-white text-[9px] font-black px-2 py-1 rounded-md uppercase tracking-widest shadow-md">
          {business.category}
        </span>
      </div>
    </div>

    <div className="p-5 flex flex-col flex-1">
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-bold text-slate-900 group-hover:text-brand-blue transition-colors text-lg leading-tight">
          {business.name}
        </h3>
        <div className="flex items-center gap-1 text-brand-orange">
          <Star size={14} fill="currentColor" />
          <span className="text-xs font-bold text-slate-700">4.8</span>
        </div>
      </div>
      
      <p className="text-[11px] text-slate-500 font-medium mb-4 line-clamp-2">
        {business.description}
      </p>

      <div className="space-y-2 mt-auto pt-4 border-t border-slate-100">
        <div className="flex items-center gap-2 text-[11px] text-slate-600 font-semibold">
          <MapPin size={14} className="text-slate-400 shrink-0" />
          <span className="truncate">{business.location}</span>
        </div>
        <div className="flex items-center gap-2 text-[11px] text-slate-600 font-semibold">
          <Phone size={14} className="text-slate-400 shrink-0" />
          <span>{business.contact}</span>
        </div>
      </div>
      
      <button className="w-full mt-4 py-2 border border-blue-200 text-brand-blue font-bold text-xs rounded-lg group-hover:bg-brand-blue group-hover:text-white group-hover:border-brand-blue transition-all">
        View Full Profile
      </button>
    </div>
  </motion.div>
);

const BusinessDirectory = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('All');

  const categories = ['All', 'Logistics', 'Engineering', 'Agriculture', 'Technology', 'Services', 'Retail'];

  const filtered = mockBusinesses.filter(biz => {
    const matchesCat = category === 'All' || biz.category === category;
    const matchesSearch = biz.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         biz.category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-slate-50 pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="mb-10 text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-3">
            Business <span className="text-brand-blue">Hub</span> Directory
          </h1>
          <p className="text-slate-500 text-lg max-w-2xl font-medium tracking-tight mx-auto">
            Connect with trusted local providers and support the Bethal digital economy.
          </p>
        </div>

        {/* Controls */}
        <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200 shadow-sm mb-10">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-3.5 text-slate-400" size={20} />
              <input
                type="text"
                placeholder="Search businesses..."
                className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all font-medium"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-3 overflow-x-auto no-scrollbar pb-2 md:pb-0">
               <span className="text-sm font-bold text-slate-400 uppercase tracking-widest mr-2 shrink-0 hidden sm:block">Filter:</span>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`px-4 py-2 rounded-lg text-sm font-bold whitespace-nowrap transition-all ${
                    category === cat
                      ? 'bg-brand-blue text-white shadow-md'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Status Bar */}
        <div className="flex justify-between items-center mb-8 px-1">
          <div className="flex items-center gap-4">
             <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
              Found <span className="text-slate-900 tracking-normal">{filtered.length}</span> Results
            </p>
            <div className="h-4 w-[1px] bg-slate-200"></div>
            <div className="flex items-center gap-1 bg-slate-200 p-1 rounded-lg">
              <button className="p-1 px-2.5 bg-white rounded shadow-sm text-brand-blue"><Grid size={16} /></button>
              <button className="p-1 px-2 text-slate-500 hover:text-brand-blue transition-colors"><ListIcon size={16} /></button>
            </div>
          </div>
          
          <div className="flex items-center gap-4 text-[10px] font-black text-slate-400 tracking-widest uppercase">
             <span className="hidden sm:inline">Sort: Highest Rated</span>
             <Filter size={14} className="sm:hidden" />
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <AnimatePresence>
            {filtered.map((business) => (
              <BusinessCard key={business.id} {...{ business }} />
            ))}
          </AnimatePresence>
        </div>

        {filtered.length === 0 && (
          <div className="py-24 text-center">
             <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Building2 size={32} className="text-slate-300" />
              </div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">No businesses found</h3>
            <p className="text-slate-500">Try adjusting your filters or search terms.</p>
          </div>
        )}

        {/* CTA */}
        <div className="mt-24 bg-brand-blue rounded-3xl p-12 md:p-20 relative overflow-hidden flex flex-col md:flex-row items-center justify-between text-white shadow-xl">
          <div className="relative z-10 max-w-xl text-center md:text-left mb-10 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6 tracking-tight">Is your business operating in Bethal?</h2>
            <p className="text-blue-100 text-lg leading-relaxed font-medium">
              Join BethalHub to get in front of municipal contractors, large companies, and local residents.
            </p>
          </div>
          <Link 
            to="/register-business" 
            className="relative z-10 px-10 py-4 bg-emerald-500 text-white font-bold rounded-xl shadow-lg hover:bg-emerald-600 transition-all flex items-center space-x-3 text-lg"
          >
            <span>Apply for Directory</span>
            <ShieldCheck size={24} />
          </Link>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
        </div>
      </div>
    </div>
  );
};

export default BusinessDirectory;
