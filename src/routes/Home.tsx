import { ArrowRight, Zap, Shield, Globe } from 'lucide-react';
import { Button, Card, CardContent, Badge } from '@geenius-ui/react';
import { site } from '~/lib/site';
import { t } from '~/lib/i18n';

const features = [
    {
        icon: <Zap className="w-6 h-6" />,
        titleKey: 'home.feature.fast.title',
        descKey: 'home.feature.fast.desc',
    },
    {
        icon: <Shield className="w-6 h-6" />,
        titleKey: 'home.feature.safe.title',
        descKey: 'home.feature.safe.desc',
    },
    {
        icon: <Globe className="w-6 h-6" />,
        titleKey: 'home.feature.i18n.title',
        descKey: 'home.feature.i18n.desc',
    },
];

export function Home() {
    return (
        <>
            {/* Hero */}
            <section className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4 pt-16">
                <Badge variant="primary" className="mb-6 gap-2">
                    <Zap size={14} />
                    {t('home.badge')}
                </Badge>

                <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-surface-foreground max-w-4xl mb-6">
                    {t('home.title.prefix')}
                    <span className="text-primary">{t('home.title.highlight')}</span>
                    {t('home.title.suffix')}
                </h1>

                <p className="text-lg md:text-xl text-muted max-w-2xl mb-10">
                    {site.description}. {t('home.subtitle')}
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                    <Button variant="primary" size="lg" icon={<ArrowRight size={18} />}>
                        <a href="#features">{t('common.getStarted')}</a>
                    </Button>
                    <Button variant="secondary" size="lg">
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                            {t('common.viewOnGithub')}
                        </a>
                    </Button>
                </div>
            </section>

            {/* Features */}
            <section id="features" className="py-24 bg-secondary/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-surface-foreground mb-4">
                            {t('home.features.title')}
                        </h2>
                        <p className="text-lg text-muted max-w-2xl mx-auto">
                            {t('home.features.subtitle')}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {features.map((feature) => (
                            <Card key={feature.titleKey} hover>
                                <CardContent>
                                    <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-xl font-semibold text-surface-foreground mb-2">
                                        {t(feature.titleKey)}
                                    </h3>
                                    <p className="text-muted">{t(feature.descKey)}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
