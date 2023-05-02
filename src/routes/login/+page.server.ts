import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';
import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090');

export const actions = {
	login: async ({ request }) => {
		const data = await request.formData();
		const username = data.get('username') as string;
		const password = data.get('password') as string;

		try {
			await pb.collection('users').authWithPassword(username, password);
			console.log(pb.authStore.token);
		} catch (error) {
			/*
                Error is returned as follow:
                {
                    url: 'http://127.0.0.1:8090/api/collections/users/auth-with-password',
                    status: 400,
                    response: { code: 400, message: 'Failed to authenticate.', data: {} },
                    isAbort: false,
                    originalError: null
                }
            */
			return fail(400, { code: error.status, response: "Invalid Password" });
		}
	}
} satisfies Actions;
