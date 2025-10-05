import React, { useState } from 'react';
import { Badge } from './ui/badge';
import { useNavigate } from 'react-router-dom';

const JobCard = ({ job }) => {
    // const [isBookmarked, setIsBookmarked] = useState(false);
    const navigate = useNavigate();

    // const handleBookmark = (e) => {
    //     e.stopPropagation();
    //     setIsBookmarked(!isBookmarked);
    // };

    const formatDate = (date) => {
        const now = new Date();
        const jobDate = new Date(date);
        const diffTime = Math.abs(now - jobDate);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        
        if (diffDays === 1) return "1 day ago";
        if (diffDays < 7) return `${diffDays} days ago`;
        if (diffDays < 30) return `${Math.ceil(diffDays / 7)} weeks ago`;
        return `${Math.ceil(diffDays / 30)} months ago`;
    };

    return (
        <div 
            onClick={() => navigate(`/description/${job._id}`)} 
            className='group bg-white rounded-2xl shadow-lg hover:shadow-2xl border border-red-100 hover:border-[#A52A2A]/30 cursor-pointer transition-all duration-300 transform hover:-translate-y-1 p-6 relative overflow-hidden'
        >
            {/* Top accent line */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#A52A2A] to-[#8B0000]"></div>
            
            {/* Header Section */}
            <div className="flex items-start justify-between mb-4">
                <div className="flex items-start space-x-4 flex-1">
                    {/* Company Logo/Initial */}
                    <div className="w-14 h-14 bg-gradient-to-r from-[#A52A2A] to-[#8B0000] rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg flex-shrink-0">
                        {job?.company?.name?.charAt(0) || 'C'}
                    </div>
                    
                    <div className="flex-1 min-w-0">
                        <h2 className='font-bold text-lg text-gray-900 mb-1 group-hover:text-[#A52A2A] transition-colors'>
                            {job?.company?.name}
                        </h2>
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <div className="flex items-center space-x-1">
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span>India</span>
                            </div>
                            <div className="flex items-center space-x-1">
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span>{formatDate(job?.createdAt) || "2 days ago"}</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Bookmark Button */}
                {/* <button 
                    onClick={handleBookmark}
                    className={`p-2 rounded-lg transition-colors ${
                        isBookmarked 
                            ? 'bg-[#A52A2A]/10 text-[#A52A2A]' 
                            : 'hover:bg-red-50 text-gray-400 hover:text-[#A52A2A]'
                    }`}
                >
                    <svg className="w-5 h-5" fill={isBookmarked ? "currentColor" : "none"} viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                    </svg>
                </button> */}
            </div>

            {/* Job Title & Description */}
            <div className="mb-6">
                <h3 className='font-bold text-xl mb-3 text-gray-800 leading-tight group-hover:text-gray-900 transition-colors'>
                    {job?.title}
                </h3>
                <p className='text-gray-600 text-sm leading-relaxed line-clamp-3'>
                    {job?.description}
                </p>
            </div>

            {/* Job Details Tags */}
            <div className='flex flex-wrap gap-2 mb-6'>
                <div className="flex items-center space-x-1 bg-blue-50 text-blue-700 px-3 py-2 rounded-full text-xs font-semibold border border-blue-200">
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <span>{job?.position || 1} Position{job?.position !== 1 ? 's' : ''}</span>
                </div>
                
                <div className="flex items-center space-x-1 bg-[#A52A2A]/10 text-[#A52A2A] px-3 py-2 rounded-full text-xs font-semibold border border-[#A52A2A]/20">
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>{job?.jobType || 'Full-time'}</span>
                </div>
                
                <div className="flex items-center space-x-1 bg-green-50 text-green-700 px-3 py-2 rounded-full text-xs font-semibold border border-green-200">
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                    <span>₹{job?.salary || 'Competitive'} LPA</span>
                </div>

                {job?.experience && (
                    <div className="flex items-center space-x-1 bg-purple-50 text-purple-700 px-3 py-2 rounded-full text-xs font-semibold border border-purple-200">
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                        <span>{job?.experience} Years</span>
                    </div>
                )}
            </div>

            {/* Skills/Requirements (if available) */}
            {job?.requirements && job.requirements.length > 0 && (
                <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-800 mb-2">Key Requirements:</h4>
                    <div className="flex flex-wrap gap-1">
                        {job.requirements.slice(0, 4).map((skill, index) => (
                            <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                                {skill}
                            </span>
                        ))}
                        {job.requirements.length > 4 && (
                            <span className="bg-gray-100 text-gray-500 px-2 py-1 rounded text-xs">
                                +{job.requirements.length - 4} more
                            </span>
                        )}
                    </div>
                </div>
            )}

            {/* Footer */}
<div className="pt-4 border-t border-gray-100">
    <button 
        onClick={(e) => {
            e.stopPropagation();
            navigate(`/description/${job._id}`);
        }}
        className="w-full bg-gradient-to-r from-[#A52A2A] to-[#8B0000] text-white px-4 py-2 rounded-lg text-sm font-medium hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center space-x-2"
    >
        <span>View Job</span>
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
    </button>
</div>

            </div>
    );
};

export default JobCard;
