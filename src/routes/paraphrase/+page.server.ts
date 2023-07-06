import type { PageServerLoad, Actions } from './$types';
import { API_URL, API_KEY } from '$env/static/private';

export const load = (async () => {
    return {};
}) satisfies PageServerLoad;

export const actions = {
	paraphrase: async ({ request }) => {
        const data = await request.formData();
        const input = data.get('input') as string;

        const result = await fetch(`http://localhost:8080/paraphrase`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${API_KEY}`,
            },
            body: JSON.stringify({
                "Text": input,
            }),
        });

        const json = await result.json();
        console.log(json.result);

        return {
            result: json.result,
        };
	}
} satisfies Actions;