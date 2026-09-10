import { MongoClient } from "mongodb";

const globalForMongo = globalThis as typeof globalThis & {
  mongoClientPromise?: Promise<MongoClient>;
};

function createMongoClient() {
  const uri = process.env.MONGODB_URI;

  if (!uri) {
    throw new Error(
      "MONGODB_URI is not configured in .env.local",
    );
  }

  const client = new MongoClient(uri);

  return client.connect();
}

export async function getMongoClient() {
  if (!globalForMongo.mongoClientPromise) {
    globalForMongo.mongoClientPromise =
      createMongoClient().catch((error) => {
        globalForMongo.mongoClientPromise = undefined;
        throw error;
      });
  }

  return globalForMongo.mongoClientPromise;
}

export async function getMongoDatabase() {
  const client = await getMongoClient();

  const databaseName =
    process.env.MONGODB_DB || "gps_maps_website";

  return client.db(databaseName);
}