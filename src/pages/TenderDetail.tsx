import React from 'react';
import { FileText, Calendar, Clock, MapPin, Mail, Phone, ExternalLink, Download, ArrowLeft, Bell, ArrowRight } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';

const tenderData: Record<string, any> = {
  'lta002-2627': {
    orgName: 'Limpopo Tourism Agency',
    orgShort: 'LTA',
    orgLocation: 'Limpopo',
    bidNumber: 'LTA002-26/27',
    title: 'Appointment of a Service Provider for Website Design, Hosting, Maintenance and Digital Enhancement for a period of 36 Months',
    closingDate: '29 May 2026',
    closingTime: '11:00 AM',
    briefingVenue: 'Microsoft Teams (Virtual)',
    briefingDate: '18 May 2026 • 12:00 PM',
    briefingDetails: 'Meeting ID: 321 238 244 544 248',
    briefingPasscode: 'fV79rB3T',
    background: 'The Limpopo Tourism Agency (LTA) seeks to appoint a suitably qualified service provider to host, maintain, secure, optimise and continuously enhance the website for a period of thirty-six (36) months.',
    objectives: [
      '99.5% Minimum Annual Uptime',
      'Cybersecurity Resilience & Compliance',
      'SEO Optimization & Multilingual Capability',
      'Transition to Interactive Digital Platform'
    ],
    highlights: [
      'Domain Registration & Renewal Management',
      'Tier III Secure Hosting Environment',
      'Integration with CRM & Social Media',
      'Mobile App Development linked to site'
    ],
    contacts: [
      { name: 'Isaac Maelane', role: 'Specification Enquiries', email: 'isaacm@golimpopo.com', phone: '082 491 3204' },
      { name: 'Sewela Nyaka', role: 'SCM Process Enquiries', email: 'sewelan@golimpopo.com', phone: '066 039 0295' }
    ],
    themeColor: 'indigo'
  },
  'bs08-04-2026': {
    orgName: 'Steve Tshwete Local Municipality',
    orgShort: 'STLM',
    orgLocation: 'Mpumalanga',
    bidNumber: 'BS08/04/2026',
    title: 'Appointment of Service Provider for Printing and Posting of Monthly Accounts for 36 Months',
    closingDate: '10 June 2026',
    closingTime: '12:00 PM',
    briefingVenue: 'Library Auditorium, Middelburg',
    briefingDate: '19 May 2026 • 10:00 AM',
    briefingDetails: 'Non-compulsory Clarification Meeting',
    briefingPasscode: 'Gerard Sekoto Library, Civic Center',
    background: 'In terms of Section 110 of the Municipal Finance Management Act, 2003, tenders are hereby invited for the printing and posting of monthly accounts for the municipality for a 36-month period.',
    objectives: [
      'Efficient Printing Infrastructure',
      'Reliable Monthly Posting Schedule',
      'Compliance with MFMA Regulations',
      'Cost-Effective Distribution Solution'
    ],
    highlights: [
      'High-volume Document Processing',
      'Secure Data Handling protocol',
      'Logistics & Courier integration',
      '3-Year Fixed Term Contract'
    ],
    contacts: [
      { name: 'Ms. Puselletso Melato', role: 'Technical Enquiries', email: 'cfo@stlm.gov.za', phone: '013 249 7108' },
      { name: 'SM Mnguni', role: 'Municipal Manager', email: 'mm@stlm.gov.za', phone: '013 249 7000' }
    ],
    themeColor: 'blue'
  },
  'rfq2026-005-005': {
    orgName: 'National Lotteries Commission',
    orgShort: 'NLC',
    orgLocation: 'Mpumalanga',
    bidNumber: 'RFQ2026-005-005',
    title: 'Provision of Catering Services for the NLC Workshop in Witbank',
    closingDate: '12 May 2026',
    closingTime: '11:00 AM',
    briefingVenue: 'Witbank, Banquet Hall eMalahleni Local Municipality',
    briefingDate: 'Workshop Date: 21 May 2026',
    briefingDetails: 'E-Tender Portal Submission only',
    briefingPasscode: 'Witbank Warehouse Site',
    background: 'The NLC requires a suitably qualified service provider for the provision of catering services for the National Lotteries Commission Education and Awareness workshop in Mpumalanga province.',
    objectives: [
      'Pre-packaged Lunch for 150 Delegates',
      'High Quality Meat (Chicken & Beef Stew)',
      'Strict Hygiene & Safety Compliance',
      'On-time Delivery & Waste Removal'
    ],
    highlights: [
      '150 Full delegate meals',
      'Soft drinks & bottled water included',
      'Full cutlery and service logistics',
      'Witbank Local Municipality Venue'
    ],
    contacts: [
      { name: 'Innocent Tshakela', role: 'RFQ Enquiries', email: 'Innocent.Tshakela@nlcsa.org.za', phone: '012 432 1300' },
      { name: 'Calvin Kabinde', role: 'Technical Enquiries', email: 'Calvin.kabinde@nlcsa.org.za', phone: '012 432 1302' }
    ],
    themeColor: 'orange'
  },
  'e2759gxmptut': {
    orgName: 'Eskom Holdings SOC Ltd',
    orgShort: 'Eskom',
    orgLocation: 'Tutuka Power Station',
    bidNumber: 'E2759GXMPTUT',
    title: 'Transportation of employees to Tutuka Power Station for a period of 60 months',
    closingDate: '14 April 2026',
    closingTime: '10:00 AM',
    briefingVenue: 'Tutuka Power Station, Standerton',
    briefingDate: '10 April 2026 • 09:00 AM',
    briefingDetails: 'Main Reception Area',
    briefingPasscode: 'Enquiry: E2759GXMPTUT',
    background: 'Eskom requires transportation of employees from Kosmos Park, Flora Park, Margenzon, Mayerville & Town, Sakhile, Thuthukani and Extension 8 to Tutuka Power Station as and when required for a period of 60 months.',
    objectives: [
      '60-Month Fixed Term Contract',
      'Safety & Roadworthy Compliance',
      'Reliable Staff Arrival Times',
      'Multi-Area Coverage (8 Zones)'
    ],
    highlights: [
      'Long-term secure contract',
      'Strategic infrastructure support',
      'Eskom Procurement Policy compliant',
      'High-impact community service'
    ],
    contacts: [
      { name: 'Eskom Tender Office', role: 'Submission Support', email: 'tenders@eskom.co.za', phone: '017 749 5111' }
    ],
    themeColor: 'amber'
  }
};

const TenderDetail = () => {
  const { id } = useParams();
  const data = id ? tenderData[id] : null;

  if (!data) {
    return (
      <div className="min-h-screen pt-32 text-center">
        <h2 className="text-2xl font-bold">Tender not found</h2>
        <Link to="/opportunities" className="text-brand-blue font-bold hover:underline">Return to list</Link>
      </div>
    );
  }

  const colorClasses: Record<string, string> = {
    indigo: 'bg-indigo-600 border-indigo-100 text-indigo-700 hover:bg-indigo-700 shadow-indigo-900/20',
    blue: 'bg-blue-600 border-blue-100 text-blue-700 hover:bg-blue-700 shadow-blue-900/20',
    orange: 'bg-orange-600 border-orange-100 text-orange-700 hover:bg-orange-700 shadow-orange-900/20',
    amber: 'bg-amber-600 border-amber-100 text-amber-700 hover:bg-amber-700 shadow-amber-900/20'
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-20 px-4">
      <div className="max-w-4xl mx-auto">
        <Link to="/opportunities" className="inline-flex items-center gap-2 text-brand-blue font-bold mb-6 hover:gap-3 transition-all">
          <ArrowLeft size={18} /> Back to Opportunities
        </Link>

        <div className="bg-white border shadow-xl rounded-2xl overflow-hidden">
          {/* Header/Official Banner */}
          <div className="border-b-4 border-slate-900 p-8 sm:p-12 text-center bg-slate-50">
            <div className="flex justify-center mb-6">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex items-center gap-3">
                <div className={`w-12 h-12 bg-${data.themeColor}-600 rounded flex items-center justify-center text-white font-black text-xl`}>{data.orgShort}</div>
                <div className="text-left">
                  <p className="text-xs font-black tracking-tighter text-slate-400 uppercase leading-none">{data.orgLocation}</p>
                  <p className="text-sm font-bold text-slate-800 leading-none">{data.orgName}</p>
                </div>
              </div>
            </div>
            
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 mb-4 max-w-2xl mx-auto leading-tight uppercase">
              Bid Number: {data.bidNumber}
            </h1>
            <p className="text-slate-600 font-medium text-lg max-w-2xl mx-auto italic">
              "{data.title}"
            </p>
          </div>

          {/* Critical Info Grid */}
          <div className="grid md:grid-cols-3 border-b">
            <div className="p-6 border-b md:border-b-0 md:border-r flex flex-col items-center text-center gap-2 bg-rose-50/30">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">Closing Date</p>
              <p className="text-sm font-bold text-slate-900">{data.closingDate}</p>
            </div>
            <div className="p-6 border-b md:border-b-0 md:border-r flex flex-col items-center text-center gap-2 bg-indigo-50/30">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">Closing Time</p>
              <p className="text-sm font-bold text-slate-900">{data.closingTime}</p>
            </div>
            <div className="p-6 flex flex-col items-center text-center gap-2 bg-emerald-50/30">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">Venue / Location</p>
              <p className="text-sm font-bold text-slate-900">{data.briefingVenue}</p>
            </div>
          </div>

          <div className="p-8 sm:p-12 space-y-12">
            {/* Section: Briefing */}
            <section className="bg-amber-50 rounded-xl border border-amber-100 p-6">
              <div className="flex items-center gap-3 mb-4">
                <h3 className="text-lg font-black text-amber-900 uppercase tracking-tight">Clarification / Briefing</h3>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <p className="text-xs font-bold text-amber-700 uppercase mb-1">Date & Time</p>
                  <p className="text-sm font-medium text-slate-800">{data.briefingDate}</p>
                </div>
                <div>
                  <p className="text-xs font-bold text-amber-700 uppercase mb-1">Location Details</p>
                  <p className="text-sm font-medium text-slate-800">{data.briefingDetails}</p>
                  <p className="text-xs text-slate-500 font-mono mt-0.5">{data.briefingPasscode}</p>
                </div>
              </div>
              <button className="mt-6 w-full py-3 bg-amber-600 text-white rounded-lg font-bold text-sm hover:bg-amber-700 transition-all shadow-md shadow-amber-900/20 flex items-center justify-center gap-2">
                Join / Attend Briefing <ExternalLink size={16} />
              </button>
            </section>

            {/* Section: Scope of Work */}
            <section>
              <h3 className="text-sm font-black text-slate-400 uppercase tracking-widest mb-6 border-b pb-4">Background & Scope</h3>
              <div className="prose prose-slate max-w-none">
                <p className="text-slate-600 leading-relaxed mb-4">
                  {data.background}
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                    <p className="text-xs font-bold text-slate-900 mb-2">Key Objectives:</p>
                    <ul className="text-xs text-slate-500 space-y-2 font-medium list-disc pl-4">
                      {data.objectives.map((obj: string) => <li key={obj}>{obj}</li>)}
                    </ul>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                    <p className="text-xs font-bold text-slate-900 mb-2">Scope Highlights:</p>
                    <ul className="text-xs text-slate-500 space-y-2 font-medium list-disc pl-4">
                      {data.highlights.map((h: string) => <li key={h}>{h}</li>)}
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Section: Contact Info */}
            <section className="pt-8 border-t">
              <h3 className="text-sm font-black text-slate-400 uppercase tracking-widest mb-6">Contact Persons</h3>
              <div className="grid sm:grid-cols-2 gap-8">
                {data.contacts.map((contact: any) => (
                  <div key={contact.name} className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
                      <Mail className="text-slate-400" size={20} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900">{contact.name}</p>
                      <p className="text-xs text-slate-500 font-medium italic mb-2">({contact.role})</p>
                      <p className="text-xs text-brand-blue font-bold">{contact.email}</p>
                      <p className="text-xs text-slate-400">{contact.phone}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Action Footer */}
          <div className="bg-slate-900 p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-center sm:text-left">
              <p className="text-white font-bold">Ready to apply?</p>
              <p className="text-slate-400 text-xs mt-1">Download official bid documents and annexures below.</p>
            </div>
            <div className="flex gap-4">
              <button className="px-6 py-3 bg-white text-slate-900 rounded-xl font-bold text-sm hover:bg-slate-100 transition-all flex items-center gap-2">
                <Download size={18} /> Tender Documents
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-blue-900 rounded-xl p-6 text-white bg-gradient-to-br from-blue-900 to-indigo-900 shadow-lg border border-blue-800">
           <div className="flex gap-4">
             <div>
               <h4 className="font-bold text-lg">Anti-Scam Alert</h4>
               <p className="text-sm text-blue-100 leading-relaxed mt-1">
                 {data.orgName} warns all bidders: <span className="font-bold text-white underline decoration-rose-500">NO PAYMENT IS REQUIRED</span> for this bid. Please report any suspicious activity immediately to their contact persons.
               </p>
             </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default TenderDetail;
