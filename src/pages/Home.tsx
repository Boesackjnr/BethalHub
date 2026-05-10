import React from 'react';
import { motion } from 'motion/react';
import { Search, MapPin, Briefcase, Building2, Bell, ArrowRight, TrendingUp, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <header className="bg-white border-b border-slate-200 px-4 sm:px-8 py-8 sm:py-16 shrink-0 pt-28 sm:pt-36">
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-4">Welcome to <span className="text-brand-blue">BethalHUB</span></h1>
          <p className="text-slate-500 text-lg sm:text-xl font-medium">Discover new opportunities posted in the last 24 hours.</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 w-full max-w-2xl">
          <div className="relative flex-grow">
            <input 
              type="text" 
              placeholder="Search jobs, tenders, RFQs..." 
              className="w-full pl-11 pr-4 py-4 bg-slate-100 border border-slate-200 rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all shadow-sm font-medium"
            />
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
              <Search size={20} />
            </div>
          </div>
          <button className="bg-slate-900 text-white px-10 py-4 rounded-xl text-base font-bold hover:bg-brand-blue transition-all shadow-lg active:scale-95 shadow-slate-900/10">Search</button>
        </div>
      </div>
    </header>
  );
};

const HeaderRow = ({ title, desc }: any) => (
  <div className="mb-8">
    <h2 className="text-xl font-bold text-slate-800">{title}</h2>
    {desc && <p className="text-slate-500 text-sm">{desc}</p>}
  </div>
);

