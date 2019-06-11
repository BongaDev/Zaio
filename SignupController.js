module.exports = function(app){
    var bodyParser = require('body-parser');
    var urlencodedParser = bodyParser.urlencoded({extended: false}); 
    var arr = [];
    
    //var moredata = [ {name:'default'},{surname:'default1'},{age:1},{degree:'unknown'},{favouritecourse:'unknow'}];
//Get
    app.get('/', function(req,res){
        res.render('login',{ user: req.query});
    });

    app.get('/Profile', function(req,res){
        
        res.render('Profile', {user: req.query });
        
    });

    app.get('/index', function(req,res){

        res.render('index', {qs: req.query });

    });

    app.get('/Edit', function(req,res){
       console.log(res);
        res.render('Profile', {user: req.query});

    });

//Post
    app.post('/index', urlencodedParser, function(req,res){
        
        //res.send(req.body);
        res.render('login', {user: req.body});
    });//this one redirects

    app.post('/login', urlencodedParser, function(req,res){
        //console.log(req.body);
        for(var items in req.body){
            //console.log(req.body[items]);
            arr.push(req.body[items]);
        }
        console.log(arr);
        //var arr =[];
        //console.log(arr[2]);
        //console.log(items.password);
        //var newemail = arr[2];
    
        //res.send(req.body);
        res.render('login', {data:arr});

    });
    
    app.post('/validate', urlencodedParser, function(req,res){
        
        var arr2 = [];
        for(var item in req.body){
            //console.log(req.body[items]);
            arr2.push(req.body[item]);
        }
        console.log(arr2);

        if(arr[2] == arr2[0] && arr[3] == arr2[1])
        {
            var newemail = arr[2]
        }
        
        //res.send(req.body);
        res.render('login', {data: req.body, newdata : newemail});
    });

    app.post('/Edit', urlencodedParser, function(req,res){
        
        console.log(res.body);
    
        res.render('Profile', {user: req.body});
    });//t

    app.post('/Profile',urlencodedParser, function(req,res){
        console.log(req.body);
        
        console.log(res.body);
        res.render('Profile', {user: req.body});
    });
}
