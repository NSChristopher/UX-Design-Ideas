import * as Separator from '@radix-ui/react-separator';
import MenuItem from './MenuItem';
import './MenuSection.css';

const MenuSection = ({ category, items }) => {
  return (
    <section className="menu-section" id={`category-${category.id}`}>
      <div className="section-header">
        <h2 className="section-title">{category.name}</h2>
      </div>
      <Separator.Root className="separator" />
      <div className="section-items">
        {items.map((item) => (
          <MenuItem key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default MenuSection;
