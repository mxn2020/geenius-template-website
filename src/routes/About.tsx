import { Card, CardContent, CardHeader, CardTitle } from '@geenius-ui/react';
import { site } from '~/lib/site';
import { t } from '~/lib/i18n';

const techStack = [
    'React 19 with TypeScript',
    'Tailwind CSS 4 with design tokens',
    'Geenius UI component library',
    'Vite for fast dev and builds',
    'Vitest for unit testing',
    'i18n ready with built-in translations',
];

export function About() {
    return (
        <section className="min-h-screen pt-24 pb-16 px-4">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-4xl font-bold text-surface-foreground mb-6">
                    {t('about.title')} {site.name}
                </h1>
                <p className="text-lg text-muted mb-6">
                    {t('about.intro')}
                </p>

                <Card>
                    <CardHeader>
                        <CardTitle>{t('about.techStack')}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="space-y-2 text-muted">
                            {techStack.map((item) => (
                                <li key={item} className="flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-primary" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}
