import React, { useState } from 'react';
import { X, Briefcase, CheckCircle2, ArrowRight } from 'lucide-react';
import { CAREER_POSITIONS } from '../data/mockData';
import { CareerPosition } from '../types';

const CAREERS_EMAIL = 'cleanburger.co@gmail.com';

interface CareersModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CareersModal: React.FC<CareersModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [appliedPositionId, setAppliedPositionId] = useState<string | null>(null);
  const [applicantName, setApplicantName] = useState('');
  const [applicantPhone, setApplicantPhone] = useState('');
  const [submittedMessage, setSubmittedMessage] = useState(false);

  const handleApplySubmit = (e: React.FormEvent, pos: CareerPosition) => {
    e.preventDefault();

    const subject = `Job Application - ${pos.title}`;
    const body = [
      `Hello Clean Burger Team,`,
      ``,
      `I would like to apply for the ${pos.title} position (${pos.department} • ${pos.location} • ${pos.type}).`,
      ``,
      `Name: ${applicantName}`,
      `Phone: ${applicantPhone}`,
      ``,
      `Please find my resume attached.`,
      ``,
      `Thank you.`,
    ].join('\n');

    window.location.href = `mailto:${CAREERS_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    setSubmittedMessage(true);
    setTimeout(() => {
      setSubmittedMessage(false);
      setAppliedPositionId(null);
      setApplicantName('');
      setApplicantPhone('');
      onClose();
    }, 2000);
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative bg-[#121414] border border-white/10 rounded-lg max-w-2xl w-full my-8 overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-200"
      >
        {/* Header */}
        <div className="p-6 bg-[#171c26] border-b border-white/10 flex items-center justify-between">
          <div>
            <span className="text-[#60a5fa] font-label text-xs uppercase font-bold tracking-widest">
              Join The Craft
            </span>
            <h2 className="font-display text-3xl font-bold uppercase text-white">
              Careers at Clean Burger
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-black/40 rounded-full text-[#c4c6d1] hover:text-[#60a5fa]"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Positions List */}
        <div className="p-6 max-h-[65vh] overflow-y-auto space-y-6 font-body">
          {submittedMessage ? (
            <div className="text-center py-12 space-y-3">
              <CheckCircle2 className="w-16 h-16 text-emerald-400 mx-auto animate-bounce" />
              <h3 className="font-display text-2xl uppercase text-white font-bold">
                Redirecting to Your Email App
              </h3>
              <p className="text-xs text-[#c4c6d1]">
                Your application email has been pre-filled — just attach your resume and hit send to {CAREERS_EMAIL}.
              </p>
            </div>
          ) : (
            CAREER_POSITIONS.map((pos) => (
              <div
                key={pos.id}
                className="bg-[#171c26] border border-white/10 rounded p-5 space-y-3 hover:border-[#1a3875] transition-all"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h3 className="font-display text-2xl font-bold text-white">{pos.title}</h3>
                    <p className="text-xs text-[#60a5fa] font-label uppercase font-bold">
                      {pos.department} • {pos.location} • {pos.type}
                    </p>
                  </div>

                  <button
                    onClick={() => setAppliedPositionId(appliedPositionId === pos.id ? null : pos.id)}
                    className="bg-[#1a3875] hover:bg-[#234ca3] text-white border border-[#2e5bbd] font-label text-xs font-bold px-4 py-2 rounded uppercase self-start sm:self-auto shadow"
                  >
                    {appliedPositionId === pos.id ? 'Close Form' : 'Apply Now'}
                  </button>
                </div>

                <p className="text-xs text-[#c4c6d1] leading-relaxed">{pos.description}</p>

                <div className="pt-2">
                  <span className="text-[10px] font-label text-[#c4c6d1] uppercase font-bold block mb-1">
                    Requirements:
                  </span>
                  <ul className="text-xs text-[#c4c6d1]/80 space-y-1 list-disc list-inside">
                    {pos.requirements.map((req, idx) => (
                      <li key={idx}>{req}</li>
                    ))}
                  </ul>
                </div>

                {/* Inline Quick Application Form */}
                {appliedPositionId === pos.id && (
                  <form
                    onSubmit={(e) => handleApplySubmit(e, pos)}
                    className="mt-4 pt-4 border-t border-white/10 space-y-3 bg-[#0f1420] p-4 rounded border border-white/5"
                  >
                    <p className="text-xs font-label uppercase font-bold text-[#60a5fa]">
                      Quick Application for {pos.title}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <input
                        type="text"
                        required
                        value={applicantName}
                        onChange={(e) => setApplicantName(e.target.value)}
                        placeholder="Full Name"
                        className="bg-[#171c26] border border-white/10 rounded p-2 text-xs text-white"
                      />
                      <input
                        type="tel"
                        required
                        value={applicantPhone}
                        onChange={(e) => setApplicantPhone(e.target.value)}
                        placeholder="Phone Number (+91)"
                        className="bg-[#171c26] border border-white/10 rounded p-2 text-xs text-white"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-[#1a3875] hover:bg-[#234ca3] text-white border border-[#2e5bbd] font-label font-bold text-xs py-2.5 rounded uppercase transition-all shadow-md"
                    >
                      Send Application via Email
                    </button>
                  </form>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
