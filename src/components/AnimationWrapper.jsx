import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AnimationWrapper = ({ children, animation = "fade-up", delay = 0 }) => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100
    });
  }, []);

  return (
    <div data-aos={animation} data-aos-delay={delay}>
      {children}
    </div>
  );
};

export default AnimationWrapper;