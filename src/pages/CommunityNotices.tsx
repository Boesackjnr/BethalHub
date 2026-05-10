import React, { useState } from 'react';
import { Bell, ShieldAlert, Zap, Droplets, Info, Calendar, MapPin, Search, Megaphone, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { CommunityNotice } from '../types';

const mockNotices: CommunityNotice[] = [
  {
    id: '1',
    title: 'Water Interruption - Bethal North',
    content: 'Please be advised of an unplanned water interruption affecting Bethal North due to a burst pipe on Station Road. Repairs are underway.',
    type: 'Water/Electricity',
    createdAt: '2024-05-10T08:30:00Z',
    priority: 'urgent'
  },
  {
    id: '2',
    title: 'Planned Power Maintenance',
    content: 'ESKOM will be conducting critical maintenance on the Bethal substation. Power will be out from 08:00 to 18:00 on Sunday, 12 May.',
    type: 'Water/Electricity',
    createdAt: '2024-05-09T14:45:00Z',
    priority: 'high'
  },
  {
    id: '3',
    title: 'Annual Bethal Career Expo 2024',
    content: 'Join us at the Bethal Town Hall for the biggest career expo of the year. Local companies and schools will be exhibiting.',
    type: 'Event',
    createdAt: '2024-05-08T10:00:00Z',
    priority: 'medium'
  },
  {
    id: '4',
    title: 'New Recycling Initiative Launched',
    content: 'The municipality has launched a new curbside recycling project. Collect your yellow bags at the library every Monday.',
    type: 'Municipal',
    createdAt: '2024-05-07T12:00:00Z',
    priority: 'low'
  }
];

const PriorityBadge = ({ priority }: { priority: string }) => {
  const styles = {
    urgent: 'bg-rose-100 text-rose-700 border-rose-200',
    high: 'bg-orange-100 text-orange-700 border-orange-200',
    medium: 'bg-blue-100 text-blue-700 border-blue-200',
    low: 'bg-slate-100 text-slate-700 border-slate-200',
  }[priority] || 'bg-slate-100 text-slate-700 border-slate-200';

  return (
    <span className={`px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border ${styles}`}>
      {priority}
    </span>
  );
};

const TypeIcon = ({ type }: { type: string }) => {
  switch (type) {
    case 'Water/Electricity': return <Zap size={20} className="text-amber-500" />;
    case 'Municipal': return <ShieldAlert size={20} className="text-blue-500" />;
    case 'Event': return <Calendar size={20} className="text-emerald-500" />;
    default: return <Megaphone size={20} className="text-slate-500" />;
  }
};

const CommunityNotices = () => {
  const [filter, setFilter] = useState('All');

  const filtered = filter === 'All' ? mockNotices : mockNotices.filter(n => n.type === filter);

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* Header */}
      <section className="bg-white border-b border-slate-200 pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-5xl text-center">
          <div className="flex flex-col md:items-center justify-center gap-6">
            <div>
              <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
                Community <span className="text-blue-600">Feed</span>
              </h1>
              <p className="text-slate-500 text-lg max-w-2xl font-medium leading-relaxed mx-auto">
                Stay informed with official municipal notices, service interruptions, and critical alerts for Bethal residents.
              </p>
            </div>
            <div className="shrink-0 flex items-center justify-center">
               <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-brand-blue border border-blue-100 shadow-sm">
                  <Bell className="animate-pulse" size={32} />
               </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 max-w-5xl">
        {/* Filters */}
        <div className="bg-white p-2 rounded-2xl border border-slate-200 shadow-sm mb-12 flex flex-wrap gap-2 items-center">
          <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-4 hidden sm:block">Category</span>
          {['All', 'Water/Electricity', 'Municipal', 'Event', 'Announcement'].map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all whitespace-nowrap ${
                filter === f 
                ? 'bg-brand-blue text-white shadow-md' 
                : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="space-y-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((notice) => (
              <motion.div
                key={notice.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className={`group bg-white p-6 rounded-xl border-2 shadow-sm transition-all hover:shadow-md hover:border-blue-300 cursor-pointer ${
                  notice.priority === 'urgent' ? 'border-rose-100 bg-rose-50/10' : 'border-slate-50'
                }`}
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className={`shrink-0 w-14 h-14 rounded-xl flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform ${
                    notice.priority === 'urgent' ? 'bg-rose-100' : 'bg-slate-100'
                  }`}>
                    <TypeIcon type={notice.type} />
                  </div>
                  
                  <div className="flex-grow">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-3">
                      <div className="flex items-center gap-3">
                        <PriorityBadge priority={notice.priority} />
                        <span className="text-[10px] text-slate-500 font-black uppercase tracking-widest">{notice.type}</span>
                      </div>
                      <div className="flex items-center text-slate-400 text-[11px] font-bold space-x-1 uppercase tracking-tighter sm:ml-auto">
                        <Clock size={12} />
                        <span>{new Date(notice.createdAt).toLocaleString()}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-brand-blue transition-colors leading-tight">{notice.title}</h3>
                    <p className="text-slate-600 leading-relaxed text-base mb-6 font-medium">
                      {notice.content}
                    </p>
                    
                    <div className="flex flex-wrap gap-4 pt-4 border-t border-slate-50">
                      <button className="text-brand-blue font-bold text-sm flex items-center gap-2 hover:underline">
                         Full Details <Info size={14} />
                      </button>
                      <button className="text-slate-400 hover:text-slate-600 transition-colors font-bold text-xs uppercase tracking-widest ml-auto">
                        Report Issue
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        
        {/* Newsletter Signup */}
        <div className="mt-20 p-8 md:p-16 rounded-3xl bg-brand-blue text-white relative overflow-hidden shadow-2xl">
            <div className="relative z-10 text-center">
              <Megaphone size={40} className="mx-auto mb-6 text-brand-accent" />
              <h2 className="text-2xl md:text-4xl font-extrabold mb-4 tracking-tight leading-tight">Never miss a critical update.</h2>
              <p className="text-blue-100 text-lg mb-10 max-w-xl mx-auto font-medium">
                Official service notices sent direct to your phone.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-grow px-5 py-3.5 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-accent transition-all font-medium"
                />
                <button className="px-8 py-3.5 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-xl transition-all shadow-lg active:scale-95 whitespace-nowrap">
                  Subscribe Now
                </button>
              </div>
            </div>
            {/* Shapes */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full -mr-24 -mt-24 blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full -ml-24 -mb-24 blur-2xl"></div>
        </div>
      </div>
    </div>
  );
};

export default CommunityNotices;
