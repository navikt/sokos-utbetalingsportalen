import { describe, it, expect, vi, beforeEach } from 'vitest';
import { isAppAvailableInCurrentEnvironment, getEnvironmentFilteredApps } from '../accessControl';
import type { MicroFrontend } from '../../microfrontend';

// Mock the environment utility
vi.mock('../client/environments', () => ({
  getClientSideEnvironment: vi.fn(),
}));

// Mock the microfrontend config
vi.mock('../../microfrontend', () => ({
  microfrontendConfigArray: [
    {
      app: 'TEST_PROD_ONLY',
      title: 'Production Only App',
      description: 'Available only in production',
      adGroupDevelopment: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx', // placeholder
      adGroupProduction: 'valid-prod-uuid-1234-5678-90ab-cdef',
      route: '/prod-only',
      naisAppName: 'test-prod-only',
    },
    {
      app: 'TEST_DEV_ONLY',
      title: 'Development Only App',
      description: 'Available only in development',
      adGroupDevelopment: 'valid-dev-uuid-1234-5678-90ab-cdef',
      adGroupProduction: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx', // placeholder
      route: '/dev-only',
      naisAppName: 'test-dev-only',
    },
    {
      app: 'TEST_ALL_ENVS',
      title: 'All Environments App',
      description: 'Available in all environments',
      adGroupDevelopment: 'valid-dev-uuid-abcd-efgh-ijkl-mnop',
      adGroupProduction: 'valid-prod-uuid-abcd-efgh-ijkl-mnop',
      route: '/all-envs',
      naisAppName: 'test-all-envs',
    },
    {
      app: 'TEST_NEITHER',
      title: 'Unavailable App',
      description: 'Not available in any environment',
      adGroupDevelopment: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx', // placeholder
      adGroupProduction: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx', // placeholder
      route: '/neither',
      naisAppName: 'test-neither',
    },
  ],
}));

import { getClientSideEnvironment } from '../client/environments';

const mockGetClientSideEnvironment = vi.mocked(getClientSideEnvironment);

const mockApps: MicroFrontend[] = [
  {
    app: 'TEST_PROD_ONLY',
    title: 'Production Only App',
    description: 'Available only in production',
    adGroupDevelopment: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
    adGroupProduction: 'valid-prod-uuid-1234-5678-90ab-cdef',
    route: '/prod-only',
    naisAppName: 'test-prod-only',
  },
  {
    app: 'TEST_DEV_ONLY',
    title: 'Development Only App',
    description: 'Available only in development',
    adGroupDevelopment: 'valid-dev-uuid-1234-5678-90ab-cdef',
    adGroupProduction: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
    route: '/dev-only',
    naisAppName: 'test-dev-only',
  },
  {
    app: 'TEST_ALL_ENVS',
    title: 'All Environments App',
    description: 'Available in all environments',
    adGroupDevelopment: 'valid-dev-uuid-abcd-efgh-ijkl-mnop',
    adGroupProduction: 'valid-prod-uuid-abcd-efgh-ijkl-mnop',
    route: '/all-envs',
    naisAppName: 'test-all-envs',
  },
  {
    app: 'TEST_NEITHER',
    title: 'Unavailable App',
    description: 'Not available in any environment',
    adGroupDevelopment: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
    adGroupProduction: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
    route: '/neither',
    naisAppName: 'test-neither',
  },
];