const Home = () => {
  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      <Hero />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-8 py-10">
        <div className="flex flex-col md:grid md:grid-cols-12 lg:flex lg:flex-row gap-8">
          
          {/* Quick Categories Aside */}
          <aside className="md:col-span-3 lg:w-64 flex flex-col gap-6 shrink-0 md:order-1">
            <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm text-center">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-5">Browse Categories</h3>
              <div className="space-y-1.5">
                {[
                  { name: 'Tenders & RFQs', count: 4, active: true },
                  { name: 'Employment & Jobs', count: 0 },
                  { name: 'Learnerships', count: 0 },
                  { name: 'Local Businesses', count: 4 },
                  { name: 'Training & Skills', count: 0 },
                ].map((cat) => (
                  <button 
                    key={cat.name}
                    className={`w-full text-center px-4 py-2 rounded-lg text-sm flex justify-center items-center gap-2 transition-all ${
                      cat.active ? 'bg-blue-50 text-brand-blue font-bold shadow-sm' : 'text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <span>{cat.name}</span>
                    <span className={`text-[10px] px-2 py-0.5 rounded-full ${cat.active ? 'bg-blue-200 text-brand-blue' : 'bg-slate-100 text-slate-500'}`}>
                      {cat.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Feed */}
          <section className="md:col-span-6 lg:flex-1 flex flex-col gap-6 md:order-2">
            <div className="flex flex-col items-center gap-3 px-1">
              <h2 className="text-lg font-bold text-slate-800">Recent Opportunity Feed</h2>
              <div className="flex gap-2">
                <span className="text-[10px] px-2 py-1 bg-slate-200 rounded text-slate-600 font-bold uppercase cursor-pointer">All</span>
                <span className="text-[10px] px-2 py-1 hover:bg-slate-200 rounded text-slate-600 font-bold uppercase cursor-pointer transition-colors">Verified Only</span>
              </div>
            </div>

            <div className="space-y-3">
              {[
                { 
                  id: 98, 
                  title: 'Eskom: Staff Transport to Tutuka Power', 
                  org: 'Eskom Holdings SOC Ltd', 
                  ref: 'E2759GXMPTUT', 
                  deadline: '14 Apr 2026', 
                  loc: 'Standerton, Mpumalanga',
                  tag: '60 MONTHS',
                  tagColor: 'bg-amber-100 text-amber-700',
                  icon: 'ES',
                  iconColor: 'bg-amber-50 text-amber-600',
                  attachmentUrl: '/opportunities/e2759gxmptut',
                  desc: 'Transportation of employees to Tutuka Power Station (60-Month contract).'
                },
                { 
                  id: 99, 
                  title: 'NLC: Catering for Awareness Workshop', 
                  org: 'National Lotteries Commission', 
                  ref: 'RFQ2026-005-005', 
                  deadline: '12 May 2026', 
                  loc: 'Witbank, Mpumalanga',
                  tag: 'URGENT RFQ',
                  tagColor: 'bg-orange-100 text-orange-700',
                  icon: 'CS',
                  iconColor: 'bg-orange-50 text-orange-600',
                  attachmentUrl: '/opportunities/rfq2026-005-005',
                  desc: 'Catering for 150 delegates - Education and Awareness workshop.'
                },
                { 
                  id: 0, 
                  title: 'STLM: Printing & Posting of Accounts', 
                  org: 'Steve Tshwete Local Municipality', 
                  ref: 'BS08/04/2026', 
                  deadline: '10 June 2026', 
                  loc: 'Middelburg, Mpumalanga',
                  tag: 'TENDER',
                  tagColor: 'bg-indigo-100 text-indigo-700',
                  icon: 'PA',
                  iconColor: 'bg-indigo-50 text-indigo-600',
                  attachmentUrl: '/opportunities/bs08-04-2026',
                  desc: 'Appointment of service provider for monthly account distribution (36 Months).'
                },
                { 
                  id: 1, 
                  title: 'LTA: Website Design & Enhancement', 
                  org: 'Limpopo Tourism Agency', 
                  ref: 'LTA002-26/27', 
                  deadline: '29 May 2026', 
                  loc: 'Polokwane, Limpopo',
                  tag: 'TENDER',
                  tagColor: 'bg-blue-100 text-blue-700',
                  icon: 'WT',
                  iconColor: 'bg-blue-50 text-blue-600',
                  attachmentUrl: '/opportunities/lta002-2627',
                  desc: '36-Month contract for website design, hosting, and maintenance.'
                }
              ].map((opp) => (
                <div key={opp.id} className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm hover:border-blue-300 transition-all cursor-pointer group hover:shadow-md text-center flex flex-col items-center">
                  <div className="w-full flex flex-col items-center">
                    <span className={`text-[9px] font-black px-2 py-0.5 rounded tracking-widest mb-4 ${opp.tagColor}`}>{opp.tag}</span>
                    <div className="flex flex-col items-center gap-4">
                      <div className={`w-14 h-14 ${opp.iconColor || 'bg-slate-100 text-slate-400'} rounded-2xl flex items-center justify-center font-bold text-lg shadow-sm`}>
                        {opp.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 group-hover:text-brand-blue transition-colors text-lg">{opp.title}</h4>
                        <p className="text-[11px] text-slate-500 font-medium mt-1">Ref: {opp.ref} • {opp.org}</p>
                        {opp.desc && <p className="text-[10px] text-slate-400 mt-2 italic px-8">"{opp.desc}"</p>}
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 flex flex-col items-center gap-4 text-[11px] w-full pt-5 border-t border-slate-50">
                    <div className="flex flex-col sm:flex-row gap-3 text-slate-600 font-medium whitespace-nowrap">
                      <span>Deadline: {opp.deadline}</span>
                      <span>{opp.loc}</span>
                    </div>
                    {opp.attachmentUrl ? (
                      <a 
                        href={opp.attachmentUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto px-6 py-2 bg-slate-50 text-brand-blue font-bold rounded-lg hover:bg-brand-blue hover:text-white transition-all flex items-center justify-center gap-2"
                      >
                        View Full Details <ArrowRight size={14} />
                      </a>
                    ) : (
                      <Link to="/opportunities" className="w-full sm:w-auto px-6 py-2 bg-slate-50 text-brand-blue font-bold rounded-lg hover:bg-brand-blue hover:text-white transition-all">
                        View Full Details
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Panel: Community & Status */}
          <aside className="md:col-span-3 lg:w-72 shrink-0 flex flex-col gap-6 md:order-3">
            <div className="bg-[#fff7ed] rounded-xl border border-orange-100 p-5 shadow-sm text-center">
              <h3 className="text-xs font-bold text-orange-800 uppercase tracking-widest mb-3">Help Center</h3>
              <p className="text-xs text-orange-700 leading-relaxed mb-4">Need assistance? Our team is online.</p>
              <a 
                href="https://wa.me/27123456789"
                className="w-full bg-[#f97316] text-white py-2.5 rounded-lg text-xs font-bold flex items-center justify-center gap-2 hover:bg-orange-600 transition-all shadow-sm"
              >
                <span>WhatsApp</span>
              </a>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm text-center">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Municipal Status</h3>
              <div className="space-y-4">
                {[
                  { name: 'Electricity Status', info: 'Stage 0 - No Loadshedding', color: 'bg-emerald-500' },
                  { name: 'Water Supply', info: 'Low pressure in Extension 5', color: 'bg-orange-500' },
                  { name: 'Waste Collection', info: 'On Schedule', color: 'bg-emerald-500' },
                ].map((status) => (
                  <div key={status.name} className="flex flex-col items-center gap-1.5">
                    <div className={`w-2 h-2 rounded-full ${status.color}`}></div>
                    <div>
                      <p className="text-xs font-bold text-slate-800">{status.name}</p>
                      <p className="text-[10px] text-slate-500 font-medium">{status.info}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm flex-1 text-center">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Business Spotlight</h3>
              <div className="bg-slate-50 rounded-lg p-3.5 mb-4 border border-slate-100 flex flex-col items-center">
                <div className="w-full h-28 bg-slate-200 rounded-md mb-3 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1556761175-59733c302f35?q=80&w=400&auto=format&fit=crop" className="w-full h-full object-cover" alt="Business" />
                </div>
                <h4 className="text-sm font-bold text-slate-900 mb-0.5">Bethal Printing Services</h4>
                <p className="text-[10px] text-slate-500 font-medium mb-2 flex items-center justify-center gap-1">
                   Verified Small Business
                </p>
                <div className="flex gap-1.5 justify-center">
                  <span className="text-[9px] bg-white border border-slate-200 px-2 py-0.5 rounded font-bold text-slate-600 uppercase tracking-tighter">Graphics</span>
                  <span className="text-[9px] bg-white border border-slate-200 px-2 py-0.5 rounded font-bold text-slate-600 uppercase tracking-tighter">Print</span>
                </div>
              </div>
              <Link to="/business-directory" className="w-full inline-block text-center text-xs text-brand-blue font-bold py-2.5 border border-blue-200 rounded-lg hover:bg-blue-50 transition-all">
                Explore Directory
              </Link>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default Home;
