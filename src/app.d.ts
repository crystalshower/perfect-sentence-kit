// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare namespace App {
	type PocketBase = import('pocketbase').default;

	interface Locals {
		user: {
			id: string | undefined;
			name: string;
			role: string;
			username: string;
		} | undefined,
		pb?: PocketBase;
	}

	// interface Locals {
	// 	session: import('svelte-kit-cookie-session').Session<SessionData>;
	// }

	// interface PageData {
	// 	session: SessionData;
	// }
}
