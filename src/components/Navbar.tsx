import { useState } from 'react';
import { Link, useRouterState } from '@tanstack/react-router';
import { Button } from '@geenius-ui/react';
import { Menu, X } from 'lucide-react';
import { site } from '~/lib/site';
import { t } from '~/lib/i18n';

const NAV_LINKS = [
    { path: '/' as const, labelKey: 'nav.home' },
    { path: '/about' as const, labelKey: 'nav.about' },
];

export function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const routerState = useRouterState();
    const currentPath = routerState.location.pathname;

    return (
        <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-border">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <Link to="/" className="font-bold text-xl text-primary">
                        {site.name}
                    </Link>

                    <div className="hidden md:flex items-center gap-8">
                        {NAV_LINKS.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`text-sm font-medium transition-colors hover:text-primary ${currentPath === link.path ? 'text-primary' : 'text-muted'
                                    }`}
                            >
                                {t(link.labelKey)}
                            </Link>
                        ))}
                    </div>

                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="md:hidden"
                    >
                        {mobileOpen ? <X size={20} /> : <Menu size={20} />}
                    </Button>
                </div>

                {mobileOpen && (
                    <div className="md:hidden pb-4 border-t border-border">
                        <div className="flex flex-col gap-2 pt-4">
                            {NAV_LINKS.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    onClick={() => setMobileOpen(false)}
                                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${currentPath === link.path
                                            ? 'bg-primary/10 text-primary'
                                            : 'text-muted hover:bg-secondary'
                                        }`}
                                >
                                    {t(link.labelKey)}
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
