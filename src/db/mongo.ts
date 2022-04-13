import { config } from 'dotenv';
import mongoose from 'mongoose';
config();

const userSchema = new mongoose.Schema({
	username: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	}
});

mongoose.connect(process.env['URI']);

const User = mongoose.models.User || mongoose.model('User', userSchema);

export { User };
