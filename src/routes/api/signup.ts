import type { RequestHandler } from '@sveltejs/kit';
import { User } from '../../db/mongo';
import * as c from '../../db/enc';
import { serialize } from 'cookie';

export const post: RequestHandler = async ({ request }) => {
	const data: any = await request.formData();
	const form = [...data.entries()];
	var username = form[0][1];
	var password = form[1][1];

	const user = await User.findOne({ username });
	if (user) {
		return {
			body: {
				error: 'Username already exists'
			}
		};
	} else {
		const newUser = new User({
			username: c.encrypt(username),
			password: c.encrypt(password)
		});
		await newUser.save();
	}

	return {
		status: 302,
		headers: {
			Location: '/',
			'Set-Cookie': serialize('username', username, {
				path: '/',
				httpOnly: true,
				sameSite: 'strict',
				secure: process.env.NODE_ENV === 'production',
				maxAge: 60 * 60 * 24 * 7 // one week
			})
		}
	};
};
