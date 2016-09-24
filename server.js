var express = require('express');//used to create the webserver
var morgan = require('morgan');//help us output log of servers so that we know the reqsts that come to server and also know hw we respond
var path = require('path');


var app = express();
app.use(morgan('combined'));


var articles={
    
 'article-one':{
  title:"Article-one",
  heading:"Article-one",
  date: "September 20th 2016",
  content: `
  <p>
                   This is the content for my first article!This is the content for my first article!This is the content for my first article!This is the content for my first article!This is the content for my first article!This is the content for my first article!This is the content for my first article!This is the content for my first article!This is the content for my first article!This is the content for my first article!This is the content for my first article!This is the content for my first article!This is the content for my first article!
                </p>
                <p>
                    This is the content for my first article!This is the content for my first article!This is the content for my first article!This is the content for my first article!This is the content for my first article!This is the content for my first article!This is the content for my first article!This is the content for my first article!This is the content for my first article!This is the content for my first article!This is the content for my first article!This is the content for my first article!This is the content for my first article!
                </p>
                <p>
                 This is the content for my first article!This is the content for my first article!This is the content for my first article!This is the content for my first article!This is the content for my first article!This is the content for my first article!This is the content for my first article!This is the content for my first article!This is the content for my first article!This is the content for my first article!This is the content for my first article!This is the content for my first article!This is the content for my first article!
                </p> `
},
 'article-two':{
  title:"Article-Two",
  heading:"Article-Two",
  date: "April 20th 2016",
  content: `
                    <p>
                      Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla 
                    </p>
                   <p>
                      Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla 
                    </p>
                    <p>
                      Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla  Blabla 
                    </p> `
},
 'article-three': {
  title:"Article-Three",
  heading:"Article-Three",
  date: "August 20th 2016",
  content: `
   <p>
                    Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one 
                    </p>
                   <p>
                    Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one 
                    </p>
                   <p>
                    Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one Third one 
                    </p> `
}
    
};


 function createTemplate(data){
     var title=data.title;
     var date=data.date;
     var heading=data.heading;
     var content=data.content;
 
var htmlTemplate=`
<html>
    <head>
        <title>
            ${title}
        </title>
         <link href="/ui/style.css" rel="stylesheet" />
         <meta name="veiwport" content="width-device-width, initial-scale=1">
       
    </head>
    <body>
        <div class="container">
                <div>
                      <a href="/">Home</a>
                </div>
                <hr/>
                <h3>
                   ${heading}
                </h3>
                <div>
                   ${date}
                </div>
                <div>
               ${content}
                </div>
        </div>
    </body>
</html>

`;
return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
var counter=0;
app.get('/counter', function (req, res) {
   counter=counter+1;
   res.send(counter.toString());
});

app.get('/:articleName', function(req,res){
var articleName=req.params.articleName;
res.send(createTemplate(articles[articleName]));
});



app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});


app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
