import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB;

if (!uri) {
  throw new Error("MONGODB_URI is missing");
}

if (!dbName) {
  throw new Error("MONGODB_DB is missing");
}

const client = new MongoClient(uri);

try {
  await client.connect();

  const db = client.db(dbName);

  const homepage = await db
    .collection("site_content")
    .findOne({ key: "homepage" });

  console.log("✅ MongoDB connected");
  console.log("Database:", dbName);

  if (!homepage) {
    console.log("⚠️ Connected, but homepage document was not found.");
  } else {
    console.log("✅ Homepage document found");
    console.log("Hero title:", homepage.hero?.titleTop);
  }
} catch (error) {
  console.error("❌ MongoDB connection failed");
  console.error(error);
  process.exitCode = 1;
} finally {
  await client.close();
}