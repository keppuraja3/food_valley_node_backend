// AuthMiddleware
const { LocalStorage } = require('node-localstorage');

// Set the path for local storage
const localStorage = new LocalStorage('./scratch');


const jwt = require('jsonwebtoken');
const SECRET_KEY = 'food-valley-user-token-by-keppuraja'

function verifyToken(req, res, next) {
    const token = localStorage.getItem('token');
    if (!token)  // If the token is not found "Access is Denied"
        return res.status(401).json({ error: 'Access denied' });

    try {  // Verifying the key of the user
        const decoded = jwt.verify(token, SECRET_KEY);
        if(decoded.role=='admin'){
            return res.status.json({status: true, role: 'admin'})
        }
        next();
    } 
    catch (error) {
        res.status(401).json({ error: 'Invalid token' });
    }
};

module.exports = verifyToken;