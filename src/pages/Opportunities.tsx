import React, { useState } from 'react';
import { Search, Filter, Calendar, MapPin, Building2, ExternalLink, Briefcase, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Opportunity } from '../types';

const mockOpportunities: Opportunity[] = [
  {
    id: '7',
    title: 'Transportation of Employees to Tutuka Power Station (60 Months)',
    organization: 'Eskom Holdings SOC Ltd',
    description: 'Long-term contract for the transportation of staff from various residential zones to Tutuka Power Station. Enquiry No. E2759GXMPTUT.',
    category: 'Tender',
    deadline: '2026-04-14',
    location: 'Standerton, Mpumalanga',
    contactDetails: 'tenders@eskom.co.za',
    attachmentUrl: '/opportunities/e2759gxmptut',
    status: 'open',
    createdAt: '2026-05-10'
  },
  {
    id: '6',
    title: 'Catering Services for NLC Workshop (Witbank)',
    organization: 'National Lotteries Commission',
    description: 'RFQ for catering service provider for the NLC Awareness workshop in Witbank. RFQ No. RFQ2026-005-005.',
    category: 'RFQ',
    deadline: '2026-05-12',
    location: 'Witbank, Mpumalanga',
    contactDetails: 'Innocent.Tshakela@nlcsa.org.za / Calvin.kabinde@nlcsa.org.za',
    attachmentUrl: '/opportunities/rfq2026-005-005',
    status: 'open',
    createdAt: '2026-05-10'
  },
  {
    id: '5',
    title: 'Printing and Posting of Monthly Accounts (36 Months)',
    organization: 'Steve Tshwete Local Municipality',
    description: 'Appointment of service provider for printing and posting of monthly accounts for 36 months in accordance with MFMA. Bid No. BS08/04/2026.',
    category: 'Tender',
    deadline: '2026-06-10',
    location: 'Middelburg, Mpumalanga',
    contactDetails: 'cfo@stlm.gov.za / mm@stlm.gov.za',
    attachmentUrl: '/opportunities/bs08-04-2026',
    status: 'open',
    createdAt: '2026-05-10'
  },
  {
    id: '4',
    title: 'Website Design, Hosting & Maintenance (36 Months)',
    organization: 'Limpopo Tourism Agency',
    description: 'Appointment of a service provider for website design, hosting, maintenance and digital enhancement for a period of 36 months. Bid No. LTA002-26/27.',
    category: 'Tender',
    deadline: '2026-05-29',
    location: 'Polokwane, Limpopo',
    contactDetails: 'isaacm@golimpopo.com / sewelan@golimpopo.com',
    attachmentUrl: '/opportunities/lta002-2627',
    status: 'open',
    createdAt: '2026-05-10'
  }
];

const FilterButton = ({ active, onClick, children }: any) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${
      active 
        ? 'bg-brand-blue text-white shadow-md' 
        : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-200'
    }`}
  >
    {children}
  </button>
);

const OpportunityCard = ({ opp }: { opp: Opportunity, key?: any }) => (
  <motion.div
    layout
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, scale: 0.95 }}
    className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm hover:border-blue-300 transition-all cursor-pointer group hover:shadow-md"
  >
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
      <div className="flex gap-4 sm:gap-5">
        <div className="w-12 h-12 sm:w-14 sm:h-14 bg-slate-100 rounded-xl flex items-center justify-center text-slate-400 group-hover:bg-blue-50 group-hover:text-brand-blue transition-colors shrink-0">
          <Briefcase size={24} className="sm:hidden" />
          <Briefcase size={28} className="hidden sm:block" />
        </div>
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-2">
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-brand-blue transition-all">
              {opp.title}
            </h3>
            <span className={`w-fit text-[9px] sm:text-[10px] font-black px-2 py-0.5 rounded tracking-widest uppercase ${
              opp.category === 'Tender' ? 'bg-orange-100 text-orange-700' :
              opp.category === 'RFQ' ? 'bg-amber-100 text-amber-700' :
              'bg-emerald-100 text-emerald-700'
            }`}>
              {opp.category}
            </span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-y-1.5 gap-x-6 text-xs sm:text-sm text-slate-500 font-medium">
            <span>{opp.organization}</span>
            <span>{opp.location}</span>
          </div>
          <div className="mt-2 text-xs sm:text-sm text-slate-500 font-medium flex items-center gap-1.5 sm:hidden">
            Deadline: {new Date(opp.deadline).toLocaleDateString()}
          </div>
        </div>
      </div>
      
      <div className="flex items-center justify-between sm:justify-end gap-4 border-t sm:border-t-0 pt-4 sm:pt-0">
        <div className="text-right hidden sm:block">
          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest whitespace-nowrap">Deadline</p>
          <p className="text-xs sm:text-sm font-bold text-rose-600">{new Date(opp.deadline).toLocaleDateString()}</p>
        </div>
        {opp.attachmentUrl ? (
          <a 
            href={opp.attachmentUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-slate-900 text-white px-6 py-2.5 rounded-lg text-sm font-bold hover:bg-brand-blue transition-all shadow-sm flex items-center justify-center gap-2"
          >
            Details <ExternalLink size={14} />
          </a>
        ) : (
          <button className="w-full sm:w-auto bg-slate-900 text-white px-6 py-2.5 rounded-lg text-sm font-bold hover:bg-brand-blue transition-all shadow-sm">
            Details
          </button>
        )}
      </div>
    </div>
  </motion.div>
);

const Opportunities = () => {
  const [filter, setFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['All', 'Tender', 'RFQ', 'Job', 'Learnership', 'Internship'];

  const filtered = mockOpportunities.filter(opp => {
    const matchesFilter = filter === 'All' || opp.category === filter;
    const matchesSearch = opp.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         opp.organization.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });  return (
    <div className="min-h-screen bg-slate-50 pb-24">
      {/* Search Section */}
      <section className="bg-white border-b border-slate-200 pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="mb-10 text-center">
            <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
              Community <span className="text-blue-600">Opportunities</span>
            </h1>
            <p className="text-slate-500 text-lg max-w-2xl font-medium leading-relaxed mx-auto">
              Connecting Bethal businesses and individuals with the latest tenders, jobs, and development projects.
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-200 p-2 rounded-2xl shadow-sm flex flex-col sm:flex-row gap-2 max-w-4xl mx-auto">
            <div className="flex-grow flex items-center px-4 py-3 bg-white rounded-xl border border-slate-100 focus-within:ring-2 focus-within:ring-blue-500/10 transition-all">
              <Search className="text-slate-400 mr-3" size={20} />
              <input
                type="text"
                placeholder="Search keywords, companies or roles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-transparent border-none text-slate-900 focus:ring-0 w-full placeholder:text-slate-400 font-medium"
              />
            </div>
            <button className="bg-slate-900 text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-900 transition-all flex items-center justify-center gap-2 shadow-lg shadow-slate-900/10">
              Search
            </button>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 max-w-5xl py-12">
        <div className="flex flex-col gap-10">
          {/* Category Filter */}
          <div className="flex flex-col gap-4">
             <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Filter by Category</span>
                <button className="text-xs font-bold text-blue-600 hover:underline">Reset Filters</button>
             </div>
             <div className="flex items-center space-x-2 overflow-x-auto no-scrollbar pb-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setFilter(cat)}
                    className={`px-4 py-2 rounded-lg text-sm font-bold whitespace-nowrap transition-all ${
                      filter === cat
                        ? 'bg-brand-blue text-white shadow-md'
                        : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
             </div>
          </div>

          {/* List Section */}
          <div>
            <div className="flex justify-between items-center mb-6">
              <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">
                Showing <span className="text-slate-900 tracking-normal">{filtered.length}</span> Results
              </p>
              <div className="flex items-center gap-4 text-xs font-bold text-slate-400 uppercase tracking-widest">
                 <button className="flex items-center gap-1 hover:text-brand-blue transition-colors">
                   <Filter size={14} /> MORE FILTERS
                 </button>
                 <div className="h-4 w-[1px] bg-slate-200"></div>
                 <span>Sort: Newest</span>
              </div>
            </div>

            <div className="space-y-4">
              <AnimatePresence mode="popLayout">
                {filtered.map((opp) => (
                  <OpportunityCard key={opp.id} {...{ opp }} />
                ))}
              </AnimatePresence>
              
              {filtered.length === 0 && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="bg-white rounded-2xl p-20 text-center border-2 border-dashed border-slate-200"
                >
                  <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Search size={32} className="text-slate-300" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">No opportunities found</h3>
                  <p className="text-slate-500 max-w-sm mx-auto">
                    Try adjusting your criteria or search keyword to find what you're looking for.
                  </p>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
;

export default Opportunities;