describe('accessControl', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('isAppAvailableInCurrentEnvironment', () => {
    describe('in production environment', () => {
      beforeEach(() => {
        mockGetClientSideEnvironment.mockReturnValue('production');
      });

      it('should return true for apps with valid production AD groups', () => {
        const result = isAppAvailableInCurrentEnvironment(mockApps[0]); // TEST_PROD_ONLY
        expect(result).toBe(true);
      });

      it('should return false for apps with placeholder production AD groups', () => {
        const result = isAppAvailableInCurrentEnvironment(mockApps[1]); // TEST_DEV_ONLY
        expect(result).toBe(false);
      });

      it('should return true for apps available in all environments', () => {
        const result = isAppAvailableInCurrentEnvironment(mockApps[2]); // TEST_ALL_ENVS
        expect(result).toBe(true);
      });

      it('should return false for apps not available in any environment', () => {
        const result = isAppAvailableInCurrentEnvironment(mockApps[3]); // TEST_NEITHER
        expect(result).toBe(false);
      });
    });

    describe('in development environment', () => {
      beforeEach(() => {
        mockGetClientSideEnvironment.mockReturnValue('development');
      });

      it('should return false for apps with placeholder development AD groups', () => {
        const result = isAppAvailableInCurrentEnvironment(mockApps[0]); // TEST_PROD_ONLY
        expect(result).toBe(false);
      });

      it('should return true for apps with valid development AD groups', () => {
        const result = isAppAvailableInCurrentEnvironment(mockApps[1]); // TEST_DEV_ONLY
        expect(result).toBe(true);
      });

      it('should return true for apps available in all environments', () => {
        const result = isAppAvailableInCurrentEnvironment(mockApps[2]); // TEST_ALL_ENVS
        expect(result).toBe(true);
      });

      it('should return false for apps not available in any environment', () => {
        const result = isAppAvailableInCurrentEnvironment(mockApps[3]); // TEST_NEITHER
        expect(result).toBe(false);
      });
    });

    describe('in local environment', () => {
      beforeEach(() => {
        mockGetClientSideEnvironment.mockReturnValue('local');
      });

      it('should return true for all apps regardless of AD groups', () => {
        mockApps.forEach(app => {
          const result = isAppAvailableInCurrentEnvironment(app);
          expect(result).toBe(true);
        });
      });
    });

    describe('in unknown environment', () => {
      beforeEach(() => {
        // @ts-expect-error - testing unknown environment
        mockGetClientSideEnvironment.mockReturnValue('unknown');
      });

      it('should default to returning true for all apps', () => {
        mockApps.forEach(app => {
          const result = isAppAvailableInCurrentEnvironment(app);
          expect(result).toBe(true);
        });
      });
    });
  });

  describe('getEnvironmentFilteredApps', () => {
    describe('in production environment', () => {
      beforeEach(() => {
        mockGetClientSideEnvironment.mockReturnValue('production');
      });

      it('should return only apps available in production', () => {
        const result = getEnvironmentFilteredApps();
        expect(result).toHaveLength(2);
        expect(result.map(app => app.app)).toEqual(['TEST_PROD_ONLY', 'TEST_ALL_ENVS']);
      });
    });

    describe('in development environment', () => {
      beforeEach(() => {
        mockGetClientSideEnvironment.mockReturnValue('development');
      });

      it('should return only apps available in development', () => {
        const result = getEnvironmentFilteredApps();
        expect(result).toHaveLength(2);
        expect(result.map(app => app.app)).toEqual(['TEST_DEV_ONLY', 'TEST_ALL_ENVS']);
      });
    });

    describe('in local environment', () => {
      beforeEach(() => {
        mockGetClientSideEnvironment.mockReturnValue('local');
      });

      it('should return all apps', () => {
        const result = getEnvironmentFilteredApps();
        expect(result).toHaveLength(4);
        expect(result.map(app => app.app)).toEqual([
          'TEST_PROD_ONLY',
          'TEST_DEV_ONLY', 
          'TEST_ALL_ENVS',
          'TEST_NEITHER'
        ]);
      });
    });
  });
});

describe('Real microfrontend config tests', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    // Restore real microfrontend config for these tests
    vi.doUnmock('../../microfrontend');
  });

  describe('with actual app configuration', () => {
    it('should filter DARE POC and Faste data in production environment', async () => {
      // Re-import to get actual config
      const { getEnvironmentFilteredApps: realGetEnvironmentFilteredApps } = await import('../accessControl');
      
      mockGetClientSideEnvironment.mockReturnValue('production');
      
      const result = realGetEnvironmentFilteredApps();
      const appNames = result.map(app => app.app);
      
      // DARE POC and FASTEDATA should be filtered out in production
      expect(appNames).not.toContain('DARE');
      expect(appNames).not.toContain('FASTEDATA');
      
      // But other apps should be present
      expect(appNames).toContain('ATTESTASJON');
      expect(appNames).toContain('OPPDRAGSINFO');
      expect(appNames).toContain('SKATTEKORT');
    });

    it('should show all apps including DARE POC and Faste data in development environment', async () => {
      const { getEnvironmentFilteredApps: realGetEnvironmentFilteredApps } = await import('../accessControl');
      
      mockGetClientSideEnvironment.mockReturnValue('development');
      
      const result = realGetEnvironmentFilteredApps();
      const appNames = result.map(app => app.app);
      
      // All apps should be present in development
      expect(appNames).toContain('DARE');
      expect(appNames).toContain('FASTEDATA');
      expect(appNames).toContain('ATTESTASJON');
      expect(appNames).toContain('OPPDRAGSINFO');
      expect(result).toHaveLength(13); // All 13 apps
    });

    it('should show all apps in local environment', async () => {
      const { getEnvironmentFilteredApps: realGetEnvironmentFilteredApps } = await import('../accessControl');
      
      mockGetClientSideEnvironment.mockReturnValue('local');
      
      const result = realGetEnvironmentFilteredApps();
      
      // All apps should be present in local
      expect(result).toHaveLength(13); // All 13 apps
    });
  });
});