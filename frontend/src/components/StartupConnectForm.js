
import React, { useState } from 'react';
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
    <div className="max-w-2xl mx-auto bg-white p-8 rounded shadow-lg mt-16 mb-8">
      {/* Header with gap, no logo, text only */}
      <div className="flex items-center justify-center mb-8">
        <h2 className="text-3xl font-extrabold tracking-tight text-black">Connect with E-Cell BITS Hyderabad</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-1 font-semibold">Startup Name <span className="text-red-500">*</span></label>
          <input type="text" name="startupName" value={formData.startupName} onChange={handleChange} className="w-full border px-3 py-2 rounded" required />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-semibold">One-line Pitch / Tagline</label>
          <input type="text" name="tagline" value={formData.tagline} onChange={handleChange} className="w-full border px-3 py-2 rounded" required />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-semibold">Website / Social Media Links</label>
          <input type="text" name="website" value={formData.website} onChange={handleChange} className="w-full border px-3 py-2 rounded" required />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-semibold">Founder(s) Name(s) <span className="text-red-500">*</span></label>
          <input type="text" name="founders" value={formData.founders} onChange={handleChange} className="w-full border px-3 py-2 rounded" required />
        </div>
        <div className="mb-4 grid grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 font-semibold">Email <span className="text-red-500">*</span></label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full border px-3 py-2 rounded" required />
          </div>
          <div>
            <label className="block mb-1 font-semibold">Contact Number <span className="text-red-500">*</span></label>
            <input type="tel" name="contact" value={formData.contact} onChange={handleChange} className="w-full border px-3 py-2 rounded" required />
          </div>
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-semibold">LinkedIn Profile(s)</label>
          <input type="text" name="linkedin" value={formData.linkedin} onChange={handleChange} className="w-full border px-3 py-2 rounded" required />
        </div>
        <div className="mb-4 grid grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 font-semibold">Number of Team Members</label>
            <input type="number" name="teamSize" value={formData.teamSize} onChange={handleChange} className="w-full border px-3 py-2 rounded" required min="1" />
          </div>
          <div>
            <label className="block mb-1 font-semibold">Stage of Startup <span className="text-red-500">*</span></label>
            <select name="stage" value={formData.stage} onChange={handleChange} className="w-full border px-3 py-2 rounded" required>
              <option value="">Select</option>
              {stages.map((s) => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>
        </div>
        <div className="mb-4 grid grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 font-semibold">Industry / Sector</label>
            <input type="text" name="industry" value={formData.industry} onChange={handleChange} className="w-full border px-3 py-2 rounded" required />
          </div>
          <div>
            <label className="block mb-1 font-semibold">Current Status <span className="text-red-500">*</span></label>
            <select name="status" value={formData.status} onChange={handleChange} className="w-full border px-3 py-2 rounded" required>
              <option value="">Select</option>
              {statuses.map((s) => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-semibold">Any Achievements / Recognition / Funding</label>
          <textarea name="achievements" value={formData.achievements} onChange={handleChange} className="w-full border px-3 py-2 rounded" rows={2} required />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-semibold">Looking for:</label>
          <div className="flex flex-wrap gap-4 mt-2">
            {lookingForOptions.map((option) => (
              <label key={option} className="flex items-center">
                <input
                  type="checkbox"
                  name="lookingFor"
                  value={option}
                  checked={formData.lookingFor.includes(option)}
                  onChange={handleChange}
                  className="mr-2"
                />
                {option}
              </label>
            ))}
          </div>
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-semibold">Pitch Deck Upload (PDF, max 5 MB)</label>
          <input type="file" accept="application/pdf" onChange={handleFileChange} className="w-full border px-3 py-2 rounded" required />
        </div>
        <div className="mb-4">
          <label className="flex items-center">
            <input
              type="checkbox"
              name="consent"
              checked={formData.consent}
              onChange={handleChange}
              className="mr-2"
              required
            />
            <span className="text-sm">I agree to share my startup details with E-Cell BITS Hyderabad for mentorship, collaboration, and promotional purposes.</span>
          </label>
        </div>
        {error && <div className="text-red-500 mb-2">{error}</div>}
        {success && <div className="text-green-500 mb-2">{success}</div>}
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full text-lg font-semibold mt-2">Submit</button>
      </form>
    </div>
  );
};

export default StartupConnectForm;
