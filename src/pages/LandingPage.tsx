import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Heart, MessageCircle, Share2, Users, Calendar, Briefcase, Award } from 'lucide-react';
import PostCard from '../components/PostCard';
import HighlightCard from '../components/HighlightCard';

const LandingPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const highlights = [
    {
      title: "Alumni Success Story",
      content: "Rajesh Kumar (2018 Batch) landed a $150K role at Google after our mentorship program",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400",
      type: "success"
    },
    {
      title: "Upcoming Tech Meetup",
      content: "Join 500+ alumni for our Annual Tech Summit 2024 in Bangalore",
      image: "https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=400",
      type: "event"
    },
    {
      title: "Job Opportunity",
      content: "200+ job openings posted this month by our alumni network",
      image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400",
      type: "job"
    }
  ];

  const posts = [
    {
      id: 1,
      author: "Priya Sharma",
      role: "Software Engineer at Microsoft",
      batch: "2019",
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400",
      content: "Excited to announce that I'm mentoring 5 junior students this semester! Always happy to give back to our amazing college community. 🚀 #MentorshipMatters",
      image: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=400",
      likes: 45,
      comments: 12,
      time: "2 hours ago"
    },
    {
      id: 2,
      author: "Amit Patel",
      role: "Product Manager at Flipkart",
      batch: "2017",
      avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
      content: "Just wrapped up an amazing product launch! Our team is hiring 3 new Product Analysts. DM me if you're interested - college alumni get priority! 💼",
      likes: 67,
      comments: 23,
      time: "5 hours ago"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % highlights.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [highlights.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % highlights.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + highlights.length) % highlights.length);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-teal-500 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fadeInUp">
              DCalum
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-fadeInUp animation-delay-300">
              Building Bridges Between Alumni & Students
            </p>
            <p className="text-lg mb-10 max-w-2xl mx-auto opacity-90 animate-fadeInUp animation-delay-500">
              Connect with 50,000+ alumni across 500+ colleges. Find mentors, discover opportunities, and build lasting professional relationships.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeInUp animation-delay-700">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                Join as Student
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105">
                Connect as Alumni
              </button>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="relative bg-white/10 backdrop-blur-sm border-t border-white/20">
          <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="animate-fadeInUp animation-delay-1000">
                <div className="flex justify-center mb-2">
                  <Users className="w-8 h-8" />
                </div>
                <div className="text-3xl font-bold">50K+</div>
                <div className="text-sm opacity-80">Active Alumni</div>
              </div>
              <div className="animate-fadeInUp animation-delay-1200">
                <div className="flex justify-center mb-2">
                  <Calendar className="w-8 h-8" />
                </div>
                <div className="text-3xl font-bold">2.5K+</div>
                <div className="text-sm opacity-80">Events Hosted</div>
              </div>
              <div className="animate-fadeInUp animation-delay-1400">
                <div className="flex justify-center mb-2">
                  <Briefcase className="w-8 h-8" />
                </div>
                <div className="text-3xl font-bold">12K+</div>
                <div className="text-sm opacity-80">Job Referrals</div>
              </div>
              <div className="animate-fadeInUp animation-delay-1600">
                <div className="flex justify-center mb-2">
                  <Award className="w-8 h-8" />
                </div>
                <div className="text-3xl font-bold">500+</div>
                <div className="text-sm opacity-80">Colleges</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Carousel */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Community Highlights</h2>
          <div className="relative">
            <div className="overflow-hidden rounded-2xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {highlights.map((highlight, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <HighlightCard highlight={highlight} />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-200"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-200"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {highlights.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    currentSlide === index ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Post Feed */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Community Feed</h2>
          <div className="space-y-6">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
          <div className="text-center mt-8">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105">
              Load More Posts
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;