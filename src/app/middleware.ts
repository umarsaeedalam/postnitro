import createMiddleware from 'next-intl/middleware';
import { routing } from '../i18n/routing';

// Configure internationalization middleware to handle locale-based routing
export default createMiddleware(routing);

// Apply middleware only to page routes, excluding API routes and static files
export const config = {
    matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)'
};