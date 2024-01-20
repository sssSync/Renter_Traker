// middleware/authMiddleware.js
const jwt = require('jsonwebtoken');
const User = require('../Model/user');

const authenticateToken = async (req, res, next) => {
  const cookieHeader = req.headers.cookie;

  if (!cookieHeader) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  // Split the cookie string
  const cookiesArray = cookieHeader.split(';');

  // Extract the token
  let token;
  for (const cookie of cookiesArray) {
    const trimmedCookie = cookie.trim();
    
    // Check if it's the token cookie
    if (trimmedCookie.startsWith('authToken=')) {
      token = trimmedCookie.substring('authToken='.length);
      break;
    }
  }

  if (!token) {
    return res.status(401).json({ error: 'Token not found in cookie' });
  }

  try {
    const decodedToken = jwt.verify(token, 'hbhbuhxbhSBBXIASHH');
    const user = await User.findById(decodedToken.userId);

    if (!user) {
      return res.status(403).json({ error: 'User not found' });
    }

    req.user = user;
    next();
  } catch (error) {
    return res.status(403).json({ error: 'Invalid token' });
  }
};

module.exports = authenticateToken;
