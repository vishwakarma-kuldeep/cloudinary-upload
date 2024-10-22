import mongoose, { Schema } from "mongoose";

const carSchema = new Schema(
  {
    title: { type: String, trim: true },
    owner: {
      _id: false,
      name: { type: String },
      phone: { type: String },
      email: { type: String },
    },
    yearOfProduction: { type: Number },
    color: { type: String },
    typeOfCar: { type: String },
    interior: { type: String },
    numberOfSeats: { type: Number },
    additionalAmenities: { type: String },
    rentalPrice: { type: Number },
    location: { type: String },
    rentalDuration: { type: String },
    specialOptionsForWedding: { type: String },
    description: { type: String },
    isVerified: { type: Boolean, default: false },
    photos: [{ url: { type: String, _id: false } }],
    videos: [{ url: { type: String, _id: false } }],
    // bookings: [{ type: Schema.Types.ObjectId, ref: "Booking" }],
  },
  { timestamps: true }
);

export const Car = mongoose.model("Car", carSchema);
