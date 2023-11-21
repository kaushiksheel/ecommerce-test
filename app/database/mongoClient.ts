// This approach is taken from https://github.com/vercel/next.js/tree/canary/examples/with-mongodb
import { MongoClient } from "mongodb";


if (!process.env.DATABASE_URL) {
  throw new Error('Invalid/Missing environment variable: "DATABASE_URL"');
}

const uri = process.env.DATABASE_URL;
const options = {};

let client;

let clientPromise: Promise<MongoClient>;

if (process.env.NODE_ENV === "development") {
  // In development mode, use a global variable so that the value
  // is preserved across module reloads caused by HMR (Hot Module Replacement).
  if (!(global as any)._mongoClientPromise) {
    client = new MongoClient(uri, options);
    (global as any)._mongoClientPromise = client.connect();
  }
  clientPromise = (global as any)._mongoClientPromise;
} else {

  
  // In production mode, it's best to not use a global variable.
  const client = new MongoClient(uri, options);
  clientPromise = client.connect();

}
export {client } 

// Export a module-scoped MongoClient promise. By doing this in a
// separate module, the client can be shared across functions.
export default clientPromise;