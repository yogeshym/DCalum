import React from 'react';
import { Award, Calendar, Briefcase } from 'lucide-react';

interface Highlight {
  title: string;
  content: string;
  image: string;
  type: 'success' | 'event' | 'job';
}

interface HighlightCardProps {
  highlight: Highlight;
}

const HighlightCard: React.FC<HighlightCardProps> = ({ highlight }) => {
  const getIcon = () => {
    switch (highlight.type) {
      case 'success':
        return <Award className="w-6 h-6" />;
      case 'event':
        return <Calendar className="w-6 h-6" />;
      case 'job':
        return <Briefcase className="w-6 h-6" />;
      default:
        return <Award className="w-6 h-6" />;
    }
  };

  const getGradient = () => {
    switch (highlight.type) {
      case 'success':
        return 'from-green-500 to-emerald-500';
      case 'event':
        return 'from-blue-500 to-cyan-500';
      case 'job':
        return 'from-purple-500 to-pink-500';
      default:
        return 'from-blue-500 to-purple-500';
    }
  };

  return (
    <div className="relative h-96 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${highlight.image})` }}
      ></div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
      
      {/* Content */}
      <div className="relative h-full flex flex-col justify-end p-8 text-white">
        <div className={`inline-flex items-center space-x-2 bg-gradient-to-r ${getGradient()} px-4 py-2 rounded-lg mb-4 w-fit`}>
          {getIcon()}
          <span className="font-semibold text-sm uppercase tracking-wide">
            {highlight.type === 'success' ? 'Success Story' : 
             highlight.type === 'event' ? 'Upcoming Event' : 'Job Opportunity'}
          </span>
        </div>
        
        <h3 className="text-2xl font-bold mb-3">{highlight.title}</h3>
        <p className="text-lg opacity-90 leading-relaxed">{highlight.content}</p>
        
        <button className="mt-6 bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 text-white px-6 py-2 rounded-lg font-medium transition-all duration-200 w-fit">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default HighlightCard;