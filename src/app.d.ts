declare global {
	namespace App {
		interface Locals {
			auth: import("lucia-auth").AuthRequest;
		}
	}
}

/// <reference types="lucia-auth" />
declare global {
	namespace Lucia {
		type Auth = import("$lib/server/lucia").Auth;
		type UserAttributes = {
			email: string;
		};
	}
}

// THIS IS IMPORTANT!!!
export {};