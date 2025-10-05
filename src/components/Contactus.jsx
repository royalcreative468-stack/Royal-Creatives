import React, { useState } from 'react';
import Navbar from './shared/Navbar';
import Footer from './shared/Footer';
import { CONTACT_API_END_POINT } from "../utils/constant.js";

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const response = await fetch(`${CONTACT_API_END_POINT}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });

        const data = await response.json();

        if (response.ok) {
            alert(data.message);
            setFormData({
                name: '',
                email: '',
                phone: '',
                company: '',
                service: '',
                message: ''
            });
        } else {
            alert(data.message || "❌ Failed to send");
        }
    } catch (error) {
        console.error("Frontend error:", error);
        alert("⚠️ Something went wrong!");
    }
};


    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-gradient-to-br from-gray-50 to-red-50">
                {/* Header Section */}
                <div className="bg-white border-b border-red-100">
                    <div className="max-w-7xl mx-auto px-6 py-16 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">
                            Get In <span className="bg-gradient-to-r from-[#A52A2A] to-[#8B0000] bg-clip-text text-transparent">Touch</span>
                        </h1>
                        <div className="w-24 h-1 bg-gradient-to-r from-[#A52A2A] to-[#8B0000] mx-auto mb-6"></div>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Ready to elevate your brand? Let's discuss how our marketing solutions can help you achieve your goals.
                        </p>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-6 py-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Information */}
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Let's Start a Conversation</h2>
                                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                    We're here to help you transform your marketing strategy. Whether you need digital campaigns, 
                                    outdoor advertising, or transit branding, our team is ready to deliver results.
                                </p>
                            </div>

                            {/* Contact Cards */}
                            <div className="space-y-6">
                                {/* Office Address */}
                                <div className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg border border-red-100">
                                    <div className="w-12 h-12 bg-gradient-to-r from-[#A52A2A] to-[#8B0000] rounded-xl flex items-center justify-center flex-shrink-0">
                                        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 mb-2">Our Office</h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            123 Marketing Street<br />
                                            Business District<br />
                                            Mumbai, Maharashtra 400001<br />
                                            India
                                        </p>
                                    </div>
                                </div>

                                {/* Phone */}
                                <div className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg border border-red-100">
                                    <div className="w-12 h-12 bg-gradient-to-r from-[#A52A2A] to-[#8B0000] rounded-xl flex items-center justify-center flex-shrink-0">
                                        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 mb-2">Call Us</h3>
                                        <p className="text-gray-600">+91 98765 43210</p>
                                        <p className="text-gray-600">+91 98765 43211</p>
                                        <p className="text-sm text-gray-500 mt-1">Mon - Fri: 9:00 AM - 6:00 PM</p>
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg border border-red-100">
                                    <div className="w-12 h-12 bg-gradient-to-r from-[#A52A2A] to-[#8B0000] rounded-xl flex items-center justify-center flex-shrink-0">
                                        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 mb-2">Email Us</h3>
                                        <p className="text-gray-600">info@yourcompany.com</p>
                                        <p className="text-gray-600">sales@yourcompany.com</p>
                                        <p className="text-sm text-gray-500 mt-1">We'll respond within 24 hours</p>
                                    </div>
                                </div>
                            </div>

                            {/* Social Media */}
                            <div className="pt-6 border-t border-gray-200">
                                <h3 className="font-bold text-gray-900 mb-4">Follow Us</h3>
                                <div className="flex space-x-4">
                                    {['Facebook', 'Twitter', 'Instagram', 'LinkedIn'].map((social) => (
                                        <button key={social} className="w-10 h-10 bg-[#A52A2A]/10 hover:bg-[#A52A2A] text-[#A52A2A] hover:text-white rounded-lg transition-colors duration-300 flex items-center justify-center">
                                            <span className="sr-only">{social}</span>
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" />
                                            </svg>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-white rounded-2xl shadow-xl border border-red-100 p-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
                            
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#A52A2A] focus:border-[#A52A2A] transition-colors"
                                            placeholder="Your full name"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#A52A2A] focus:border-[#A52A2A] transition-colors"
                                            placeholder="your@email.com"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#A52A2A] focus:border-[#A52A2A] transition-colors"
                                            placeholder="+91 98765 43210"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            Company Name
                                        </label>
                                        <input
                                            type="text"
                                            name="company"
                                            value={formData.company}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#A52A2A] focus:border-[#A52A2A] transition-colors"
                                            placeholder="Your company"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Service Interest
                                    </label>
                                    <select
                                        name="service"
                                        value={formData.service}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#A52A2A] focus:border-[#A52A2A] transition-colors"
                                    >
                                        <option value="">Select a service</option>
                                        <option value="digital-marketing">Promotion & Direct Marketing</option>
                                        <option value="print-outdoor">Print & Outdoor Media</option>
                                        <option value="transit-venue">Transit & Venue Branding</option>
                                        <option value="custom">Custom Solution</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Message *
                                    </label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={5}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#A52A2A] focus:border-[#A52A2A] transition-colors resize-none"
                                        placeholder="Tell us about your project requirements..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-[#A52A2A] to-[#8B0000] text-white py-4 px-6 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center space-x-2"
                                >
                                    <span>Send Message</span>
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                    </svg>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                {/* Map Section (Optional) */}
                <div className="bg-white border-t border-red-100">
                    <div className="max-w-7xl mx-auto px-6 py-16">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Visit Our Office</h2>
                            <p className="text-gray-600">Come and meet our team at our office location</p>
                        </div>
                        
                        {/* Placeholder for map - replace with actual map component */}
                        <div className="bg-gray-100 rounded-2xl h-96 flex items-center justify-center border border-red-100">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-[#A52A2A] rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                                    </svg>
                                </div>
                                <p className="text-gray-600">Interactive Map Coming Soon</p>
                                <p className="text-sm text-gray-500 mt-2">
                                    Integrate your preferred map service here (Google Maps, Mapbox, etc.)
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ContactUs;
