import { fail, redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import { auth } from '$lib/server/lucia';
import { setResponse } from '@sveltejs/kit/node';

export const load = (async ({ locals }) => {
	const { session } = await locals.auth.validateUser();

	if (session) {
		throw redirect(302, '/');
	}
}) satisfies PageServerLoad;

export const actions = {
	login: async ({ request, locals }) => {
		const data     = await request.formData();
		const email    = data.get('email') as string;
		const password = data.get('password') as string;

		if (typeof email !== 'string' || typeof password !== 'string') {
			console.log('fail')
			return fail(400, { invalid: true });
		}

		try {
			const user = await auth.createUser({
				primaryKey: {
					providerId: 'username',
					providerUserId: email,
					password
				},
				attributes: {
					email
				}
			});

			const session = await auth.createSession(user.id);
			locals.auth.setSession(session);
		} catch(err) {
			console.log(err)
			return fail(400, { invalid: true });
		}

		// try {
		// 	const key     = await auth.useKey('username', email, password);
		// 	const session = await auth.createSession(key.userId);
			
		// 	locals.auth.setSession(session);
		// } catch(err) {
		// 	console.log(err)

		// 	return fail(400, { credential: true });
		// }

		throw redirect(302, '/translate');
	}
} satisfies Actions;
