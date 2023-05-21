import type { LayoutServerLoad } from './$types';

export const load = (async ({ url }) => {
    const currentPath = url.pathname;

    if (currentPath === '/login') {
        return {
            layout: {
                hideNav: true,
                hideFooter: true,
            },
        };
    }
}) satisfies LayoutServerLoad;