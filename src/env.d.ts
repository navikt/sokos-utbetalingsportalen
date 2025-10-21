/// <reference types="astro/client" />
import type { UserData } from "@types/UserData";

declare global {
  namespace App {
    interface Locals {
      token: string;
      userInfo: UserData;
    }
  }
}
