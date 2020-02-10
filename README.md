# Shopping Cart (Project II)

Create a Shopping Cart web applicaion with UI template engine, Node.js, Sequelize, ORM, sqlite3 schema and handle routes with Express, applying MVC Pattern then deploy to heroku.

- [Shopping Cart-Web-Application: Heroku Demo](https://safe-lowlands-47322.herokuapp.com/)

- [Applied to My Reponsive Portfolio](https://eunsoojung.github.io/Responsive-Portfolio/portfolio.html)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

```bash
# Install packages
npm i body-parser express express-paginate express-ssion forms morgan nunjuncks sequelize sequelize-cli sqlite3 uuid

# Run
node server.js or npm start (using nodemon)
```

## Preview

[![Shopping Cart](https://github.com/EunsooJung/Shopping-Cart/blob/master/public/images/Materials%20E-Shop-Demo.gif)](https://github.com/EunsooJung/Shopping-Cart/blob/master/public/images/Materials%20E-Shop-Demo.gif)

## Usage

### Basic Usage

To get Shopping Cart, after downloading, you need to make sure Git Bash terminal open and looking at the correct folder. When you are within the correct location, you may type the following commands to ask her for information:

- node server.js

### Guidelines:

- Proceeds as follows:

To use this applicaion, Clone the applicaion to your local git repository or directory:

- In your terminal, git clone https://github.com/EunsooJung/Shopping-Cart.git

To start:

- You have to install npm packages depend on my package.json file: "npm install"
- Open your terminal then "node app.js"

### Code Snippet

- Project structure

  [![Shopping Cart-Project-Structure](https://github.com/EunsooJung/Shopping-Cart/blob/master/public/images/Shopping-Cart-ProjectStructure.png)]

- Database ERD

  [![Shopping Cart-ERD](https://github.com/EunsooJung/Shopping-Cart/blob/master/public/images/Shopping-Cart-ERD.png)]

- Source Code Check point

1. folder "models": It provides sequelize Schema model

```javascript
'use strict';
module.exports = (sequelize, DataTypes) => {
  const Customer = sequelize.define(
    'Customer',
    {
      personId: DataTypes.INTEGER,
      isDeleted: DataTypes.BOOLEAN
    },
    {}
  );
  Customer.associate = function(models) {
    Customer.belongsTo(models.Person);
    Customer.belongsToMany(models.Address, { through: models.CustomerAddress });
  };
  return Customer;
};
```

2. folder "public": It provides images and css files

3. Controller layer: Server-Side routes

- Create all of this Shopping Cart web application's routes (maps) using a exppress router.

```javascript
/* Get all products */
var getPagedProducts = function(req, res) {
  if (req.method === 'POST') {
    cartService.addToCart(req);
    res.redirect(req.body.originalUrl);
  } else {
    fetchPaginatedProducts(req, res);
  }
};
```

4. app.js:

   - Setup Shopping Cart web applicaion's environments (npm package dependencies)
   - Import Register the Routers to access.

5. forms: It provides forms to checkout page

6. migrations: It provides Database schema migration.

7. views: View layer to represent user interface.

8. services: It provides services to controller.

```javascript
// View Engine SetUp
nunjucks.configure(
  [
    'views',
    'views/cataloguedm',
    'views/cataloguedm/partials',
    'views/cartdm',
    'views/cartdm/partials',
    'views/checkoutdm'
  ],
  {
    autoescape: true,
    express: app
  }
);
...
// Make the cart parameters available to the templates
app.use(contextProcessor.localContext);

routerRegister(app);
```

## Built With

- [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Node.js](https://nodejs.org/en/)
- [MySQL](https://www.npmjs.com/package/mysql)
- [MVC Patterns](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller)
- [cookieParser](https://www.npmjs.com/package/cookie-parser)
  - Parse Cookie header and populate req.cookies with an object keyed by the cookie names. Optionally you may enable signed cookie support by passing a secret string, which assigns req.secret so it may be used by other middleware.
- [body-parser](https://www.npmjs.com/package/body-parser)
  - Node.js body parsing middleware.
  - Parse incoming request bodies in a middleware before your handlers, available under the req.body property.
- [nunjucks](https://mozilla.github.io/nunjucks/)
  - Nunjucks is a full featured templating engine for javascript. It is heavily inspired by jinja2.
- [express-paginate](https://www.npmjs.com/package/express-paginate)
  - Node.js pagination middleware and view helpers.
- [sqlite3](https://sqlite.org/index.html)
  - SQLite is a C-language library that implements a small, fast, self-contained, high-reliability, full-featured, SQL database engine.

## Authors

- **Michael(Eunsoo)Jung**

* [Shopping Cart-Web-Application: Heroku Demo](https://safe-lowlands-47322.herokuapp.com/)
* [My Portfolio](https://eunsoojung.github.io/Responsive-Portfolio/portfolio.html)
* [Link to Shopping Cart-Web-Application Github](https://github.com/EunsooJung/Shopping-Cart.git)
* [Link to LinkedIn](www.linkedin.com/in/eun-soo-jung/)

## License

This project is licensed under the MIT License
