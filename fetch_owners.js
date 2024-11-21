import fetch from "node-fetch";
import fs from "fs";
import readline from "readline";

// API Base URL
const BASE_URL = "https://api-next.ordex.io/item";

// Function to fetch owner for a given ethscription_id
async function fetchOwner(ethscription_id) {
  const url = `${BASE_URL}/${ethscription_id}`;
  console.log(`Fetching: ${url}`);
  const response = await fetch(url);

  if (!response.ok) {
    console.error(`Failed to fetch ${ethscription_id}: ${response.statusText}`);
    return { ethscription_id, owner: "ERROR" };
  }

  const data = await response.json();

  // Extract the owner field
  const owner = data.owner ? data.owner.replace("ETHEREUM:", "") : "UNKNOWN";
  return { ethscription_id, owner };
}

// Function to read the input text file line by line
function readIdsFromFile(filePath) {
  return new Promise((resolve, reject) => {
    const ids = [];
    const rl = readline.createInterface({
      input: fs.createReadStream(filePath),
      crlfDelay: Infinity,
    });

    rl.on("line", (line) => {
      if (line.trim()) {
        ids.push(line.trim());
      }
    });

    rl.on("close", () => resolve(ids));
    rl.on("error", (err) => reject(err));
  });
}

// Function to save results to a CSV file
function saveToCsv(data, outputPath) {
  const csvContent = [
    "ethscription_id,owner",
    ...data.map(({ ethscription_id, owner }) => `${ethscription_id},${owner}`),
  ].join("\n");

  fs.writeFileSync(outputPath, csvContent);
  console.log(`Results saved to ${outputPath}`);
}

// Main function
async function main() {
  const inputTxt = "./ethscription_ids.txt";
  const outputCsv = "./owners.csv";

  try {
    console.log("Processing input text file...");
    const ethscription_ids = await readIdsFromFile(inputTxt);
    console.log(`Found ${ethscription_ids.length} ethscription IDs.`);

    const results = [];
    for (const ethscription_id of ethscription_ids) {
      const result = await fetchOwner(ethscription_id);
      results.push(result);
    }

    console.log("Saving results to CSV...");
    saveToCsv(results, outputCsv);
  } catch (error) {
    console.error("Error processing file:", error.message);
  }
}

// Run the script
main();
