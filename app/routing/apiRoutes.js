var friends = require("../data/friends");

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function (req, res) {
        
        var newFriend = req.body;
        console.log(newFriend);
        //res.json(true);

        // friends.push(req.body);
        
        // for (var i = 0; i < friends.length; i++) {
        //     var matchCompare = [];
            // console.log(friends[i]);    
            // console.log(friends[i].scores);
            // for (var x = 0; x < newFriend.scores.length; x++) {
            //     matchCompare.push(math.abs(parseInt(newFriend.scores[x]) - parseInt(friends[i].scores[x])));
            // }
        //     console.log("For Friend: " + friends[i].name);
        //     console.log(matchCompare);
        //     matchCompare.reduce(add, 0);
        //     function add(a, b) {
        //         return a + b;
        //     }
        //     console.log(matchCompare);
        res.json(friends[1])


            
        // }


        // res.json(match);

 
    });

    
};
