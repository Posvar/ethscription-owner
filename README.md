# Ethscription Owner Fetcher

This project is a Node.js script to fetch the owners of ethscription IDs from the Ordex marketplace API and save the results into a CSV file. If an ethscription is owned by the ESCROW account, it will instead query the underlying owner (the wallet that escrowed the ethscription). It reads a list of ethscription IDs from a text file, queries the API for ownership information, and outputs the results in a structured CSV format.

## Features
- Reads ethscription IDs from a text file.
- Queries the API for each ID to fetch the owner details.
- Handles errors gracefully and logs unsuccessful fetch attempts.
- Outputs the results in a CSV file for easy analysis.

## Requirements
- Node.js (v14 or higher)
- A working internet connection
- Text file containing ethscription IDs (one per line)

## Setup

1. Clone this repository:
   ```bash
   git clone https://github.com/Posvar/ethscription-owner
   cd ethscription-owner

2. Install dependencies:
   ```bash
   npm install
3. Open the text file named `ethscription_ids.txt` and replace the placeholder ethscription_ids with the ids for your collection (one per line, no header). Save text file back to root (keep filename).
4. Run the script
    ```bash
   node fetch_owners.js
6. The results will be saved in a file named `owners.csv` in the root directory.
