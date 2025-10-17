import { useState, useEffect, useRef } from 'react';
import './CategoryNav.css';

const CategoryNav = ({ categories, activeCategory, onCategoryClick }) => {
  const navRef = useRef(null);
  const [showLeftScroll, setShowLeftScroll] = useState(false);
  const [showRightScroll, setShowRightScroll] = useState(false);

  const checkScroll = () => {
    if (navRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = navRef.current;
      setShowLeftScroll(scrollLeft > 0);
      setShowRightScroll(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  const scrollToCategory = (categoryId) => {
    const element = document.getElementById(`category-${categoryId}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleCategoryClick = (categoryId) => {
    onCategoryClick(categoryId);
    scrollToCategory(categoryId);
  };

  return (
    <div className="category-nav-container">
      <div 
        className="category-nav" 
        ref={navRef}
        onScroll={checkScroll}
      >
        {categories.map((category) => (
          <button
            key={category.id}
            className={`category-button ${activeCategory === category.id ? 'active' : ''}`}
            onClick={() => handleCategoryClick(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>
      {showLeftScroll && <div className="scroll-indicator left" />}
      {showRightScroll && <div className="scroll-indicator right" />}
    </div>
  );
};

export default CategoryNav;
