import mongoose from 'mongoose';

const menuItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  taste: {
    type: String,
    enum: ['sweet', 'spicy', 'sour'], // Restricts input to these 3 options
    required: true,
  },
  is_drink: {
    type: Boolean,
    default: false,
  },
  ingredients: {
    type: [String], // Array of strings (e.g., ["flour", "sugar"])
    default: [],
  },
  num_sales: {
    type: Number,
    default: 0,
  }
});

// Create the model
const MenuItem = mongoose.model('MenuItem', menuItemSchema);

// Export it so you can use it in your index.js
export default MenuItem;