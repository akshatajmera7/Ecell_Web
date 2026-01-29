
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { supabase } from '../supabaseClient';

const initialState = {
  startupName: '',
  tagline: '',
  website: '',
  founders: '',
  email: '',
  contact: '',
  linkedin: '',
  teamSize: '',
  stage: '',
  industry: '',
  status: '',
  achievements: '',
  lookingFor: [],
  pitchDeck: null,
  consent: false,
};

const lookingForOptions = [
  'Funding',
  'Mentorship',
  'Tech Support',
  'Marketing',
  'Networking',
  'Talent/Recruitment',
  'Other',
];

const stages = [
  'Idea',
  'Prototype',
  'Early Revenue',
  'Growth',
];

const statuses = [
  'MVP',
  'Beta Users',
  'Paying Customers',
  'Other',
];

const StartupConnectForm = () => {
  const [formData, setFormData] = useState(initialState);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox' && name === 'consent') {
      setFormData({ ...formData, consent: checked });
    } else if (type === 'checkbox' && name === 'lookingFor') {
      let updated = [...formData.lookingFor];
      if (checked) {
        updated.push(value);
      } else {
        updated = updated.filter((item) => item !== value);
      }
      setFormData({ ...formData, lookingFor: updated });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.size > 5 * 1024 * 1024) {
      setError('Pitch deck file size must be less than 5 MB.');
      setFormData({ ...formData, pitchDeck: null });
    } else {
      setError('');
      setFormData({ ...formData, pitchDeck: file });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Basic validation
    if (
      !formData.startupName ||
      !formData.tagline ||
      !formData.website ||
      !formData.founders ||
      !formData.email ||
      !formData.contact ||
      !formData.linkedin ||
      !formData.teamSize ||
      !formData.stage ||
      !formData.industry ||
      !formData.status ||
      !formData.achievements ||
      formData.lookingFor.length === 0 ||
      !formData.pitchDeck ||
      !formData.consent
    ) {
      setError('Please fill all fields, select at least one "Looking for" option, upload pitch deck, and agree to consent.');
      return;
    }
    setError('');

    // Upload pitch deck to Supabase Storage
    let pitchDeckUrl = '';
    if (formData.pitchDeck) {
      const { data, error } = await supabase.storage
        .from('Pitchdecks')
        .upload(`${Date.now()}_${formData.pitchDeck.name}`, formData.pitchDeck);
      if (error) {
        setError('File upload failed: ' + error.message);
        return;
      }
      pitchDeckUrl = supabase.storage.from('Pitchdecks').getPublicUrl(data.path).publicUrl;
    }

    // Insert form data into Supabase table
    const { error: dbError } = await supabase
      .from('startups')
      .insert([
        {
          startup_name: formData.startupName,
          tagline: formData.tagline,
          website: formData.website,
          founders: formData.founders,
          email: formData.email,
          contact: formData.contact,
          linkedin: formData.linkedin,
          team_size: formData.teamSize,
          stage: formData.stage,
          industry: formData.industry,
          status: formData.status,
          achievements: formData.achievements,
          looking_for: formData.lookingFor,
          pitch_deck_url: pitchDeckUrl,
          consent: formData.consent,
        },
      ]);
    if (dbError) {
      setError('Database error: ' + dbError.message);
      return;
    }

    setSuccess('Form submitted successfully!');
    setFormData(initialState);
  };

  return (
    <div className="min-h-screen py-16 px-4 bg-ecell-bg overflow-hidden relative">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-ecell-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-ecell-secondary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-2xl mx-auto p-8 md:p-12 rounded-[2rem] glass-dark border border-white/10 mt-16 mb-8 relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold tracking-tight text-white font-syne mb-2">
            Startup <span className="text-ecell-primary">Connect</span>
          </h2>
          <p className="text-gray-400 font-manrope font-light">Join the most vibrant entrepreneurial ecosystem.</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="startupName" className="block text-sm font-semibold text-gray-300 mb-2 ml-1">Startup Name <span className="text-ecell-primary">*</span></label>
            <input
              type="text"
              id="startupName"
              name="startupName"
              autoComplete="organization"
              value={formData.startupName}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-ecell-primary transition-all placeholder-gray-600 shadow-inner"
              placeholder="e.g. Acme Corp"
              required
            />
          </div>

          <div>
            <label htmlFor="tagline" className="block text-sm font-semibold text-gray-300 mb-2 ml-1">One-line Pitch / Tagline</label>
            <input
              type="text"
              id="tagline"
              name="tagline"
              autoComplete="off"
              value={formData.tagline}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-ecell-primary transition-all placeholder-gray-600 shadow-inner"
              placeholder="What problem do you solve?"
              required
            />
          </div>

          <div>
            <label htmlFor="website" className="block text-sm font-semibold text-gray-300 mb-2 ml-1">Website / Social Media Links</label>
            <input
              type="text"
              id="website"
              name="website"
              autoComplete="url"
              value={formData.website}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-ecell-primary transition-all placeholder-gray-600 shadow-inner"
              placeholder="https://yourstartup.com"
              required
            />
          </div>

          <div>
            <label htmlFor="founders" className="block text-sm font-semibold text-gray-300 mb-2 ml-1">Founder(s) Name(s) <span className="text-ecell-primary">*</span></label>
            <input
              type="text"
              id="founders"
              name="founders"
              autoComplete="name"
              value={formData.founders}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-ecell-primary transition-all placeholder-gray-600 shadow-inner"
              placeholder="John Doe, Jane Smith"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-2 ml-1">Email <span className="text-ecell-primary">*</span></label>
              <input
                type="email"
                id="email"
                name="email"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-ecell-primary transition-all placeholder-gray-600 shadow-inner"
                placeholder="founder@startup.com"
                required
              />
            </div>
            <div>
              <label htmlFor="contact" className="block text-sm font-semibold text-gray-300 mb-2 ml-1">Contact Number <span className="text-ecell-primary">*</span></label>
              <input
                type="tel"
                id="contact"
                name="contact"
                autoComplete="tel"
                value={formData.contact}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-ecell-primary transition-all placeholder-gray-600 shadow-inner"
                placeholder="+91 XXXXX XXXXX"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="linkedin" className="block text-sm font-semibold text-gray-300 mb-2 ml-1">LinkedIn Profile(s)</label>
            <input
              type="text"
              id="linkedin"
              name="linkedin"
              autoComplete="url"
              value={formData.linkedin}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-ecell-primary transition-all placeholder-gray-600 shadow-inner"
              placeholder="linkedin.com/in/yourprofile"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="teamSize" className="block text-sm font-semibold text-gray-300 mb-2 ml-1">Team Size</label>
              <input
                type="number"
                id="teamSize"
                name="teamSize"
                autoComplete="off"
                value={formData.teamSize}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-ecell-primary transition-all placeholder-gray-600 shadow-inner"
                required
                min="1"
              />
            </div>
            <div>
              <label htmlFor="stage" className="block text-sm font-semibold text-gray-300 mb-2 ml-1">Stage <span className="text-ecell-primary">*</span></label>
              <select
                id="stage"
                name="stage"
                autoComplete="off"
                value={formData.stage}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-ecell-primary transition-all shadow-inner appearance-none cursor-pointer"
                required
              >
                <option value="" className="bg-black text-white">Select Stage</option>
                {stages.map((s) => <option key={s} value={s} className="bg-black text-white">{s}</option>)}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="industry" className="block text-sm font-semibold text-gray-300 mb-2 ml-1">Industry / Sector</label>
              <input
                type="text"
                id="industry"
                name="industry"
                autoComplete="off"
                value={formData.industry}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-ecell-primary transition-all placeholder-gray-600 shadow-inner"
                placeholder="e.g. FinTech, AgriTech"
                required
              />
            </div>
            <div>
              <label htmlFor="status" className="block text-sm font-semibold text-gray-300 mb-2 ml-1">Current Status <span className="text-ecell-primary">*</span></label>
              <select
                id="status"
                name="status"
                autoComplete="off"
                value={formData.status}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-ecell-primary transition-all shadow-inner appearance-none cursor-pointer"
                required
              >
                <option value="" className="bg-black text-white">Select Status</option>
                {statuses.map((s) => <option key={s} value={s} className="bg-black text-white">{s}</option>)}
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="achievements" className="block text-sm font-semibold text-gray-300 mb-2 ml-1">Achievements / Funding</label>
            <textarea
              id="achievements"
              name="achievements"
              autoComplete="off"
              value={formData.achievements}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-ecell-primary transition-all placeholder-gray-600 shadow-inner"
              rows={3}
              placeholder="Briefly mention your milestones..."
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-4 ml-1">What are you looking for?</label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {lookingForOptions.map((option) => (
                <label key={option} className="flex items-center gap-2 group cursor-pointer">
                  <div className="relative flex items-center justify-center">
                    <input
                      type="checkbox"
                      name="lookingFor"
                      value={option}
                      checked={formData.lookingFor.includes(option)}
                      onChange={handleChange}
                      className="peer h-5 w-5 cursor-pointer appearance-none rounded border border-white/10 bg-white/5 transition-all checked:bg-ecell-primary checked:border-ecell-primary"
                    />
                    <svg className="absolute h-3.5 w-3.5 text-black opacity-0 peer-checked:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-400 group-hover:text-white transition-colors">{option}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label htmlFor="pitchDeck" className="block text-sm font-semibold text-gray-300 mb-2 ml-1">Pitch Deck (PDF, max 5MB) <span className="text-ecell-primary">*</span></label>
            <input
              type="file"
              id="pitchDeck"
              accept="application/pdf"
              onChange={handleFileChange}
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-white/10 file:text-white hover:file:bg-white/20 transition-all"
              required
            />
          </div>

          <div className="py-2">
            <label htmlFor="consent" className="flex items-start gap-3 group cursor-pointer">
              <div className="relative flex items-center justify-center mt-1">
                <input
                  type="checkbox"
                  id="consent"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleChange}
                  className="peer h-5 w-5 cursor-pointer appearance-none rounded border border-white/10 bg-white/5 transition-all checked:bg-ecell-primary checked:border-ecell-primary"
                  required
                />
                <svg className="absolute h-3.5 w-3.5 text-black opacity-0 peer-checked:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-xs text-gray-400 font-light leading-relaxed group-hover:text-gray-300 transition-colors">
                I agree to share my startup details with E-Cell BITS Hyderabad for mentorship, collaboration, and promotional purposes.
              </span>
            </label>
          </div>

          {error && (
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="p-4 rounded-xl bg-red-500/10 border border-red-500/50 text-red-500 text-sm"
            >
              {error}
            </motion.div>
          )}

          {success && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 rounded-xl bg-ecell-primary/10 border border-ecell-primary/50 text-ecell-primary text-sm"
            >
              {success}
            </motion.div>
          )}

          <button
            type="submit"
            className="btn-premium w-full py-4 rounded-xl text-lg font-bold tracking-wider uppercase transition-all"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
};

export default StartupConnectForm;
