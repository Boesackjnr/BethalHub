import React from 'react';

const About = () => (
  <div className="bg-slate-50 min-h-screen pt-32 pb-24">
    <div className="container mx-auto px-4 max-w-4xl">
      <div className="bg-white rounded-3xl border border-slate-200 p-10 md:p-20 shadow-sm relative overflow-hidden">
        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-8">
            About <span className="text-brand-blue">BethalHub</span>
          </h1>
          <div className="prose prose-slate prose-lg max-w-none text-slate-600 leading-relaxed font-medium">
            <p className="mb-6 text-xl text-slate-700">
              BethalHub is a community-driven digital ecosystem designed to centralize opportunities, information, and local businesses in Bethal, Mpumalanga.
            </p>
            <p className="mb-8">
              Our mission is to empower the youth, support small businesses, and bridge the digital divide by making critical information like tenders, jobs, and municipal notices easily accessible to everyone.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
              <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Our Vision</h3>
                <p className="text-sm">To become the digital home of Bethal, where every resident has the tools and information they need to thrive in the modern economy.</p>
              </div>
              <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Our Values</h3>
                <p className="text-sm">Transparency, accessibility, community empowerment, and supporting local business growth.</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-slate-800 mt-12 mb-6 tracking-tight">Bridging the Gap</h2>
            <p>
              By providing a central platform for all Bethal-related updates, we ensure that opportunities don't pass by those who need them most. Whether you are a small contractor looking for municipal RFQs or a youth seeking learnerships, BethalHub is here to guide you.
            </p>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full -mr-32 -mt-32 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-orange-50 rounded-full -ml-24 -mb-24 blur-3xl"></div>
      </div>
    </div>
  </div>
);

export default About;
