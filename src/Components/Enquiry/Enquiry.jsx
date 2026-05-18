import React from 'react';

const Enquiry = () => {
  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        {/* Left Side: Information */}
        <div className="lg:sticky lg:top-32">
          <h2 className="text-5xl font-black text-slate-800 mb-8 leading-tight">
            Start Your Child's <br/>
            <span className="text-blue-600 italic">Success Story</span> Here.
          </h2>
          <p className="text-slate-500 font-medium text-lg mb-10 leading-relaxed">
            Our admissions office is ready to help you navigate the process. Book a campus tour or apply today for the 2026 session.
          </p>

          <div className="space-y-8">
            <div className="flex items-start gap-5">
              <div className="w-14 h-14 bg-white shadow-lg rounded-2xl flex items-center justify-center text-2xl shrink-0">📍</div>
              <div>
                <h4 className="font-black text-slate-800 text-lg">Visit Us</h4>
                <p className="text-slate-500 font-medium">123 Education Lane, Lahore, Pakistan</p>
              </div>
            </div>
            <div className="flex items-start gap-5">
              <div className="w-14 h-14 bg-white shadow-lg rounded-2xl flex items-center justify-center text-2xl shrink-0">📞</div>
              <div>
                <h4 className="font-black text-slate-800 text-lg">Call Support</h4>
                <p className="text-slate-500 font-medium">+92 42 300 1234567</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="bg-white p-10 md:p-12 rounded-[2.5rem] shadow-2xl shadow-blue-900/5 border border-gray-100">
          <h3 className="text-2xl font-black text-slate-800 mb-8">Admissions Enquiry</h3>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Parent Name</label>
                <input type="text" className="w-full p-4 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-blue-600 font-medium" placeholder="e.g. Ahmad Ali" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
                <input type="email" className="w-full p-4 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-blue-600 font-medium" placeholder="ahmad@example.com" />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Applying for Grade</label>
              <select className="w-full p-4 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-blue-600 font-medium appearance-none">
                <option>Pre-Primary</option>
                <option>Primary School</option>
                <option>Senior School</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Message</label>
              <textarea rows="4" className="w-full p-4 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-blue-600 font-medium" placeholder="How can we help you?"></textarea>
            </div>

            <button className="w-full bg-slate-900 text-white py-5 rounded-2xl font-black text-lg hover:bg-blue-600 transition-all shadow-xl shadow-slate-900/20 active:scale-95">
              SUBMIT APPLICATION
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Enquiry;