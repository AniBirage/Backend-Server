# Slidely Task 2 - Backend Server

## Overview
This is an Express server built with TypeScript that handles submissions for the Slidely Task 2 Desktop App. It uses a JSON file as a database to store submissions.

## Features
- **Ping Endpoint**: A health check endpoint.
- **Submit Endpoint**: Save a new submission.
- **Read Endpoint**: Retrieve a submission by index.

## Endpoints
- **GET /ping**: Returns `true`.
- **POST /submit**: Accepts `name`, `email`, `phone`, `github_link`, and `stopwatch_time` as parameters.
- **GET /read**: Accepts an `index` query parameter to retrieve the (index+1)th submission.

## Database Structure
Submissions are stored in a `db.json` file. Each submission has the following structure:
```json
{
  "name": "John Doe",
  "email": "johndoe@gmail.com",
  "phone": "9876543210",
  "github_link": "https://github.com/john_doe/my_slidely_task",
  "stopwatch_time": "00:01:19"
}
```
1. Installation
- **Clone the repository**:
```bash
git clone https://github.com/AniBirage/Backend-Server.git
```
2. Navigate to the src folder in the project directory:
```bash
cd Slidely_Express/Slidely_Express/src
```
3. Install dependencies:
```bash
npm install
```
4. Run the server:
```bash
npm start
```
## Usage
- **Ping the server**:
```bash
curl http://localhost:3000/ping
```
- **Submit a new entry**:
```bash
curl -X POST http://localhost:3000/submit -d '{"name":"John Doe","email":"johndoe@gmail.com","phone":"9876543210","github_link":"https://github.com/john_doe/my_slidely_task","stopwatch_time":"00:01:19"}' -H "Content-Type: application/json"
```
- **Read a submission**:
```bash
curl http://localhost:3000/read?index=0
```
