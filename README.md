# ecomapi-with-mongoDB
 Here the ECOM API is built with the MongoDB with major CRUD operations and User Authentication through JSONwebtoken
 The project is basically constructed with the basic CRUD operations performed in the mongoDB in the Server-Client Model
 <b>Detailed Decription of the project</b>
 <p>The overall project is mainly based on MVC architecture, which keeps the data modelling, storage,logic and routes in seperate folders inside the major features of the API. The MVC architecture enhances the overall efficiency and scalability of the API when large number of users interact simultaneously and put heavy workload in the Server.
 MVC architecture also provide code readability and easier problem tractability. Programming in this technique also follow the single responsibility priciple which means that separate files should be created and worked on for different purposes in the application and hence each of the files creation is associated with division of responsibility among them.
 Along with MVC, the product contains the Repository pattern based MongoDB operations which keeps an additioal level of abstration (through Repository file) between controller and the
 routing files. 
 The src folder contains all the source code of the project which includes three folders namely:-
 <ul>
 <li>config :- (which contians the configuration of the project, here the mongodb.js contians the database configurations needed for the project)</li>
  <li>products : The following files inside this folder are self explanatory:-
  <ul>
  <li>product.controller.js</li>
    <li>product.model.js</li>
      <li>product.repository.js</li>
        <li>product.routes.js</li>
  </ul>
  </li>
   <li>users : The following files inside this folder are self explanatory:-
  <ul>
  <li>users.controller.js</li>
    <li>users.model.js</li>
      <li>users.repository.js</li>
        <li>users.routes.js</li>
  </ul>
  </li>
   <li></li>
 </ul>
  </p>