import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AppSwitcher from './AppSwitcher';
import type { MicroFrontend } from '../../microfrontend';

// Mock the access control utilities
vi.mock('@utils/accessControl', () => ({
  getAuthorizedApps: vi.fn(),
  getEnvironmentFilteredApps: vi.fn(),
  hasAccessToApp: vi.fn(),
}));

// Mock the microfrontend config
vi.mock('../../microfrontend', () => ({
  microfrontendConfigArray: [],
}));

import { getAuthorizedApps, getEnvironmentFilteredApps, hasAccessToApp } from '@utils/accessControl';

const mockGetAuthorizedApps = vi.mocked(getAuthorizedApps);
const mockGetEnvironmentFilteredApps = vi.mocked(getEnvironmentFilteredApps);
const mockHasAccessToApp = vi.mocked(hasAccessToApp);

const mockAuthorizedApps: MicroFrontend[] = [
  {
    app: 'ATTESTASJON',
    title: 'Attestasjon',
    description: 'Attestering av oppdrag',
    adGroupDevelopment: 'dev-uuid-1',
    adGroupProduction: 'prod-uuid-1',
    route: '/attestasjon',
    naisAppName: 'sokos-up-attestasjon',
  },
  {
    app: 'OPPDRAGSINFO',
    title: 'Oppdragsinfo',
    description: 'Søk etter oppdrag i Oppdragssystemet',
    adGroupDevelopment: 'dev-uuid-2',
    adGroupProduction: 'prod-uuid-2',
    route: '/oppdragsinfo',
    naisAppName: 'sokos-up-oppdragsinfo',
  },
];

const mockEnvironmentFilteredApps: MicroFrontend[] = [
  ...mockAuthorizedApps,
  {
    app: 'SKATTEKORT',
    title: 'Skattekort',
    description: 'Søk etter skattekort for personer i OS-Eskatt',
    adGroupDevelopment: 'dev-uuid-3',
    adGroupProduction: 'prod-uuid-3',
    route: '/skattekort',
    naisAppName: 'sokos-up-skattekort',
  },
];

