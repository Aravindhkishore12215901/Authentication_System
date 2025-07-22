import cors from 'cors';
import express from 'express';

const setMiddleware = (app) => {
  app.use(cors({
  origin: ['https://authentication-system-tau.vercel.app', 'http://localhost:5173'],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  credentials: true,
  }));
  
  app.use(express.json());
};

export default setMiddleware;
