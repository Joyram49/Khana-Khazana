import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "First Name is required"],
    // validate: {
    //   validator: (value) => {
    //     try {
    //       UserZodSchema.parse({ firstName: value });
    //       return true;
    //     } catch (error) {
    //       return false;
    //     }
    //   },
    //   message: (props) => `${props.value} is not a valid first name`,
    // },
  },
  lastName: {
    type: String,
    required: [true, "Last Name is required"],
    // validate: {
    //   validator: (value) => {
    //     try {
    //       UserZodSchema.parse({ lastName: value });
    //       return true;
    //     } catch (error) {
    //       return false;
    //     }
    //   },
    //   message: (props) => `${props.value} is not a valid last name`,
    // },
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    // validate: {
    //   validator: (value) => {
    //     try {
    //       UserZodSchema.parse({ email: value });
    //       return true;
    //     } catch (error) {
    //       return false;
    //     }
    //   },
    //   message: (props) => `${props.value} is not a valid email address`,
    // },
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    // validate: {
    //   validator: (value) => {
    //     try {
    //       UserZodSchema.parse({ password: value });
    //       return true;
    //     } catch (error) {
    //       return false;
    //     }
    //   },
    //   message: (props) => `${props.value} is not a valid password`,
    // },
  },
  favourites: {
    type: Array,
  },
});

const userModel = mongoose.models.Users || mongoose.model("Users", UserSchema);
export default userModel;
