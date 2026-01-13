const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Product name is required"],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "Product description is required"],
    },
    price: {
      type: Number,
      required: [true, "Product price is required"],
      min: 0,
    },
    images: [
      {
        url: {
          type: String,
          required: true,
        },
        alt: {
          type: String,
          default: "",
        },
      },
    ],
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: [true, "Product category is required"],
    },
    stock: {
      type: Number,
      required: true,
      min: 0,
      default: 0,
    },
    features: [
      {
        type: String,
      },
    ],
    customizable: {
      type: Boolean,
      default: false,
    },
    slug: {
      type: String,
      unique: true,
      lowercase: true,
    },
    inStock: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

// Create slug from name before saving
productSchema.pre("save", function (next) {
  if (this.isModified("name")) {
    this.slug = this.name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  }
  next();
});

// Virtual for getting the first image URL
productSchema.virtual("image").get(function () {
  return this.images && this.images.length > 0 ? this.images[0].url : null;
});

// Ensure virtual fields are serialized
productSchema.set("toJSON", { virtuals: true });
productSchema.set("toObject", { virtuals: true });

module.exports = mongoose.model("Product", productSchema);
