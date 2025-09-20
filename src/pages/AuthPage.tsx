import React, { useState } from 'react';
import { GraduationCap, Users, Shield, ArrowRight } from 'lucide-react';

const AuthPage = () => {
  const [selectedRole, setSelectedRole] = useState('');
  const [isLogin, setIsLogin] = useState(true);

  const roles = [
    {
      id: 'student',
      title: 'Campus Ambassador',
      description: 'Current student looking to connect with alumni and find opportunities',
      icon: GraduationCap,
      gradient: 'from-blue-500 to-cyan-500',
      features: ['Connect with Alumni', 'Find Mentors', 'Discover Jobs', 'Join Events']
    },
    {
      id: 'alumni',
      title: 'Alumni / Professional',
      description: 'Graduate ready to mentor students and share opportunities',
      icon: Users,
      gradient: 'from-purple-500 to-pink-500',
      features: ['Mentor Students', 'Post Jobs', 'Share Experience', 'Network']
    },
    {
      id: 'admin',
      title: 'College Admin',
      description: 'Educational institution managing alumni database',
      icon: Shield,
      gradient: 'from-green-500 to-teal-500',
      features: ['Manage Database', 'Organize Events', 'Track Alumni', 'Generate Reports']
    }
  ];

  const handleRoleSelect = (roleId: string) => {
    setSelectedRole(roleId);
  };

  const handleNext = () => {
    if (selectedRole) {
      // Handle authentication logic here
      console.log('Selected role:', selectedRole);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-2xl">D</span>
            </div>
            <span className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              DCalum
            </span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {isLogin ? 'Welcome Back!' : 'Join Our Community'}
          </h1>
          <p className="text-lg text-gray-600">
            Choose your role to get started with the right experience
          </p>
        </div>

        {/* Role Selection */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {roles.map((role) => {
            const Icon = role.icon;
            return (
              <div
                key={role.id}
                onClick={() => handleRoleSelect(role.id)}
                className={`relative p-8 bg-white rounded-2xl shadow-lg cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-xl ${
                  selectedRole === role.id
                    ? 'ring-4 ring-blue-500 ring-opacity-50'
                    : 'border border-gray-200'
                }`}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${role.gradient} rounded-2xl flex items-center justify-center mb-6 mx-auto`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-center mb-3 text-gray-900">
                  {role.title}
                </h3>
                
                <p className="text-gray-600 text-center mb-6">
                  {role.description}
                </p>
                
                <ul className="space-y-2">
                  {role.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {selectedRole === role.id && (
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Authentication Form */}
        {selectedRole && (
          <div className="max-w-md mx-auto bg-white rounded-2xl shadow-lg p-8 animate-fadeInUp">
            <div className="flex justify-center mb-6">
              <button
                onClick={() => setIsLogin(true)}
                className={`px-4 py-2 rounded-l-lg font-medium transition-colors ${
                  isLogin
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                Login
              </button>
              <button
                onClick={() => setIsLogin(false)}
                className={`px-4 py-2 rounded-r-lg font-medium transition-colors ${
                  !isLogin
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                Sign Up
              </button>
            </div>

            <form className="space-y-4">
              {!isLogin && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your full name"
                    />
                  </div>
                  {selectedRole !== 'admin' && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        College Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter your college name"
                      />
                    </div>
                  )}
                </>
              )}
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your email"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your password"
                />
              </div>

              {!isLogin && selectedRole === 'alumni' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Current Company
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your current company"
                  />
                </div>
              )}

              <button
                type="submit"
                onClick={handleNext}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <span>{isLogin ? 'Login' : 'Create Account'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>

            <p className="text-center text-sm text-gray-600 mt-4">
              {isLogin ? "Don't have an account? " : "Already have an account? "}
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="text-blue-600 hover:underline font-medium"
              >
                {isLogin ? 'Sign up' : 'Login'}
              </button>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthPage;