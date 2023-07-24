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
* [x] create server folder
* [x] npm init -y
* [x] npm install express morgan
* [x] setup index.js
* [x] add GET/ route
* [x] add POST /spiderSense route
    * [x] log out req.body

# Front-end
* [x] fetch POST /mews with form data
* [x] See the CORS error and revel in this moment
    * [x]Send user input from the client with fetch to the server

# Back-end
* [x] npm install cors
* [x] Make sure the server is recieving the data
* [x] Add JSON body parser middleware
* [x] Validate name and content
    * [x] Must be a string
    * [x] Cannot be empty
* [x] If not valid
    * [x] Error code 422
    * [x] Invalid mew, must contain name and content
* [x] Setup DB Connection
    * [x] npm install monk
    * [x] connect to db
    * [x] create document collection (mews)
* [x] If Valid
    * [x] Create mew object with
        * [x] name, content, created_date
    * [x] Insert into DB
    * [x] Respond with created mew object
* [x] Store data in a database

# Front-end
* [x] log out created spiderSense after POST request
* [x] show the form
* [x] hide loading spinner

# Back-end
* [x] GET /spideySense
    * [x] respone with spideySense from DB
    * [x] retrieve data from a database on the server

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