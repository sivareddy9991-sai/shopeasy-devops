  const express = require('express');                                                                                                                                                    
  const app = express();                                                                                                                                                                 
  const PORT = 3000;                                                                                                                                                                     
                                                                                                                                                                                         
  app.use(express.json());                                                                                                                                                               
                                                                                                                                                                                         
  let users = [                                                                                                                                                                          
    { id: 1, name: 'sai', email: 'sai@shopeasy.com', role: 'admin' },                                                                                                                    
    { id: 2, name: 'kumar', email: 'kumar@shopeasy.com', role: 'user' },                                                                                                                 
    { id: 3, name: 'priya', email: 'priya@shopeasy.com', role: 'user' }                                                                                                                  
  ];
                                                                                                                                                                                         
  app.get('/health', (req, res) => {                                                                                                                                                     
    res.status(200).json({                                                                                                                                                               
      status: 'UP',                                                                                                                                                                      
      service: 'user-service',                                                                                                                                                           
      version: '1.0.0',
      port: PORT                                                                                                                                                                             });                                   
  });                                                                                                                                                                                    
                                                                                                                                                                                         
  app.get('/users', (req, res) => {                                                                                                                                                      
    res.status(200).json({                                                                                                                                                               
      success: true,                                                                                                                                                                     
      count: users.length,                                                                                                                                                               
      data: users                                                                                                                                                                        
    });                                                                                                                                                                                    });
                                                                                                                                                                                         
  app.get('/users/:id', (req, res) => {       
    const user = users.find(u => u.id === parseInt(req.params.id));                                                                                                                      
    if (!user) {                                                                                                                                                                         
      return res.status(404).json({ success: false, message: 'User not found' });                                                                                                        
    }                                                                                                                                                                                    
    res.status(200).json({ success: true, data: user });                                                                                                                                 
  });                                                                                                                                                                                    
                                                                                                                                                                                           app.post('/users', (req, res) => {                                                                                                                                                     
    const { name, email, role } = req.body;                                                                                                                                              
    if (!name || !email) {
      return res.status(400).json({ success: false, message: 'Name and email required' });                                                                                               
    }
    const newUser = {                                                                                                                                                                    
      id: users.length + 1,                                                                                                                                                              
      name: name,                                                                                                                                                                        
      email: email,                                                                                                                                                                      
      role: role || 'user'                                                                                                                                                               
    };                                                                                                                                                                                   
    users.push(newUser);                                                                                                                                                                 
    res.status(201).json({ success: true, data: newUser });                                                                                                                              
  });                                                                                                                                                                                    
                                                                                                                                                                                         
  app.listen(PORT, () => {                                                                                                                                                               
    console.log('user-service running on port ' + PORT);                                                                                                                                     console.log('Health: http://localhost:' + PORT + '/health');                                                                                                                         
    console.log('Users:  http://localhost:' + PORT + '/users');                                                                                                                          
  });
                                                                                                                                                                                         
  module.exports = app;
