var path = require("path");
module.exports = function (app) {

    // Basic route that sends the user to the AJAX Page
    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
        // res.send("This is also working");
    });

    // If no matching route is found default to home
    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
};
