import { 
  ThickArrowUpIcon,
  CheckCircledIcon 
} from '@radix-ui/react-icons';
import './MenuItem.css';

const MenuItem = ({ item }) => {
  const getBadgeIcon = (badge) => {
    switch (badge) {
      case 'mostLiked':
        return <ThickArrowUpIcon className="badge-icon" />;
      case 'popular':
        return '⭐';
      case 'chefsFavorite':
        return '👨‍🍳';
      case 'vegetarian':
        return '🥬';
      case 'vegan':
        return '🌱';
      case 'spicy':
        return '🌶️';
      default:
        return null;
    }
  };

  const getBadgeLabel = (badge) => {
    switch (badge) {
      case 'mostLiked':
        return `${item.mostLikedPercent}% Most Liked`;
      case 'popular':
        return 'Popular';
      case 'chefsFavorite':
        return "Chef's Favorite";
      case 'vegetarian':
        return 'Vegetarian';
      case 'vegan':
        return 'Vegan';
      case 'spicy':
        return 'Spicy';
      default:
        return badge;
    }
  };

  return (
    <div className="menu-item">
      <div className="menu-item-content">
        <div className="menu-item-info">
          <h3 className="item-name">{item.name}</h3>
          {item.description && (
            <p className="item-description">{item.description}</p>
          )}
          {item.badges && item.badges.length > 0 && (
            <div className="item-badges">
              {item.badges.map((badge) => (
                <span key={badge} className={`badge badge-${badge}`}>
                  {getBadgeIcon(badge)}
                  <span className="badge-text">{getBadgeLabel(badge)}</span>
                </span>
              ))}
            </div>
          )}
          <p className="item-price">${item.price.toFixed(2)}</p>
        </div>
        {item.image && (
          <div className="menu-item-image">
            <img src={item.image} alt={item.name} />
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuItem;
