import { describe, it, expect, beforeEach } from 'vitest';
import { getClientSideEnvironment } from './environments';

// Mock window.location globally
Object.defineProperty(window, 'location', {
  value: {
    href: '',
  },
  writable: true,
});

describe('environments', () => {
  beforeEach(() => {
    // Reset window.location.href before each test
    window.location.href = '';
  });

  describe('getClientSideEnvironment', () => {
    it('should return "production" for intern.nav.no URLs', () => {
      window.location.href = 'https://utbetalingsportalen.intern.nav.no/';
      expect(getClientSideEnvironment()).toBe('production');
    });

    it('should return "production" for ansatt.nav.no URLs', () => {
      window.location.href = 'https://utbetalingsportalen.ansatt.nav.no/dashboard';
      expect(getClientSideEnvironment()).toBe('production');
    });

    it('should return "development" for intern.dev.nav.no URLs', () => {
      window.location.href = 'https://utbetalingsportalen.intern.dev.nav.no/';
      expect(getClientSideEnvironment()).toBe('development');
    });

    it('should return "development" for ansatt.dev.nav.no URLs', () => {
      window.location.href = 'https://utbetalingsportalen.ansatt.dev.nav.no/dashboard';
      expect(getClientSideEnvironment()).toBe('development');
    });

    it('should return "local" for localhost URLs', () => {
      window.location.href = 'http://localhost:3000/';
      expect(getClientSideEnvironment()).toBe('local');
    });

    it('should return "local" for 127.0.0.1 URLs', () => {
      window.location.href = 'http://127.0.0.1:4321/dashboard';
      expect(getClientSideEnvironment()).toBe('local');
    });

    it('should return "local" for other URLs', () => {
      window.location.href = 'https://example.com/app';
      expect(getClientSideEnvironment()).toBe('local');
    });

    it('should handle URLs with query parameters and fragments', () => {
      window.location.href = 'https://utbetalingsportalen.intern.nav.no/app?param=value#section';
      expect(getClientSideEnvironment()).toBe('production');
      
      window.location.href = 'https://utbetalingsportalen.intern.dev.nav.no/app?param=value#section';
      expect(getClientSideEnvironment()).toBe('development');
    });

    it('should handle URLs with subpaths', () => {
      window.location.href = 'https://utbetalingsportalen.intern.nav.no/some/deep/path';
      expect(getClientSideEnvironment()).toBe('production');
      
      window.location.href = 'https://utbetalingsportalen.intern.dev.nav.no/some/deep/path';
      expect(getClientSideEnvironment()).toBe('development');
    });
  });
});