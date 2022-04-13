import type { RequestHandler } from '@sveltejs/kit';
import { parse, serialize } from 'cookie';

export const get: RequestHandler = ({ request }) => {
	const cookies = parse(request.headers['cookie'] || '');

	if (cookies.token) {
		console.log('gottem');
	}

	return {
		status: 302,
		headers: {
      Location: '/',
			'Set-Cookie': serialize('token', '', {
				path: '/',
				expires: new Date(0)
			})
		}
	};
};