describe('AppSwitcher', () => {
  const defaultProps = {
    adGroups: ['dev-uuid-1', 'prod-uuid-1', 'dev-uuid-2', 'prod-uuid-2'],
  };

  beforeEach(() => {
    vi.clearAllMocks();
    
    // Default mock implementations
    mockGetAuthorizedApps.mockReturnValue(mockAuthorizedApps);
    mockGetEnvironmentFilteredApps.mockReturnValue(mockEnvironmentFilteredApps);
    mockHasAccessToApp.mockImplementation((adGroups, app) => {
      return mockAuthorizedApps.some(authorizedApp => authorizedApp.app === app.app);
    });
  });

  it('should render the heading and switch', () => {
    render(<AppSwitcher {...defaultProps} />);
    
    expect(screen.getByRole('heading', { name: 'Apper' })).toBeInTheDocument();
    expect(screen.getByRole('checkbox', { name: 'Vis alle' })).toBeInTheDocument();
  });

  it('should initially show only authorized apps when switch is unchecked', () => {
    render(<AppSwitcher {...defaultProps} />);
    
    // Should show authorized apps
    expect(screen.getByText('Attestasjon')).toBeInTheDocument();
    expect(screen.getByText('Oppdragsinfo')).toBeInTheDocument();
    
    // Should not show the environment-only app
    expect(screen.queryByText('Skattekort')).not.toBeInTheDocument();
  });

  it('should show environment-filtered apps when switch is checked', async () => {
    const user = userEvent.setup();
    render(<AppSwitcher {...defaultProps} />);
    
    const visAlleSwitch = screen.getByRole('checkbox', { name: 'Vis alle' });
    
    // Toggle the switch
    await user.click(visAlleSwitch);
    
    // Should now show all environment-filtered apps
    expect(screen.getByText('Attestasjon')).toBeInTheDocument();
    expect(screen.getByText('Oppdragsinfo')).toBeInTheDocument();
    expect(screen.getByText('Skattekort')).toBeInTheDocument();
  });

  it('should toggle back to authorized apps when switch is unchecked again', async () => {
    const user = userEvent.setup();
    render(<AppSwitcher {...defaultProps} />);
    
    const visAlleSwitch = screen.getByRole('checkbox', { name: 'Vis alle' });
    
    // Toggle on
    await user.click(visAlleSwitch);
    expect(screen.getByText('Skattekort')).toBeInTheDocument();
    
    // Toggle off
    await user.click(visAlleSwitch);
    expect(screen.queryByText('Skattekort')).not.toBeInTheDocument();
    expect(screen.getByText('Attestasjon')).toBeInTheDocument();
    expect(screen.getByText('Oppdragsinfo')).toBeInTheDocument();
  });

  it('should render apps with access as clickable links', () => {
    render(<AppSwitcher {...defaultProps} />);
    
    const attestasjonLink = screen.getByRole('link', { name: 'Attestasjon' });
    expect(attestasjonLink).toHaveAttribute('href', '/attestasjon');
    
    const oppdragsinfoLink = screen.getByRole('link', { name: 'Oppdragsinfo' });
    expect(oppdragsinfoLink).toHaveAttribute('href', '/oppdragsinfo');
  });

  it('should render apps without access as disabled with tooltip', async () => {
    // Mock hasAccessToApp to return false for one app
    mockHasAccessToApp.mockImplementation((adGroups, app) => {
      return app.app !== 'SKATTEKORT'; // No access to SKATTEKORT
    });
    
    const user = userEvent.setup();
    render(<AppSwitcher {...defaultProps} />);
    
    // Toggle to show all apps
    const visAlleSwitch = screen.getByRole('checkbox', { name: 'Vis alle' });
    await user.click(visAlleSwitch);
    
    // SKATTEKORT should be disabled (not a link)
    expect(screen.queryByRole('link', { name: 'Skattekort' })).not.toBeInTheDocument();
    
    // Should show as regular text with tooltip
    const skattekortElement = screen.getByText('Skattekort');
    expect(skattekortElement).toBeInTheDocument();
    
    // Hover to show tooltip
    await user.hover(skattekortElement);
    expect(screen.getByText('Du har ikke tilgang til denne appen')).toBeInTheDocument();
  });

  it('should sort apps alphabetically', () => {
    // Create apps with names that would be out of order
    const unsortedApps = [
      {
        app: 'ZEBRA',
        title: 'Zebra App',
        description: 'Last app',
        adGroupDevelopment: 'dev-uuid-z',
        adGroupProduction: 'prod-uuid-z',
        route: '/zebra',
        naisAppName: 'zebra',
      },
      {
        app: 'ALPHA',
        title: 'Alpha App',
        description: 'First app',
        adGroupDevelopment: 'dev-uuid-a',
        adGroupProduction: 'prod-uuid-a',
        route: '/alpha',
        naisAppName: 'alpha',
      },
      {
        app: 'BETA',
        title: 'Beta App',
        description: 'Middle app',
        adGroupDevelopment: 'dev-uuid-b',
        adGroupProduction: 'prod-uuid-b',
        route: '/beta',
        naisAppName: 'beta',
      },
    ];
    
    mockGetAuthorizedApps.mockReturnValue(unsortedApps);
    mockHasAccessToApp.mockReturnValue(true);
    
    render(<AppSwitcher {...defaultProps} />);
    
    const links = screen.getAllByRole('link');
    const linkTexts = links.map(link => link.textContent);
    
    // Should be sorted alphabetically
    expect(linkTexts).toEqual(['Alpha App', 'Beta App', 'Zebra App']);
  });

  it('should call getAuthorizedApps and getEnvironmentFilteredApps with correct parameters', () => {
    const testAdGroups = ['test-group-1', 'test-group-2'];
    
    render(<AppSwitcher adGroups={testAdGroups} />);
    
    expect(mockGetAuthorizedApps).toHaveBeenCalledWith(testAdGroups);
    expect(mockGetEnvironmentFilteredApps).toHaveBeenCalled();
  });

  it('should handle empty authorized apps list', () => {
    mockGetAuthorizedApps.mockReturnValue([]);
    
    render(<AppSwitcher {...defaultProps} />);
    
    // Should still render the heading and switch
    expect(screen.getByRole('heading', { name: 'Apper' })).toBeInTheDocument();
    expect(screen.getByRole('checkbox', { name: 'Vis alle' })).toBeInTheDocument();
    
    // Should not show any app cards
    expect(screen.queryByRole('link')).not.toBeInTheDocument();
  });

  it('should handle empty environment-filtered apps list', async () => {
    mockGetEnvironmentFilteredApps.mockReturnValue([]);
    
    const user = userEvent.setup();
    render(<AppSwitcher {...defaultProps} />);
    
    // Toggle to show environment-filtered apps
    const visAlleSwitch = screen.getByRole('checkbox', { name: 'Vis alle' });
    await user.click(visAlleSwitch);
    
    // Should not show any app cards
    expect(screen.queryByRole('link')).not.toBeInTheDocument();
  });
});