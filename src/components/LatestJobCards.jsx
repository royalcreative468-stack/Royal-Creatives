import React from 'react'
import { Badge } from './ui/badge'
import { useNavigate } from 'react-router-dom'

const LatestJobCards = ({job}) => {
    const navigate = useNavigate();
    
    return (
        <div 
            onClick={() => navigate(`/description/${job._id}`)} 
            className='group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl border border-red-100 cursor-pointer transition-all duration-300 transform hover:-translate-y-2 overflow-hidden'
        >
            {/* Gradient Header */}
            <div className="h-2 bg-gradient-to-r from-[#A52A2A] to-[#8B0000]"></div>
            
            <div className="p-6">
                {/* Company Info */}
                <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gradient-to-r from-[#A52A2A] to-[#8B0000] rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                            {job?.company?.name?.charAt(0) || 'C'}
                        </div>
                        <div>
                            <h2 className='font-bold text-lg text-gray-900 group-hover:text-[#A52A2A] transition-colors'>
                                {job?.company?.name}
                            </h2>
                            <div className="flex items-center space-x-1 text-gray-500 text-sm">
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span>India</span>
                            </div>
                        </div>
                    </div>
                    
                    {/* Bookmark Icon */}
                    <button className="p-2 rounded-lg hover:bg-red-50 transition-colors group">
                        <svg className="w-5 h-5 text-gray-400 group-hover:text-[#A52A2A] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                        </svg>
                    </button>
                </div>

                {/* Job Title & Description */}
                <div className="mb-6">
                    <h3 className='font-bold text-xl mb-3 text-gray-800 leading-tight'>
                        {job?.title}
                    </h3>
                    <p className='text-gray-600 text-sm leading-relaxed line-clamp-3'>
                        {job?.description}
                    </p>
                </div>

                {/* Job Details */}
                <div className='flex flex-wrap gap-2 mb-4'>
                    <div className="flex items-center space-x-1 bg-blue-50 text-blue-700 px-3 py-1.5 rounded-full text-xs font-semibold border border-blue-200">
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        <span>{job?.position} Positions</span>
                    </div>
                    
                    <div className="flex items-center space-x-1 bg-red-50 text-[#A52A2A] px-3 py-1.5 rounded-full text-xs font-semibold border border-red-200">
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span>{job?.jobType}</span>
                    </div>
                    
                    <div className="flex items-center space-x-1 bg-green-50 text-green-700 px-3 py-1.5 rounded-full text-xs font-semibold border border-green-200">
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                        </svg>
                        <span>₹{job?.salary} </span>
                    </div>
                </div>

                {/* Footer with Apply Button */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="text-xs text-gray-500">
                        Posted 2 days ago
                    </div>
                    <button className="bg-gradient-to-r from-[#A52A2A] to-[#8B0000] text-white px-4 py-2 rounded-lg text-sm font-medium hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5">
                        View Details
                    </button>
                </div>
            </div>
        </div>
    )
}

export default LatestJobCards
