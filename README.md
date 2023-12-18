## USED TOOLS

- **Frontend:** React
- **Backend:** Express JS
- **Database:** MongoDB

### How To Use It Locally

1. Clone the project by running: `git clone https://github.com/mayakilbertus/hotel-clicks.git`
2. Install all the dependencies with `npm install` in both `hotel-clicks-client` and `hotel-clicks-server` directories.
3. Run `seed.js` once in `hotel-clicks-server/db/bin/seed.js` to set up MongoDB.
4. Create two `.env` files in the root of the server and client folders:

   - **Client:**

     - `VITE_API_URL=http://localhost:5005`
     - `VITE_API_KEY=thisisasecretekey`

   - **Server:**
     - `API_KEY=thisisasecretekey`

5. To run the application, use `npm run dev` in server and client folder.
