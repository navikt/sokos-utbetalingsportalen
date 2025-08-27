import { describe, it, expect, vi, beforeEach } from 'vitest';
import { getEnvironmentFilteredApps, isAppAvailableInCurrentEnvironment } from '../utils/accessControl';
import { microfrontendConfigArray } from '../microfrontend';

// Mock the environment utility
vi.mock('../utils/client/environments', () => ({
  getClientSideEnvironment: vi.fn(),
}));

import { getClientSideEnvironment } from '../utils/client/environments';

const mockGetClientSideEnvironment = vi.mocked(getClientSideEnvironment);

describe('Integration Tests - Real App Configuration', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('Production Environment Filtering', () => {
    beforeEach(() => {
      mockGetClientSideEnvironment.mockReturnValue('production');
    });

    it('should exclude DARE POC app in production (has placeholder production AD group)', () => {
      const dareApp = microfrontendConfigArray.find(app => app.app === 'DARE');
      expect(dareApp).toBeDefined();
      expect(dareApp!.adGroupProduction).toBe('xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx');
      
      const result = isAppAvailableInCurrentEnvironment(dareApp!);
      expect(result).toBe(false);
    });

    it('should exclude Faste data app in production (has placeholder production AD group)', () => {
      const fastedataApp = microfrontendConfigArray.find(app => app.app === 'FASTEDATA');
      expect(fastedataApp).toBeDefined();
      expect(fastedataApp!.adGroupProduction).toBe('xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx');
      
      const result = isAppAvailableInCurrentEnvironment(fastedataApp!);
      expect(result).toBe(false);
    });

    it('should include Attestasjon app in production (has valid production AD group)', () => {
      const attestasjonApp = microfrontendConfigArray.find(app => app.app === 'ATTESTASJON');
      expect(attestasjonApp).toBeDefined();
      expect(attestasjonApp!.adGroupProduction).not.toBe('xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx');
      
      const result = isAppAvailableInCurrentEnvironment(attestasjonApp!);
      expect(result).toBe(true);
    });

    it('should return correct number of apps in production (11 out of 13)', () => {
      const filteredApps = getEnvironmentFilteredApps();
      const allApps = microfrontendConfigArray;
      
      expect(allApps).toHaveLength(13);
      expect(filteredApps).toHaveLength(11);
      
      const filteredAppNames = filteredApps.map(app => app.app);
      expect(filteredAppNames).not.toContain('DARE');
      expect(filteredAppNames).not.toContain('FASTEDATA');
    });

    it('should include all expected production apps', () => {
      const filteredApps = getEnvironmentFilteredApps();
      const appNames = filteredApps.map(app => app.app);
      
      const expectedProductionApps = [
        'ATTESTASJON',
        'OPPDRAGSINFO',
        'SKATTEKORT',
        'SPK-MOTTAK',
        'RESENDING-BANK',
        'KRP',
        'KRO',
        'ORS',
        'UTBETALING',
        'BUNTKONTROLL',
        'MELDINGSFLYT',
      ];
      
      expectedProductionApps.forEach(appName => {
        expect(appNames).toContain(appName);
      });
    });
  });

  describe('Development Environment Filtering', () => {
    beforeEach(() => {
      mockGetClientSideEnvironment.mockReturnValue('development');
    });

    it('should include DARE POC app in development (has valid development AD group)', () => {
      const dareApp = microfrontendConfigArray.find(app => app.app === 'DARE');
      expect(dareApp).toBeDefined();
      expect(dareApp!.adGroupDevelopment).not.toBe('xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx');
      
      const result = isAppAvailableInCurrentEnvironment(dareApp!);
      expect(result).toBe(true);
    });

    it('should include Faste data app in development (has valid development AD group)', () => {
      const fastedataApp = microfrontendConfigArray.find(app => app.app === 'FASTEDATA');
      expect(fastedataApp).toBeDefined();
      expect(fastedataApp!.adGroupDevelopment).not.toBe('xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx');
      
      const result = isAppAvailableInCurrentEnvironment(fastedataApp!);
      expect(result).toBe(true);
    });

    it('should return all 13 apps in development environment', () => {
      const filteredApps = getEnvironmentFilteredApps();
      const allApps = microfrontendConfigArray;
      
      expect(allApps).toHaveLength(13);
      expect(filteredApps).toHaveLength(13);
      
      const filteredAppNames = filteredApps.map(app => app.app);
      expect(filteredAppNames).toContain('DARE');
      expect(filteredAppNames).toContain('FASTEDATA');
    });
  });

  describe('Local Environment Filtering', () => {
    beforeEach(() => {
      mockGetClientSideEnvironment.mockReturnValue('local');
    });

    it('should return all 13 apps in local environment regardless of AD groups', () => {
      const filteredApps = getEnvironmentFilteredApps();
      const allApps = microfrontendConfigArray;
      
      expect(allApps).toHaveLength(13);
      expect(filteredApps).toHaveLength(13);
      
      const filteredAppNames = filteredApps.map(app => app.app);
      expect(filteredAppNames).toContain('DARE');
      expect(filteredAppNames).toContain('FASTEDATA');
    });

    it('should include apps with placeholder AD groups in local environment', () => {
      // Test with apps that have placeholder groups
      const dareApp = microfrontendConfigArray.find(app => app.app === 'DARE');
      const fastedataApp = microfrontendConfigArray.find(app => app.app === 'FASTEDATA');
      
      expect(dareApp).toBeDefined();
      expect(fastedataApp).toBeDefined();
      
      expect(isAppAvailableInCurrentEnvironment(dareApp!)).toBe(true);
      expect(isAppAvailableInCurrentEnvironment(fastedataApp!)).toBe(true);
    });
  });

  describe('Edge Cases', () => {
    it('should handle apps with different placeholder patterns correctly', () => {
      // All apps should use the exact placeholder pattern
      const appsWithPlaceholders = microfrontendConfigArray.filter(app => 
        app.adGroupProduction === 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx' ||
        app.adGroupDevelopment === 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'
      );
      
      expect(appsWithPlaceholders).toHaveLength(2); // DARE and FASTEDATA
      expect(appsWithPlaceholders.map(app => app.app)).toEqual(['DARE', 'FASTEDATA']);
    });

    it('should handle apps with valid UUIDs correctly', () => {
      const attestasjonApp = microfrontendConfigArray.find(app => app.app === 'ATTESTASJON');
      expect(attestasjonApp).toBeDefined();
      
      // Valid UUIDs should not match placeholder pattern
      const uuidPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;
      const placeholderPattern = /^x{8}-x{4}-x{4}-x{4}-x{12}$/;
      
      expect(uuidPattern.test(attestasjonApp!.adGroupDevelopment)).toBe(true);
      expect(uuidPattern.test(attestasjonApp!.adGroupProduction)).toBe(true);
      expect(placeholderPattern.test(attestasjonApp!.adGroupDevelopment)).toBe(false);
      expect(placeholderPattern.test(attestasjonApp!.adGroupProduction)).toBe(false);
    });
  });
});