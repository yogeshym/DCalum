import React, { useState } from 'react';
import { Search as SearchIcon, Filter, MapPin, Briefcase, GraduationCap, Calendar, Users, MessageCircle } from 'lucide-react';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    college: '',
    branch: '',
    batch: '',
    skills: '',
    location: '',
    company: ''
  });

  const searchResults = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      title: 'Senior Software Engineer',
      company: 'Google',
      college: 'IIT Delhi',
      batch: '2018',
      location: 'Bangalore, India',
      skills: ['React', 'Node.js', 'Python', 'AWS'],
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      connections: 234,
      isOnline: true,
      matchScore: 95
    },
    {
      id: 2,
      name: 'Priya Sharma',
      title: 'Product Manager',
      company: 'Microsoft',
      college: 'IIT Delhi',
      batch: '2017',
      location: 'Hyderabad, India',
      skills: ['Product Strategy', 'Data Analysis', 'Leadership'],
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
      connections: 189,
      isOnline: false,
      matchScore: 87
    },
    {
      id: 3,
      name: 'Amit Patel',
      title: 'Startup Founder',
      company: 'TechStart Inc.',
      college: 'IIT Mumbai',
      batch: '2016',
      location: 'Mumbai, India',
      skills: ['Entrepreneurship', 'Product Development', 'Team Building'],
      avatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
      connections: 312,
      isOnline: true,
      matchScore: 82
    },
    {
      id: 4,
      name: 'Sneha Singh',
      title: 'Data Scientist',
      company: 'Amazon',
      college: 'IIT Delhi',
      batch: '2019',
      location: 'Seattle, USA',
      skills: ['Machine Learning', 'Python', 'Statistics', 'Deep Learning'],
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
      connections: 156,
      isOnline: true,
      matchScore: 79
    }
  ];

  const handleFilterChange = (key: string, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const handleConnect = (userId: number) => {
    console.log(`Connecting to user ${userId}`);
  };

  const handleMessage = (userId: number) => {
    console.log(`Messaging user ${userId}`);
  };

  const getMatchScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-600 bg-green-100';
    if (score >= 80) return 'text-blue-600 bg-blue-100';
    if (score >= 70) return 'text-yellow-600 bg-yellow-100';
    return 'text-gray-600 bg-gray-100';
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Search Alumni</h1>
          <p className="text-lg text-gray-600">
            Find and connect with alumni across colleges, companies, and industries
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="flex items-center space-x-4">
            <div className="flex-1 relative">
              <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by name, skills, company, or college..."
                className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
              />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`flex items-center space-x-2 px-6 py-4 border rounded-xl font-medium transition-all duration-200 ${
                showFilters 
                  ? 'bg-blue-600 text-white border-blue-600' 
                  : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
              }`}
            >
              <Filter className="w-5 h-5" />
              <span>Filters</span>
            </button>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Filters Sidebar */}
          {showFilters && (
            <div className="w-80">
              <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">Advanced Filters</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">College</label>
                    <select
                      value={filters.college}
                      onChange={(e) => handleFilterChange('college', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">All Colleges</option>
                      <option value="IIT Delhi">IIT Delhi</option>
                      <option value="IIT Mumbai">IIT Mumbai</option>
                      <option value="IIT Bangalore">IIT Bangalore</option>
                      <option value="NIT Warangal">NIT Warangal</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Branch/Department</label>
                    <select
                      value={filters.branch}
                      onChange={(e) => handleFilterChange('branch', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">All Branches</option>
                      <option value="Computer Science">Computer Science</option>
                      <option value="Electrical Engineering">Electrical Engineering</option>
                      <option value="Mechanical Engineering">Mechanical Engineering</option>
                      <option value="Civil Engineering">Civil Engineering</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Batch Year</label>
                    <select
                      value={filters.batch}
                      onChange={(e) => handleFilterChange('batch', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">All Batches</option>
                      <option value="2024">2024</option>
                      <option value="2023">2023</option>
                      <option value="2022">2022</option>
                      <option value="2021">2021</option>
                      <option value="2020">2020</option>
                      <option value="2019">2019</option>
                      <option value="2018">2018</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Skills</label>
                    <input
                      type="text"
                      value={filters.skills}
                      onChange={(e) => handleFilterChange('skills', e.target.value)}
                      placeholder="e.g., React, Python, Machine Learning"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                    <select
                      value={filters.location}
                      onChange={(e) => handleFilterChange('location', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">All Locations</option>
                      <option value="Bangalore">Bangalore</option>
                      <option value="Mumbai">Mumbai</option>
                      <option value="Delhi">Delhi</option>
                      <option value="Hyderabad">Hyderabad</option>
                      <option value="USA">USA</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                    <select
                      value={filters.company}
                      onChange={(e) => handleFilterChange('company', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">All Companies</option>
                      <option value="Google">Google</option>
                      <option value="Microsoft">Microsoft</option>
                      <option value="Amazon">Amazon</option>
                      <option value="Flipkart">Flipkart</option>
                      <option value="Startup">Startup</option>
                    </select>
                  </div>

                  <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200">
                    Apply Filters
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Search Results */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900">
                Found {searchResults.length} alumni
              </h2>
              <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Sort by: Relevance</option>
                <option>Sort by: Name</option>
                <option>Sort by: Batch Year</option>
                <option>Sort by: Connections</option>
              </select>
            </div>

            <div className="grid gap-6">
              {searchResults.map((person) => (
                <div key={person.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6">
                  <div className="flex items-start space-x-6">
                    {/* Avatar */}
                    <div className="relative">
                      <img
                        src={person.avatar}
                        alt={person.name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      {person.isOnline && (
                        <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 border-2 border-white rounded-full"></div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-1">{person.name}</h3>
                          <p className="text-gray-600 mb-2">{person.title} at {person.company}</p>
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <div className="flex items-center">
                              <GraduationCap className="w-4 h-4 mr-1" />
                              {person.college} • Batch {person.batch}
                            </div>
                            <div className="flex items-center">
                              <MapPin className="w-4 h-4 mr-1" />
                              {person.location}
                            </div>
                            <div className="flex items-center">
                              <Users className="w-4 h-4 mr-1" />
                              {person.connections} connections
                            </div>
                          </div>
                        </div>
                        <div className={`px-3 py-1 rounded-full text-sm font-medium ${getMatchScoreColor(person.matchScore)}`}>
                          {person.matchScore}% match
                        </div>
                      </div>

                      {/* Skills */}
                      <div className="mb-4">
                        <div className="flex flex-wrap gap-2">
                          {person.skills.map((skill, index) => (
                            <span key={index} className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex items-center space-x-3">
                        <button
                          onClick={() => handleConnect(person.id)}
                          className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
                        >
                          Connect
                        </button>
                        <button
                          onClick={() => handleMessage(person.id)}
                          className="flex items-center space-x-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors"
                        >
                          <MessageCircle className="w-4 h-4" />
                          <span>Message</span>
                        </button>
                        <button className="text-gray-500 hover:text-blue-600 font-medium">
                          View Profile
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-8">
              <button className="bg-white border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                Load More Results
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;