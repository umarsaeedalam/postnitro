import { createNavigation } from 'next-intl/navigation';
import { routing } from './routing';

// Export internationalized navigation utilities that maintain correct locale across the application
export const { Link, redirect, usePathname, useRouter, getPathname } = createNavigation(routing);