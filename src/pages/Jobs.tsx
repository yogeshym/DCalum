import React, { useState } from 'react';
import { Briefcase, MapPin, Clock, DollarSign, Users, Star, BookmarkPlus, Send, Filter } from 'lucide-react';

const Jobs = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  const jobs = [
    {
      id: 1,
      title: 'Senior Software Engineer',
      company: 'Google',
      location: 'Bangalore, India',
      type: 'Full-time',
      salary: '₹25-35 LPA',
      postedBy: 'Rahul Sharma (2018 Batch)',
      postedTime: '2 days ago',
      applicants: 45,
      description: 'We are looking for a Senior Software Engineer to join our core platform team. You will work on high-scale distributed systems and mentor junior developers.',
      requirements: ['5+ years experience', 'Strong in Java/Python', 'System Design', 'Leadership skills'],
      tags: ['Remote OK', 'Alumni Referral', 'Fast Growing'],
      logo: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=100',
      isBookmarked: false,
      referralAvailable: true
    },
    {
      id: 2,
      title: 'Product Manager - AI/ML',
      company: 'Microsoft',
      location: 'Hyderabad, India',
      type: 'Full-time',
      salary: '₹30-40 LPA',
      postedBy: 'Priya Patel (2017 Batch)',
      postedTime: '1 week ago',
      applicants: 23,
      description: 'Lead product strategy for AI-powered features in Microsoft Office suite. Work with cross-functional teams to drive innovation.',
      requirements: ['3+ years PM experience', 'AI/ML knowledge', 'Data-driven', 'MBA preferred'],
      tags: ['Hybrid', 'Leadership Role', 'Innovation'],
      logo: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=100',
      isBookmarked: true,
      referralAvailable: true
    },
    {
      id: 3,
      title: 'Frontend Developer',
      company: 'Flipkart',
      location: 'Mumbai, India',
      type: 'Full-time',
      salary: '₹15-22 LPA',
      postedBy: 'Amit Kumar (2019 Batch)',
      postedTime: '3 days ago',
      applicants: 67,
      description: 'Join our e-commerce platform team to build user-facing features. Work with React, TypeScript, and modern web technologies.',
      requirements: ['3+ years React experience', 'TypeScript', 'Web performance', 'Mobile responsive'],
      tags: ['React', 'TypeScript', 'E-commerce'],
      logo: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=100',
      isBookmarked: false,
      referralAvailable: true
    }
  ];

  const handleApply = (jobId: number) => {
    console.log(`Applied to job ${jobId}`);
  };

  const handleBookmark = (jobId: number) => {
    console.log(`Bookmarked job ${jobId}`);
  };

  const handleReferral = (jobId: number) => {
    console.log(`Requested referral for job ${jobId}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Job Opportunities</h1>
            <p className="text-gray-600 mt-2">Discover your next career move through alumni connections</p>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center space-x-2 bg-white border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <Filter className="w-4 h-4" />
              <span>Filters</span>
            </button>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200">
              Post a Job
            </button>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Sidebar */}
          <div className="w-80 space-y-6">
            {/* Stats */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Job Stats</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Total Jobs</span>
                  <span className="font-bold text-blue-600">1,247</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">This Week</span>
                  <span className="font-bold text-green-600">89</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Alumni Posted</span>
                  <span className="font-bold text-purple-600">234</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Referral Available</span>
                  <span className="font-bold text-orange-600">156</span>
                </div>
              </div>
            </div>

            {/* Filters */}
            {showFilters && (
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Filters</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Job Type</label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option>All Types</option>
                      <option>Full-time</option>
                      <option>Part-time</option>
                      <option>Contract</option>
                      <option>Internship</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option>All Locations</option>
                      <option>Bangalore</option>
                      <option>Mumbai</option>
                      <option>Delhi</option>
                      <option>Hyderabad</option>
                      <option>Remote</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Experience</label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option>All Experience</option>
                      <option>0-2 years</option>
                      <option>3-5 years</option>
                      <option>5-8 years</option>
                      <option>8+ years</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* Top Companies */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Hiring Companies</h3>
              <div className="space-y-3">
                {['Google', 'Microsoft', 'Amazon', 'Flipkart', 'Zomato'].map((company, index) => (
                  <div key={index} className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg cursor-pointer">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                      <span className="text-white text-xs font-bold">{company[0]}</span>
                    </div>
                    <span className="text-gray-700">{company}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Tabs */}
            <div className="flex space-x-1 mb-6 bg-gray-200 p-1 rounded-xl w-fit">
              {['all', 'referral', 'saved', 'applied'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    activeTab === tab
                      ? 'bg-white text-blue-600 shadow-md'
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                >
                  {tab === 'all' ? 'All Jobs' : 
                   tab === 'referral' ? 'Referral Available' :
                   tab === 'saved' ? 'Saved Jobs' : 'Applied Jobs'}
                </button>
              ))}
            </div>

            {/* Job Cards */}
            <div className="space-y-6">
              {jobs.map((job) => (
                <div key={job.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <img
                        src={job.logo}
                        alt={job.company}
                        className="w-12 h-12 rounded-lg object-cover"
                      />
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{job.title}</h3>
                        <p className="text-gray-600">{job.company}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => handleBookmark(job.id)}
                      className={`p-2 rounded-lg transition-colors ${
                        job.isBookmarked ? 'bg-blue-100 text-blue-600' : 'text-gray-400 hover:text-blue-600'
                      }`}
                    >
                      <BookmarkPlus className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Job Details */}
                  <div className="flex items-center space-x-6 text-sm text-gray-600 mb-4">
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {job.location}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {job.type}
                    </div>
                    <div className="flex items-center">
                      <DollarSign className="w-4 h-4 mr-1" />
                      {job.salary}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {job.applicants} applicants
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {job.tags.map((tag, index) => (
                      <span key={index} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Description */}
                  <p className="text-gray-700 mb-4 line-clamp-2">{job.description}</p>

                  {/* Requirements */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Requirements:</h4>
                    <div className="flex flex-wrap gap-2">
                      {job.requirements.map((req, index) => (
                        <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                          {req}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div className="text-sm text-gray-600">
                      <p>Posted by <span className="font-medium text-blue-600">{job.postedBy}</span></p>
                      <p>{job.postedTime}</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      {job.referralAvailable && (
                        <button
                          onClick={() => handleReferral(job.id)}
                          className="flex items-center space-x-2 bg-green-100 text-green-700 px-4 py-2 rounded-lg hover:bg-green-200 transition-colors"
                        >
                          <Star className="w-4 h-4" />
                          <span className="font-medium">Get Referral</span>
                        </button>
                      )}
                      <button
                        onClick={() => handleApply(job.id)}
                        className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
                      >
                        <Send className="w-4 h-4" />
                        <span>Apply Now</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-8">
              <button className="bg-white border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                Load More Jobs
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;