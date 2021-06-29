const withAuth = (req, res, next) => {
    if (!req.session.user_id) {  // If user not logged in, redirect to login route
        res.redirect('/login');
    } else {
        next();
    }
};

module.exports = withAuth;