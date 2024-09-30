# Blog-Backend
<pre>

<h4>Install dependencies</h4>
npm init -y
npm install express mongoose dotenv jsonwebtoken bcryptjs body-parser

<h4>To check connectivity in POSTMAN API</h4>

POST http://localhost:5000/api/auth/login
  {
    "username":"sands",
    "password":"123"
}

POST http://localhost:5000/api/auth/login
  {
    "username":"sands",
    "password":"123"
}

POST http://localhost:5000/api/posts
  {
    "title": "My First Blog",
    "content": "This is my first blog post."
}

GET http://localhost:5000/api/posts
</pre>
