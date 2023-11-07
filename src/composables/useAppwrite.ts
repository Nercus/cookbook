import { Client, Databases, Account } from "appwrite";

const appwrite = new Client();
appwrite
  .setEndpoint(import.meta.env.VUE_APP_ENDPOINT || "")
  .setProject(import.meta.env.VUE_APP_PROJECT || "")

const database = new Databases(appwrite);
const account = new Account(appwrite);

export default function useAppwrite() {
  return { database, account }
}
