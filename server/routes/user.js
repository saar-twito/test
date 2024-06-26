import { Router } from "express";

const router = Router();

const users = [
  { _id: 1, name: "John Doe", age: 25 },
  { _id: 2, name: "Jane Doe", age: 24 },
];

router.get("/", (req, res) => {
  res.send(users);
})

export default router;