import { createRouter, createRoute, createRootRoute, Outlet, Link, useRouterState } from '@tanstack/react-router';

// Import route components
import { Home } from '~/routes/Home';
import { About } from '~/routes/About';

// Root layout
const rootRoute = createRootRoute({
    component: () => <Outlet />,
});

// Routes
const indexRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/',
    component: Home,
});

const aboutRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/about',
    component: About,
});

// Route tree
const routeTree = rootRoute.addChildren([indexRoute, aboutRoute]);

// Create router
export const router = createRouter({ routeTree });

// Type registration
declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router;
    }
}

// Re-export Link and useRouterState for use in components
export { Link, useRouterState };
