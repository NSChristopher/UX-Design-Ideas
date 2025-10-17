export const restaurantInfo = {
  name: "Bella Italia Trattoria",
  cuisine: "Italian",
  rating: 4.5,
  reviewCount: "200+",
  priceRange: "$$",
  tagline: "Authentic Italian cuisine",
  coverImage: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop"
};

export const menuCategories = [
  { id: "popular", name: "Most Popular" },
  { id: "appetizers", name: "Appetizers" },
  { id: "pasta", name: "Pasta & Risotto" },
  { id: "mains", name: "Main Courses" },
  { id: "desserts", name: "Desserts" },
  { id: "beverages", name: "Beverages" }
];

export const menuItems = [
  // Most Popular
  {
    id: 1,
    category: "popular",
    name: "Spaghetti Carbonara",
    description: "Traditional Italian pasta with eggs, pecorino cheese, pancetta, and black pepper",
    price: 18.99,
    image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=400&auto=format&fit=crop",
    badges: ["popular", "mostLiked"],
    mostLikedPercent: 95
  },
  {
    id: 2,
    category: "popular",
    name: "Margherita Pizza",
    description: "Classic Neapolitan pizza with San Marzano tomatoes, fresh mozzarella, and basil",
    price: 16.99,
    image: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=400&auto=format&fit=crop",
    badges: ["vegetarian", "popular"]
  },
  {
    id: 3,
    category: "popular",
    name: "Osso Buco",
    description: "Braised veal shanks in white wine with vegetables, served with saffron risotto",
    price: 32.99,
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&auto=format&fit=crop",
    badges: ["chefsFavorite"]
  },
  
  // Appetizers
  {
    id: 4,
    category: "appetizers",
    name: "Bruschetta al Pomodoro",
    description: "Toasted bread topped with fresh tomatoes, garlic, basil, and extra virgin olive oil",
    price: 9.99,
    image: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=400&auto=format&fit=crop",
    badges: ["vegetarian", "vegan"]
  },
  {
    id: 5,
    category: "appetizers",
    name: "Calamari Fritti",
    description: "Crispy fried squid rings served with marinara sauce and lemon",
    price: 13.99,
    image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&auto=format&fit=crop",
    badges: []
  },
  {
    id: 6,
    category: "appetizers",
    name: "Caprese Salad",
    description: "Fresh mozzarella, tomatoes, and basil drizzled with balsamic glaze",
    price: 11.99,
    image: "https://images.unsplash.com/photo-1608897013039-887f21d8c804?w=400&auto=format&fit=crop",
    badges: ["vegetarian"]
  },
  {
    id: 7,
    category: "appetizers",
    name: "Arancini",
    description: "Sicilian rice balls stuffed with ragù, mozzarella, and peas, deep-fried to perfection",
    price: 10.99,
    badges: []
  },
  
  // Pasta & Risotto
  {
    id: 8,
    category: "pasta",
    name: "Fettuccine Alfredo",
    description: "Ribbon pasta in a rich cream sauce with parmesan and butter",
    price: 17.99,
    image: "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?w=400&auto=format&fit=crop",
    badges: ["vegetarian"]
  },
  {
    id: 9,
    category: "pasta",
    name: "Penne Arrabbiata",
    description: "Penne pasta in a spicy tomato sauce with garlic and red chili peppers",
    price: 15.99,
    badges: ["spicy", "vegan"]
  },
  {
    id: 10,
    category: "pasta",
    name: "Lasagna Bolognese",
    description: "Layers of pasta with meat sauce, béchamel, and parmesan cheese",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=400&auto=format&fit=crop",
    badges: []
  },
  {
    id: 11,
    category: "pasta",
    name: "Risotto ai Funghi",
    description: "Creamy arborio rice with mixed mushrooms, white wine, and parmesan",
    price: 18.99,
    badges: ["vegetarian", "chefsFavorite"]
  },
  {
    id: 12,
    category: "pasta",
    name: "Ravioli di Ricotta e Spinaci",
    description: "Handmade pasta filled with ricotta and spinach in butter sage sauce",
    price: 17.99,
    badges: ["vegetarian"]
  },
  
  // Main Courses
  {
    id: 13,
    category: "mains",
    name: "Saltimbocca alla Romana",
    description: "Veal cutlets with prosciutto and sage in white wine sauce",
    price: 28.99,
    image: "https://images.unsplash.com/photo-1432139555190-58524dae6a55?w=400&auto=format&fit=crop",
    badges: []
  },
  {
    id: 14,
    category: "mains",
    name: "Pollo alla Parmigiana",
    description: "Breaded chicken breast topped with marinara and melted mozzarella",
    price: 24.99,
    badges: []
  },
  {
    id: 15,
    category: "mains",
    name: "Branzino al Forno",
    description: "Whole Mediterranean sea bass baked with herbs, olive oil, and lemon",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400&auto=format&fit=crop",
    badges: ["chefsFavorite"]
  },
  {
    id: 16,
    category: "mains",
    name: "Bistecca alla Fiorentina",
    description: "Grilled T-bone steak seasoned with olive oil, salt, and pepper",
    price: 42.99,
    badges: []
  },
  
  // Desserts
  {
    id: 17,
    category: "desserts",
    name: "Tiramisu",
    description: "Classic Italian dessert with espresso-soaked ladyfingers and mascarpone cream",
    price: 8.99,
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&auto=format&fit=crop",
    badges: ["popular", "mostLiked"],
    mostLikedPercent: 98
  },
  {
    id: 18,
    category: "desserts",
    name: "Panna Cotta",
    description: "Silky vanilla cream pudding with berry compote",
    price: 7.99,
    badges: ["vegetarian"]
  },
  {
    id: 19,
    category: "desserts",
    name: "Cannoli Siciliani",
    description: "Crispy pastry shells filled with sweet ricotta and chocolate chips",
    price: 7.99,
    image: "https://images.unsplash.com/photo-1519915212116-7cfef71f1d3e?w=400&auto=format&fit=crop",
    badges: []
  },
  {
    id: 20,
    category: "desserts",
    name: "Gelato",
    description: "Italian ice cream - choose from vanilla, chocolate, strawberry, or pistachio",
    price: 6.99,
    badges: ["vegetarian"]
  },
  
  // Beverages
  {
    id: 21,
    category: "beverages",
    name: "Espresso",
    description: "Rich Italian espresso",
    price: 3.50,
    badges: []
  },
  {
    id: 22,
    category: "beverages",
    name: "Cappuccino",
    description: "Espresso with steamed milk and foam",
    price: 4.99,
    badges: []
  },
  {
    id: 23,
    category: "beverages",
    name: "San Pellegrino",
    description: "Italian sparkling mineral water",
    price: 4.99,
    badges: []
  },
  {
    id: 24,
    category: "beverages",
    name: "House Wine",
    description: "Red or white wine by the glass",
    price: 8.99,
    badges: []
  },
  {
    id: 25,
    category: "beverages",
    name: "Limoncello",
    description: "Traditional Italian lemon liqueur",
    price: 7.99,
    badges: []
  }
];
