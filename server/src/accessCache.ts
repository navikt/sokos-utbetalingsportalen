const ONE_HOUR = 1000 * 60 * 60;

type NavIdent = string;
type CachedAccess = {
  expires: Date;
};

class AccessCache {
  cache: Partial<Record<NavIdent, CachedAccess>> = {};

  clear = () => {
    this.cache = {};
  };

  saveAccess = (navIdent: string) => {
    const aboutAnHour = new Date(Date.now() + ONE_HOUR);

    this.cache[navIdent] = {
      expires: aboutAnHour,
    };
  };

  getAccess = (navIdent: string) => {
    const access = this.cache[navIdent];
    return access && this.isValid(access);
  };

  isValid = (access: CachedAccess) => {
    return access.expires >= new Date();
  };
}

export default AccessCache;
