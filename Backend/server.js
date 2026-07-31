const app = require("./app");
const connectDB = require("./config/db");

const PORT = Number(process.env.PORT) || 3000;

(async () => {
  try {
    await connectDB();

    const server = app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
    server.on("error", (error) => {
      console.log("Error::", error);
    });
  } catch (error) {
    console.log("Error:", error);
  }
})();
