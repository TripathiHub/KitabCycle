const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    firebaseUid:{
        type : String,
        require : true,
        unique : true
    },
    email : {
          type : String,
        require : true,
        unique : true,
        lowercase : true,
        trim : true
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    age: {
      type: Number,
      min: 10,
      max: 100,
    },
    gender : {
        type : String,
        enum : ["Male","Female","Other","Prefer not to say"]

    },
    education: {
      institutionName: {
        type: String,
        trim: true,
      },

      institutionType: {
        type: String,
        enum: ["School", "College", "Other"],
      },

      department: {
        type: String,
        trim: true,
      },

      standardOrSemester: {
        type: String,
        trim: true,
      },

      passingYear: {
        type: Number,
      },
    },
    isProfileComplete: {
      type: Boolean,
      default: false,
    },
     role : {
        type : String,
        enum : ["admin", "user"],
        defualt : "user",
     }
},{
    timestamps : true
});
const User = mongoose.model("User",userSchema);
module.exports = User;