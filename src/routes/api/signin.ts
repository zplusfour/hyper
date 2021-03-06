import type { RequestHandler } from '@sveltejs/kit';
import { User } from '../../db/mongo';
import * as c from '../../db/enc';
import { serialize } from 'cookie';
// import * as assert from 'assert';

export const post: RequestHandler = async ({ request }) => {
	const data: any = await request.formData();
	const form = [...data.entries()];
	var username = c.encrypt(form[0][1]);
	var password = form[1][1];

	const user = await User.findOne({ username });
  console.log(user);
  // console.log(username === c.decrypt(user.username));
	if (!user) {
		return {
			status: 401,
			body: {
				error: 'Invalid username or password'
			}
		};
	} else {
		if (c.decrypt(user.password) === password) {
			const token = c.encrypt(user.username);
			return {
				status: 200,
				headers: {
					'Set-Cookie': serialize('token', token, {
						httpOnly: true,
						maxAge: 60 * 60 * 24 * 7,
						path: '/'
					})
				},
				body: {
					token
				}
			};
		}
	}
};
