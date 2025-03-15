import mongoose from "mongoose";

const subscriptionSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      minlength: 3,
      maxlength: 50,
    },

    price: {
      type: Number,
      required: [true, "Price is required"],
      min: [0, "Price must be greater than 0"],
    },

    currency: {
      type: String,
      enum: ["INR", "USD", "EUR"],
      default: "INR",
    },

    frequency: {
      type: String,
      enum: ["weekly", "monthly", "yearly"],
    },

    category: {
      type: String,
      enum: [
        "food",
        "clothing",
        "electronics",
        "household",
        "health",
        "transport",
        "education",
        "other",
      ],
      default: "other",
      required: true,
    },

    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "active",
    },

    startdate: {
      type: Date,
      required: true,
      valitidate: {
        validator: (value) => value <= new Date(),
        message: "Start date must be less than current date",
      },
    },

    renewalDate: {
      type: Date,
      validate: {
        validator: function (value) {
          return value > this.startdate;
        },
      },
    },

    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true,
        index:true
    }
  },
  { timestamps: true }
);


subscriptionSchema.pre('save', function (next) {
if(!this.renewalDate){
    const renewalPeriods={
        weekly:7,
        monthly:30,
        yearly:365
    }

    this.renewalDate=new Date(this.startdate);
    this.renewalDate.setDate(this.renewalDate.getDate()+renewalPeriods[this.frequency]);
    }

    if(this.renewalDate<new Date()){
        this.status="expired";
}

next();
});


const Subscription = mongoose.model("Subscription", subscriptionSchema);


export default Subscription; 