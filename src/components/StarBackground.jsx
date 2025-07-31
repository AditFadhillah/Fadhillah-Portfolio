import { useEffect, useState } from "react";

// id, size, x, y, opacity, animationDuration

export const StarBackground = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    generateStars();
  }, []);

  const generateStars = () => {
    const numberOfStars = Math.floor(
      (window.innerWidth * window.innerHeight) / 10000
    );
    
    const newStars = []
    
    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 3 + 1, // Random size between 1 and 3
        x: Math.random() * 100, // Random position in viwwport
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.5, // Random opacity between 0.5 and 1
        animationDuration: Math.random() * 4 + 2 // Random duration between 5 and 10 seconds
      });
    }

    setStars(newStars);
  };
      
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((star) => (
        <div key={star.id} className="star animate-pulse-subtle" style={{
          width: star.size + "px",
          height: star.size + "px",
          left: star.x + "%",
          top: star.y + "%",
          opacity: star.opacity,
          animationDuration: star.animationDuration + "s",
        }}/>
      ))}
    </div>
  );
};