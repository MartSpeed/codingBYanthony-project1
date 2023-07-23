# codingBYanthony-project1
building a twitter clone to reinforce full stack skills

# Front-end
* [x] create client folder
* [x] setup index.html
* [x] bring in skeleton CSS
    * http://getskeleton.com/
    * https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css
* [x] create header
* [x] create form
    * [x] name
    * [x] content
    * [x] use full width for both inputs
* [x] listen for form submit
* [x] hide the form
* [x] show loading spinner
* [x] get data from form and log it
    * [x] get user input on the client
    * [x] hide/show elements on the client

# Back-end
* [] create server folder
* [] npm init -y
* [] npm install express morgan
* [] setup index.js
* [] add GET/ route
* [] add POST /spiderSense route
    * [] log out req.body

# Front-end
* [] fetch POST /mews with form data
* [] See the CORS error and revel in this moment
    * []Send user input from the client with fetch to the server

# Back-end
* [] npm install cors
* [] Make sure the server is recieving the data
* [] Add JSON body parser middleware
* [] Validate name and content
    * [] Must be a string
    * [] Cannot be empty
* [] If not valid
    * [] Error code 422
    * [] Invalid mew, must contain name and content
* [] Setup DB Connection
    * [] npm install monk
    * [] connect to db
    * [] create document collection (mews)
* [] If Valid
    * [] Create mew object with
        * [] name, content, created_date
    * [] Insert into DB
    * [] Respond with created mew object
* [] Store data in a database

# Front-end
* [] log out created spiderSense after POST request
* [] show the form
* [] hide loading spinner

# Back-end
* [] GET /spideySense
    * [] respone with spideySense from DB
    * [] retrieve data from a database on the server

# Front-end
* [] fetch GET /spideySense
    * [] iterate over array
    * [] append to each page
    * []  reverse before appending
    * []  show to form
    * [] hide loading spinner
* [] fetch GET /spideySense after creating spideySenses
    * [] retrieve the data froma sever on the client using fetch
    * [] hide/show elements on the client
    * [] add elements to the page on the client

# Back-end
* [] npm-install bad-words
    * [] use filter before inserting into DB
* [] npm install express-rate-limit
    * [] limit 1 request to every 15 seconds

# Deploy
* [] deploy the server with now
    * [] setup environment variables
        * [] database connection
            * [] process.env.MYSQL_URI
        * [] show mlab
    * [] dploy with environment variable
        * [] now -e 