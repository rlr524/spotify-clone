export default function handler(req, res) {
  res.status(200).json({
    name: "Madison",
    age: "18",
    major: "Computer Science",
  });
}
