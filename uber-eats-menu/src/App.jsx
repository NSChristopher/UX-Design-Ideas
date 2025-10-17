import { useState, useEffect } from 'react';
import RestaurantHeader from './components/RestaurantHeader';
import CategoryNav from './components/CategoryNav';
import MenuSection from './components/MenuSection';
import { restaurantInfo, menuCategories, menuItems } from './data/menuData';
import './App.css';

function App() {
  const [activeCategory, setActiveCategory] = useState(menuCategories[0].id);

  // Group items by category
  const itemsByCategory = menuCategories.map(category => ({
    category,
    items: menuItems.filter(item => item.category === category.id)
  }));

  // Set up intersection observer for scroll spy
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const categoryId = entry.target.id.replace('category-', '');
          setActiveCategory(categoryId);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all category sections
    menuCategories.forEach(category => {
      const element = document.getElementById(`category-${category.id}`);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="app">
      <RestaurantHeader restaurantInfo={restaurantInfo} />
      <CategoryNav 
        categories={menuCategories}
        activeCategory={activeCategory}
        onCategoryClick={setActiveCategory}
      />
      <main className="menu-content">
        {itemsByCategory.map(({ category, items }) => (
          <MenuSection 
            key={category.id}
            category={category}
            items={items}
          />
        ))}
      </main>
    </div>
  );
}

export default App;
