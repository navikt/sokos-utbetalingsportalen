/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
declare namespace App {
  interface Locals {
    token: string;
    userInfo: {
      NAVident: string;
      name: string;
      groups: string[];
    };
  }
}
