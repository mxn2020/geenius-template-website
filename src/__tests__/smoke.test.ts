import { describe, it, expect } from 'vitest';
import { t, setLocale, getLocale, getSupportedLocales } from '../lib/i18n';
import { site } from '../lib/site';

describe('i18n', () => {
    it('returns English translations by default', () => {
        expect(getLocale()).toBe('en');
        expect(t('nav.home')).toBe('Home');
        expect(t('nav.about')).toBe('About');
    });

    it('switches to German locale', () => {
        setLocale('de');
        expect(t('nav.home')).toBe('Startseite');
        setLocale('en'); // Reset
    });

    it('falls back to key for missing translations', () => {
        expect(t('missing.key')).toBe('missing.key');
    });

    it('lists supported locales', () => {
        const locales = getSupportedLocales();
        expect(locales).toContain('en');
        expect(locales).toContain('de');
    });
});

describe('site', () => {
    it('has required metadata', () => {
        expect(site.name).toBeDefined();
        expect(site.description).toBeDefined();
        expect(site.url).toBeDefined();
    });
});
