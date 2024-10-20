import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import welcomeAnimation from '../animations/welcomeAnimation.json';

const WelcomeScreen: React.FC = () => {
  const navigate = useNavigate();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log('Auto-play was prevented:', error);
        // You can add a play button or other UI element here if needed
      });
    }
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover"
        loop
        muted
        playsInline
      >
        <source src="/videos/food-background.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
        <Lottie
          animationData={welcomeAnimation}
          className="w-64 h-64 mb-8"
        />
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-6xl font-bold text-white mb-8"
        >
          Welcome to Our Kiosk
        </motion.h1>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/categories')}
          className="bg-yellow-400 text-black text-2xl font-bold py-4 px-8 rounded-full shadow-lg hover:bg-yellow-300 transition duration-300"
        >
          Order Now
        </motion.button>
      </div>
    </div>
  );
};

export default WelcomeScreen;