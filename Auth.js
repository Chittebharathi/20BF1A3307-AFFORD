import React, { useState } from 'react';
import axios from 'axios';

const Auth = () => {
  const [token, setToken] = useState('');

  const handleAuth = async () => {
    try {
      const response = await axios.post('http://104.211.219.98/train/auth', {
        "companyName": "Train",
	"clientID": "6a7b1311-a9e8-4fa0-adad-7775ab12b544",
	"clientSecret": "OUBuSLfMQxiKGQfg",
	"ownerName": "BHARATHI",
	"ownerEmail": "chittebharathi1011@gmail.com",
	"rollNo": "7"

      });
      
      console.log(response.data);
      setToken(response.data.access_token);
    } catch (error) {
      console.error(error);
    }
  };

