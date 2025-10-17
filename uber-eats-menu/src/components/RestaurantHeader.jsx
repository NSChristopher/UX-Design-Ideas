import { useState } from 'react';
import * as Toolbar from '@radix-ui/react-toolbar';
import { 
  ChevronLeftIcon, 
  HeartIcon, 
  MagnifyingGlassIcon,
  StarFilledIcon 
} from '@radix-ui/react-icons';
import './RestaurantHeader.css';

const RestaurantHeader = ({ restaurantInfo }) => {
  const [deliveryMode, setDeliveryMode] = useState('delivery');
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="restaurant-header">
      {/* Top Toolbar */}
      <Toolbar.Root className="toolbar" aria-label="Restaurant controls">
        <Toolbar.Button className="toolbar-button" aria-label="Go back">
          <ChevronLeftIcon />
        </Toolbar.Button>
        
        <div className="toolbar-spacer" />
        
        <Toolbar.Button 
          className={`toolbar-button ${isFavorite ? 'favorite-active' : ''}`}
          aria-label="Favorite restaurant"
          onClick={() => setIsFavorite(!isFavorite)}
        >
          <HeartIcon />
        </Toolbar.Button>
        
        <Toolbar.Button className="toolbar-button" aria-label="Search menu">
          <MagnifyingGlassIcon />
        </Toolbar.Button>
      </Toolbar.Root>

      {/* Restaurant Cover Image */}
      {restaurantInfo.coverImage && (
        <div className="cover-image">
          <img 
            src={restaurantInfo.coverImage} 
            alt={`${restaurantInfo.name} cover`}
          />
        </div>
      )}

      {/* Restaurant Info */}
      <div className="restaurant-info">
        <h1 className="restaurant-name">{restaurantInfo.name}</h1>
        <p className="restaurant-tagline">{restaurantInfo.tagline}</p>
        
        <div className="info-bar">
          <span className="rating">
            <StarFilledIcon className="star-icon" />
            {restaurantInfo.rating} ({restaurantInfo.reviewCount})
          </span>
          <span className="separator">•</span>
          <span className="cuisine">{restaurantInfo.cuisine}</span>
          <span className="separator">•</span>
          <span className="price-range">{restaurantInfo.priceRange}</span>
        </div>
      </div>

      {/* Delivery/Pickup Toggle */}
      <div className="delivery-toggle">
        <button 
          className={`toggle-button ${deliveryMode === 'delivery' ? 'active' : ''}`}
          onClick={() => setDeliveryMode('delivery')}
        >
          Delivery
        </button>
        <button 
          className={`toggle-button ${deliveryMode === 'pickup' ? 'active' : ''}`}
          onClick={() => setDeliveryMode('pickup')}
        >
          Pickup
        </button>
      </div>
    </div>
  );
};

export default RestaurantHeader;
