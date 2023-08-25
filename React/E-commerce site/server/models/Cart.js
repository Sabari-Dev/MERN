import mongoose from "mongoose";

const cartSchema = new mongoose.Schema(
  {
    from: String,
    title: String,
    image: String,
    price: Number,
    rating: { rate: Number, count: Number },
  },
  { timestamps: true }
);

const Cart = mongoose.model("Cart", cartSchema);

export default Cart;
