import type { Handle } from '@sveltejs/kit';
import { API_URL } from '$env/static/private';
import PocketBase from 'pocketbase'

export const handle: Handle = async ({ event, resolve }) => {
    event.locals.pb = new PocketBase(API_URL);
    event.locals.pb.authStore.loadFromCookie(event.request.headers.get('cookie') || '');
    
    console.log(event.locals.pb.authStore.token)

    try {
        if (event.locals.pb.authStore.isValid) {
            console.log('authStore is valid')
            await event.locals.pb.collection('users').authRefresh();
            
            event.locals.user = {
                id: event.locals.pb.authStore.model?.id,
                name: event.locals.pb.authStore.model?.name,
                role: event.locals.pb.authStore.model?.role,
                username: event.locals.pb.authStore.model?.username
            }

            console.log(event.locals.user)
        }
    } catch (err) {
        event.locals.pb.authStore.clear();
    }

    const response = await resolve(event);
    const isProd = process.env.NODE_ENV === 'production' ? true : false;

    response.headers.set(
        'set-cookie',
        event.locals.pb.authStore.exportToCookie({ secure: isProd, sameSite: 'Lax' })
    );

    return response;
};
