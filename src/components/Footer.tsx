import { Separator } from '@geenius-ui/react';
import { site } from '~/lib/site';
import { t } from '~/lib/i18n';

export function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-surface-foreground text-surface py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Brand */}
                    <div>
                        <div className="font-bold text-xl text-primary mb-2">{site.name}</div>
                        <p className="text-sm text-muted">{site.description}</p>
                    </div>

                    {/* Links */}
                    <div>
                        <h3 className="font-semibold mb-3 text-sm uppercase tracking-wider">{t('nav.links')}</h3>
                        <ul className="space-y-2 text-sm text-muted">
                            <li><a href="/" className="hover:text-primary transition-colors">{t('nav.home')}</a></li>
                            <li><a href="/about" className="hover:text-primary transition-colors">{t('nav.about')}</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="font-semibold mb-3 text-sm uppercase tracking-wider">{t('nav.contact')}</h3>
                        <p className="text-sm text-muted">
                            <a href={`mailto:${site.email}`} className="hover:text-primary transition-colors">
                                {site.email}
                            </a>
                        </p>
                    </div>
                </div>

                <Separator className="my-8 bg-white/10" />

                <div className="text-center text-sm text-muted">
                    &copy; {year} {site.name}. {t('common.allRightsReserved')}
                </div>
            </div>
        </footer>
    );
}
