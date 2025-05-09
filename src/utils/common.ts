export function hasAccessToAdGroup(adGroups: string[], uuid: string): boolean {
  return adGroups.includes(uuid);
}
