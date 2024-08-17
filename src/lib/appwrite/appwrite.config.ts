import { Client, Databases } from 'appwrite';

const client = new Client();
const databases = new Databases(client);

const {APPWRITE_ENDPOINT, PROJECT_ID} = process.env

client
  .setEndpoint(APPWRITE_ENDPOINT as string)
  .setProject(PROJECT_ID as string);

export { client, databases };
