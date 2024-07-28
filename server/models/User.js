import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  viewedProperties: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Property' }],
  role: { type: String, default: 'user' },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);

export default User;
