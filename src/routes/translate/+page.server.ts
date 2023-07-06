import { redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

export const load = ( async ({ locals }) => {
    const { session } = await locals.auth.validateUser();

    if (!session) {
        throw redirect(307, '/login');
    }
})

export const actions = {
    translate: async ({ request }) => {
        const data = await request.formData();
        const text = data.get('text') as string;
    }
} satisfies Actions;