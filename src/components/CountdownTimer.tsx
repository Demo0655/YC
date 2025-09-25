import React, { useState, useEffect } from 'react';

const CountdownTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set target date (7 days from now for demo)
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 7);
    targetDate.setHours(23, 59, 59, 999);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-black bg-opacity-30 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto mb-8">
      <h3 className="text-2xl font-bold text-center mb-6 text-orange-400">
        ⚡ Offer Expires In ⚡
      </h3>
      <div className="grid grid-cols-4 gap-4 text-center">
        <div className="bg-white bg-opacity-10 rounded-xl p-4">
          <div className="text-3xl md:text-4xl font-bold text-orange-400">{timeLeft.days}</div>
          <div className="text-sm text-gray-300 mt-1">Days</div>
        </div>
        <div className="bg-white bg-opacity-10 rounded-xl p-4">
          <div className="text-3xl md:text-4xl font-bold text-orange-400">{timeLeft.hours}</div>
          <div className="text-sm text-gray-300 mt-1">Hours</div>
        </div>
        <div className="bg-white bg-opacity-10 rounded-xl p-4">
          <div className="text-3xl md:text-4xl font-bold text-orange-400">{timeLeft.minutes}</div>
          <div className="text-sm text-gray-300 mt-1">Minutes</div>
        </div>
        <div className="bg-white bg-opacity-10 rounded-xl p-4">
          <div className="text-3xl md:text-4xl font-bold text-orange-400">{timeLeft.seconds}</div>
          <div className="text-sm text-gray-300 mt-1">Seconds</div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;