import { describe, it, expect, vi, beforeEach } from 'vitest';
import { isAppAvailableInCurrentEnvironment, getEnvironmentFilteredApps } from './accessControl';
import type { MicroFrontend } from '../microfrontend';

// Mock the environment detection module
vi.mock('./client/environments', () => ({
  getClientSideEnvironment: vi.fn(),
}));

import { getClientSideEnvironment } from './client/environments';

const mockGetClientSideEnvironment = vi.mocked(getClientSideEnvironment);

describe('Environment Filtering Functionality', () => {
  // Sample test apps with different AD group configurations
  const testApps: MicroFrontend[] = [
    {
      app: 'PROD_ONLY_APP',
      title: 'Production Only',
      description: 'Only in production',
      adGroupDevelopment: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
      adGroupProduction: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
      route: '/prod-only',
      naisAppName: 'prod-only-app',
    },
    {
      app: 'DEV_ONLY_APP',
      title: 'Development Only',
      description: 'Only in development',
      adGroupDevelopment: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
      adGroupProduction: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
      route: '/dev-only',
      naisAppName: 'dev-only-app',
    },
  ];

  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('isAppAvailableInCurrentEnvironment', () => {
    it('should return true for production app in production environment', () => {
      mockGetClientSideEnvironment.mockReturnValue('production');
      
      const result = isAppAvailableInCurrentEnvironment(testApps[0]);
      
      expect(result).toBe(true);
    });

    it('should return false for dev-only app in production environment', () => {
      mockGetClientSideEnvironment.mockReturnValue('production');
      
      const result = isAppAvailableInCurrentEnvironment(testApps[1]);
      
      expect(result).toBe(false);
    });

    it('should return true for dev app in development environment', () => {
      mockGetClientSideEnvironment.mockReturnValue('development');
      
      const result = isAppAvailableInCurrentEnvironment(testApps[1]);
      
      expect(result).toBe(true);
    });

    it('should return false for prod-only app in development environment', () => {
      mockGetClientSideEnvironment.mockReturnValue('development');
      
      const result = isAppAvailableInCurrentEnvironment(testApps[0]);
      
      expect(result).toBe(false);
    });

    it('should return true for all apps in local environment', () => {
      mockGetClientSideEnvironment.mockReturnValue('local');
      
      expect(isAppAvailableInCurrentEnvironment(testApps[0])).toBe(true);
      expect(isAppAvailableInCurrentEnvironment(testApps[1])).toBe(true);
    });
  });

  describe('getEnvironmentFilteredApps', () => {
    it('should filter apps based on production environment', () => {
      mockGetClientSideEnvironment.mockReturnValue('production');
      
      const result = getEnvironmentFilteredApps();
      
      // In production, apps with placeholder production AD groups should be excluded
      const prodAppExists = result.some(app => 
        app.adGroupProduction === 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'
      );
      expect(prodAppExists).toBe(false);
    });

    it('should filter apps based on development environment', () => {
      mockGetClientSideEnvironment.mockReturnValue('development');
      
      const result = getEnvironmentFilteredApps();
      
      // In development, apps with placeholder development AD groups should be excluded
      const devAppExists = result.some(app => 
        app.adGroupDevelopment === 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'
      );
      expect(devAppExists).toBe(false);
    });

    it('should return all apps in local environment', () => {
      mockGetClientSideEnvironment.mockReturnValue('local');
      
      const result = getEnvironmentFilteredApps();
      
      // In local, all apps should be available
      expect(result.length).toBeGreaterThan(0);
    });
  });
});
