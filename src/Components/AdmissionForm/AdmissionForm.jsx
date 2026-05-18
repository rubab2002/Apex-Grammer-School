import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AdmissionForm = () => {
  const [formData, setFormData] = useState({
    studentName: '',
    dob: '',
    gender: '',
    grade: '',
    parentName: '',
    phone: '',
    email: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    setIsSubmitted(true);
  };

  return (
    // FIX 1: pt-36 lagaya taake content safe rahay aur clean white Navbar perfect prominent show ho
    <div className="pt-36 pb-24 bg-slate-50 min-h-screen flex items-center justify-center px-6 selection:bg-blue-600 selection:text-white">
      
      {/* Main Luxury Form Canvas Framework */}
      <div className="max-w-4xl w-full bg-white rounded-[3rem] shadow-2xl shadow-slate-200 border border-gray-100 overflow-hidden grid grid-cols-1 md:grid-cols-12
                      transition-all duration-500 ease-out transform hover:shadow-blue-500/5"
      >
        
        {/* 2. Left Side Info Bar (Upgraded with Premium Gradient & Interactive Reflection) */}
        <div className="md:col-span-4 bg-linear-to-b from-blue-600 via-blue-600 to-indigo-700 p-10 text-white flex flex-col justify-between relative overflow-hidden group/side cursor-pointer">
          {/* Decorative Background Aurora Circle */}
          <div className="absolute -top-10 -left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover/side:scale-120 transition-transform duration-700"></div>
          
          <div className="relative z-10">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-200 block mb-2 animate-pulse">Live Portal</span>
            <h3 className="text-3xl font-black mb-4 tracking-tight leading-none">Apex Admissions</h3>
            <div className="h-1 w-12 bg-white rounded-full mb-6"></div>
            <p className="text-blue-50 text-xs md:text-sm leading-relaxed font-semibold opacity-90">
              Join a community of excellence. Please fill out this form, and our admissions team will contact you within 24 hours.
            </p>
          </div>
          
          <div className="relative z-10 mt-12 md:mt-0 text-[10px] text-blue-200 font-black uppercase tracking-[0.2em] border-t border-white/10 pt-4">
            Session 2026 - 2027
          </div>
        </div>

        {/* 3. Right Side Form Component Suite */}
        <div className="md:col-span-8 p-10 md:p-14">
          {isSubmitted ? (
            <div className="text-center py-12 animate-in fade-in zoom-in duration-500">
              <div className="w-20 h-20 bg-green-50 text-green-500 border border-green-100 text-4xl flex items-center justify-center rounded-2xl mx-auto mb-6 animate-bounce shadow-lg shadow-green-500/10">✓</div>
              <h3 className="text-3xl font-black text-slate-800 mb-2 tracking-tight">Thank You!</h3>
              <p className="text-slate-500 font-semibold mb-8 max-w-sm mx-auto text-sm leading-relaxed">Your application has been successfully received. Our admissions officer will call you shortly.</p>
              <Link to="/" className="inline-block bg-slate-900 text-white px-8 py-3.5 rounded-xl font-black text-xs uppercase tracking-widest cursor-pointer transition-all duration-300 transform hover:bg-blue-600 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/20 active:scale-95">
                Go Back Home
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="mb-2">
                <h2 className="text-3xl font-black text-slate-800 tracking-tight">Admission Enquiry</h2>
                <p className="text-slate-400 font-medium text-xs mt-1">Provide correct information to process the registration.</p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Student Name */}
                <div>
                  <label className="block text-[10px] font-black uppercase text-slate-400 tracking-wider mb-2">Student Full Name</label>
                  <input type="text" name="studentName" required value={formData.studentName} onChange={handleChange} className="w-full bg-slate-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 focus:bg-white focus:shadow-lg focus:shadow-blue-500/5 transition-all duration-300 font-semibold text-slate-700 cursor-text" />
                </div>
                
                {/* Date of Birth */}
                <div>
                  <label className="block text-[10px] font-black uppercase text-slate-400 tracking-wider mb-2">Date of Birth</label>
                  <input type="date" name="dob" required value={formData.dob} onChange={handleChange} className="w-full bg-slate-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 focus:bg-white focus:shadow-lg focus:shadow-blue-500/5 transition-all duration-300 font-semibold text-slate-700 cursor-pointer" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Gender */}
                <div>
                  <label className="block text-[10px] font-black uppercase text-slate-400 tracking-wider mb-2">Gender</label>
                  <select name="gender" required value={formData.gender} onChange={handleChange} className="w-full bg-slate-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 focus:bg-white focus:shadow-lg focus:shadow-blue-500/5 transition-all duration-300 font-semibold text-slate-700 cursor-pointer">
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>

                {/* Grade/Class */}
                <div>
                  <label className="block text-[10px] font-black uppercase text-slate-400 tracking-wider mb-2">Admission Required For Class</label>
                  <select name="grade" required value={formData.grade} onChange={handleChange} className="w-full bg-slate-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 focus:bg-white focus:shadow-lg focus:shadow-blue-500/5 transition-all duration-300 font-semibold text-slate-700 cursor-pointer">
                    <option value="">Select Class</option>
                    <option value="preschool">Preschool</option>
                    <option value="primary">Primary (Grade 1-5)</option>
                    <option value="middle">Middle (Grade 6-8)</option>
                    <option value="matric_oLevel">Matric / O-Level</option>
                  </select>
                </div>
              </div>

              <div className="w-full h-px bg-slate-100 my-2"></div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Parent Name */}
                <div>
                  <label className="block text-[10px] font-black uppercase text-slate-400 tracking-wider mb-2">Father / Guardian Name</label>
                  <input type="text" name="parentName" required value={formData.parentName} onChange={handleChange} className="w-full bg-slate-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 focus:bg-white focus:shadow-lg focus:shadow-blue-500/5 transition-all duration-300 font-semibold text-slate-700 cursor-text" />
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-[10px] font-black uppercase text-slate-400 tracking-wider mb-2">Phone Number</label>
                  <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} className="w-full bg-slate-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 focus:bg-white focus:shadow-lg focus:shadow-blue-500/5 transition-all duration-300 font-semibold text-slate-700 cursor-text" />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-[10px] font-black uppercase text-slate-400 tracking-wider mb-2">Email Address</label>
                <input type="email" name="email" required value={formData.email} onChange={handleChange} className="w-full bg-slate-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 focus:bg-white focus:shadow-lg focus:shadow-blue-500/5 transition-all duration-300 font-semibold text-slate-700 cursor-text" />
              </div>

              {/* Submit Button (Upgraded with Distinct Pointer & Lift Transitions) */}
              <button 
                type="submit" 
                className="w-full bg-blue-600 text-white py-4 rounded-xl font-black text-xs uppercase tracking-widest cursor-pointer
                           transition-all duration-300 ease-out transform
                           shadow-xl shadow-blue-600/20
                           hover:bg-blue-500 hover:-translate-y-0.5 hover:shadow-blue-500/40
                           active:scale-[0.98]"
              >
                SUBMIT APPLICATION
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdmissionForm;