import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import Form from "./models/form.model.js";
import mongoose from "mongoose";
import cors from "cors";
const app = express();
dotenv.config();
const PORT = process.env.PORT || 4000;
app.use(express.json());
app.use(cors());

app.get("/api/forms", async (req, res) => {
  try {
    const getForm = await Form.find({});
    res
      .status(200)
      .json({ success: true, message: "Fetched All form data", data: getForm });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
});

app.post("/api/forms", async (req, res) => {
  const form = req.body;
  const postForm = new Form(form);
  try {
    await postForm.save();
    res.status(200).json({
      success: true,
      message: "Created all form data",
      data: postForm,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

app.listen(PORT, (req, res) => {
  connectDB();
  console.log(`Server Started at http://localhost:${PORT}`);
});
