import jwt from "jsonwebtoken";
export const verifyToken = async (req, res, next) => {
  try {
    let token = req.headers("Authorization");

    if (!token) {
      return res.status(403).json("Access Denied");
    }

    if (token.startsWith("Bearer ")) {
      token = token.slice(7, token.lenght).trimLeft();
    }

    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    next();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
