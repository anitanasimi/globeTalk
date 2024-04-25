import NextAuth, { DefaultSession } from "nest-auth";

declare module "next-auth" {
  interface Session {
    firebaseToken?: String;
    user: {
      id: string;
    } & DefaultSession["user"];
  }
}
