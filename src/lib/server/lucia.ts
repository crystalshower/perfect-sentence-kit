import lucia from "lucia-auth";
import { sveltekit } from "lucia-auth/middleware";
import prisma from "@lucia-auth/adapter-prisma";
import { PrismaClient } from "@prisma/client";
import { dev } from "$app/environment";

export const auth = lucia({
	adapter: prisma(new PrismaClient()),
	env: dev ? "DEV" : "PROD",
	middleware: sveltekit(),
    transformDatabaseUser(databaseUser) {
        return {
            id: databaseUser.id,
            email: databaseUser.email,
        };
    },
});

export type Auth = typeof auth;