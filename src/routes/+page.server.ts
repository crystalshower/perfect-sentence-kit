import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (async ({ locals }) => {
    const { session } = await locals.auth.validateUser();
    if (session) {
        console.log('User is logged in');
    } else {
        throw redirect(307, '/login');
    }
}) satisfies PageServerLoad;