# Ethscription Owner Fetcher

This project is a Node.js script to fetch the owners of ethscription IDs from a specified API and save the results into a CSV file. It reads a list of ethscription IDs from a text file, queries the API for ownership information, and outputs the results in a structured CSV format.

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
   git clone <repository-url>
   cd <repository-name>

2. Install dependencies:
   ```bash
   npm install
3. Create an input text file named `ethscription_ids.txt` in the root directory. Add your ethscription Ids, one per line.
4. Run the script
    ```bash
   node fetch_owners.js
6. The results will be saved in a file named `owners.csv` in the root directory.
