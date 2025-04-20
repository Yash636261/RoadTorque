import mongoose from "mongoose";

const SubscriberSchema = new mongoose.Schema({
  username: {
    type: String,
    required: false,
    unique: false,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Subscriber =
  mongoose.models.Subscriber || mongoose.model("Subscriber", SubscriberSchema);

export default Subscriber;
