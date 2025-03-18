import React, { useRef } from 'react';
import strings from '../../strings/strings.json'
import styles from './Buddies.module.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { FaLinkedin } from 'react-icons/fa';

type Buddy = {
  name: string;
  description: string;
  image: string;
  role: string;
  linkedIn?: string;
};

const buddies: Buddy[] = [
  {
    name: 'Varsha Foujdhar',
    role: 'Automation Tester at Capgemini',
    description: 'My all time supporter that holds my hand when I am in need.',
    image: '/images/VarshaProfile.jpg',
    linkedIn: 'https://www.linkedin.com/in/varshaf',
  },
  {
    name: 'Suresh K',
    role: 'Sr. Java Developer at ThermoFisher Scientific',
    description: 'A true big brother that I can rely on.',
    image: '/images/SureshProfile.jpg',
  },
  {
    name: 'Bhargav Pathina',
    role: 'Azure devops engineer at TCS',
    description: 'The Tough looking gentle and humorous guy in the group',
    image: '/images/avatar.jpg',
  },
];

const Buddies: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const cardWidth = 240;

  const scroll = (direction: 'left' | 'right') => {
    const container = carouselRef.current;
    if (!container) return;

    const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  return (
    <section id="buddies" className={styles.buddiesSection}>
      <h2 className={styles.title}>{strings.Buddies.Title}</h2>
      <div className={styles.carouselWrapper}>
        <button className={styles.arrow} onClick={() => scroll('left')}>
          <ChevronLeft size={24} />
        </button>
        <div className={styles.carousel} ref={carouselRef}>
          {buddies.map((buddy, index) => (
            <div key={index} className={styles.card}>
              <img src={buddy.image} alt={buddy.name} className={styles.avatar} />
              <h3 className={styles.name}>{buddy.name}</h3>
              <p className={styles.role}>{buddy.role}</p>
              <p className={styles.description}>{buddy.description}</p>
              <div className={styles.links}>
                {buddy.linkedIn && (
                  <a href={buddy.linkedIn} target="_blank" rel="noreferrer">
                    <FaLinkedin />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
        <button className={styles.arrow} onClick={() => scroll('right')}>
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  );
};

export default Buddies;
