import React, { useState } from 'react';
import { Star, MessageCircle, Calendar, Award, Users, Filter, Search, Zap } from 'lucide-react';

const Mentorship = () => {
  const [activeTab, setActiveTab] = useState('find-mentors');

  const mentors = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      title: 'Senior Software Architect',
      company: 'Google',
      batch: '2015',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.9,
      mentees: 12,
      sessions: 89,
      skills: ['System Design', 'Leadership', 'Career Growth', 'Tech Strategy'],
      bio: 'Passionate about helping junior developers grow into tech leaders. 8+ years at Google working on distributed systems.',
      price: 'Free',
      availability: 'Weekends',
      credits: 450,
      achievements: ['Top Mentor 2023', '100+ Sessions', 'Excellence Award']
    },
    {
      id: 2,
      name: 'Priya Sharma',
      title: 'Product Manager',
      company: 'Microsoft',
      batch: '2017',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.8,
      mentees: 8,
      sessions: 56,
      skills: ['Product Strategy', 'Data Analysis', 'Team Management', 'Go-to-Market'],
      bio: 'Product leader with experience in B2B and B2C products. Love mentoring aspiring PMs and career switchers.',
      price: 'Free',
      availability: 'Evenings',
      credits: 280,
      achievements: ['Rising Star 2023', '50+ Sessions']
    },
    {
      id: 3,
      name: 'Amit Patel',
      title: 'VP Engineering',
      company: 'Flipkart',
      batch: '2013',
      avatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5.0,
      mentees: 15,
      sessions: 134,
      skills: ['Engineering Leadership', 'Scaling Teams', 'Startup Growth', 'Investment'],
      bio: 'Engineering leader who scaled Flipkart from startup to unicorn. Angel investor and startup advisor.',
      price: 'Free',
      availability: 'Flexible',
      credits: 670,
      achievements: ['Master Mentor', '100+ Sessions', 'Leadership Excellence']
    }
  ];

  const creditRewards = [
    { platform: 'Amazon', points: 100, reward: '₹500 Gift Card', icon: '🛒' },
    { platform: 'Zomato', points: 80, reward: '₹400 Food Credit', icon: '🍔' },
    { platform: 'Uber', points: 60, reward: '₹300 Ride Credit', icon: '🚗' },
    { platform: 'Netflix', points: 150, reward: '3 Month Subscription', icon: '🎬' },
    { platform: 'Spotify', points: 90, reward: '6 Month Premium', icon: '🎵' },
  ];

  const handleConnect = (mentorId: number) => {
    console.log(`Connecting to mentor ${mentorId}`);
  };

  const handleRedeemCredits = (platform: string, points: number) => {
    console.log(`Redeeming ${points} credits for ${platform}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">MentorMatch</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Connect with experienced alumni mentors to accelerate your career growth and earn rewards for meaningful contributions
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="flex space-x-1 bg-gray-200 p-1 rounded-xl">
            {['find-mentors', 'my-mentors', 'be-mentor', 'credit-store'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  activeTab === tab
                    ? 'bg-white text-blue-600 shadow-md'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                {tab === 'find-mentors' ? 'Find Mentors' :
                 tab === 'my-mentors' ? 'My Mentors' :
                 tab === 'be-mentor' ? 'Become a Mentor' : 'Credit Store'}
              </button>
            ))}
          </div>
        </div>

        {/* Find Mentors Tab */}
        {activeTab === 'find-mentors' && (
          <div>
            {/* Search and Filters */}
            <div className="flex items-center space-x-4 mb-8">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search mentors by skills, company, or expertise..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <button className="flex items-center space-x-2 bg-white border border-gray-300 px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors">
                <Filter className="w-4 h-4" />
                <span>Filters</span>
              </button>
            </div>

            {/* Mentors Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mentors.map((mentor) => (
                <div key={mentor.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                  {/* Header */}
                  <div className="relative p-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                    <div className="flex items-center space-x-4 mb-4">
                      <img
                        src={mentor.avatar}
                        alt={mentor.name}
                        className="w-16 h-16 rounded-full object-cover border-4 border-white/20"
                      />
                      <div>
                        <h3 className="text-xl font-bold">{mentor.name}</h3>
                        <p className="opacity-90">{mentor.title}</p>
                        <p className="text-sm opacity-75">{mentor.company} • Batch {mentor.batch}</p>
                      </div>
                    </div>
                    
                    {/* Stats */}
                    <div className="flex items-center space-x-6 text-sm">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 mr-1 fill-current" />
                        {mentor.rating}
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {mentor.mentees} mentees
                      </div>
                      <div className="flex items-center">
                        <MessageCircle className="w-4 h-4 mr-1" />
                        {mentor.sessions} sessions
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <p className="text-gray-700 mb-4 line-clamp-3">{mentor.bio}</p>
                    
                    {/* Skills */}
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Expertise</h4>
                      <div className="flex flex-wrap gap-2">
                        {mentor.skills.map((skill, index) => (
                          <span key={index} className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Achievements</h4>
                      <div className="flex flex-wrap gap-1">
                        {mentor.achievements.map((achievement, index) => (
                          <span key={index} className="flex items-center px-2 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs">
                            <Award className="w-3 h-3 mr-1" />
                            {achievement}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Details */}
                    <div className="grid grid-cols-2 gap-4 mb-6 text-sm text-gray-600">
                      <div>
                        <span className="font-medium">Availability:</span>
                        <p>{mentor.availability}</p>
                      </div>
                      <div>
                        <span className="font-medium">Credits Earned:</span>
                        <p className="flex items-center">
                          <Zap className="w-4 h-4 text-yellow-500 mr-1" />
                          {mentor.credits}
                        </p>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-3">
                      <button
                        onClick={() => handleConnect(mentor.id)}
                        className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
                      >
                        Connect
                      </button>
                      <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-3 rounded-lg transition-colors">
                        <MessageCircle className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Credit Store Tab */}
        {activeTab === 'credit-store' && (
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 py-3 rounded-full text-lg font-bold mb-4">
                <Zap className="w-6 h-6" />
                <span>You have 450 credits</span>
              </div>
              <p className="text-gray-600">
                Earn credits by mentoring students and redeem them for amazing rewards from our partner platforms!
              </p>
            </div>

            {/* How to Earn Credits */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Earn Credits</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Mentoring Sessions</h3>
                  <p className="text-gray-600 text-sm">Earn 10 credits per completed mentoring session</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">High Ratings</h3>
                  <p className="text-gray-600 text-sm">Bonus 5 credits for each 5-star rating received</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Achievements</h3>
                  <p className="text-gray-600 text-sm">Earn bonus credits for milestones and achievements</p>
                </div>
              </div>
            </div>

            {/* Rewards Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {creditRewards.map((reward, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6">
                  <div className="text-center">
                    <div className="text-4xl mb-4">{reward.icon}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{reward.platform}</h3>
                    <p className="text-gray-600 mb-4">{reward.reward}</p>
                    <div className="flex items-center justify-center space-x-2 mb-6">
                      <Zap className="w-5 h-5 text-yellow-500" />
                      <span className="font-bold text-lg">{reward.points} credits</span>
                    </div>
                    <button
                      onClick={() => handleRedeemCredits(reward.platform, reward.points)}
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
                    >
                      Redeem Now
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Partnership Info */}
            <div className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-lg p-8 text-white text-center">
              <h2 className="text-2xl font-bold mb-4">Partner with Us</h2>
              <p className="text-lg opacity-90 mb-6">
                Are you a brand interested in partnering with DCalum? Join our reward ecosystem and reach thousands of engaged alumni.
              </p>
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Become a Partner
              </button>
            </div>
          </div>
        )}

        {/* Become a Mentor Tab */}
        {activeTab === 'be-mentor' && (
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Become a Mentor</h2>
              <p className="text-xl text-gray-600">
                Share your expertise, guide the next generation, and earn rewards for making a difference
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Current Position</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="e.g., Senior Software Engineer"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="e.g., Google"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Areas of Expertise</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g., Software Development, Career Growth, Leadership"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Bio</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Tell us about your experience and how you'd like to help students..."
                  ></textarea>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Availability</label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option>Weekends only</option>
                      <option>Evenings (Mon-Fri)</option>
                      <option>Flexible schedule</option>
                      <option>By appointment</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Max Mentees</label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option>1-3 mentees</option>
                      <option>4-6 mentees</option>
                      <option>7-10 mentees</option>
                      <option>10+ mentees</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-lg font-bold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
                >
                  Apply to Become a Mentor
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Mentorship;