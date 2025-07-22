import cors from 'cors';
import express from 'express';

const corsOptions = {
  origin: ['https://authentication-system-tau.vercel.app', 'http://localhost:5173'],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  credentials: true,
};

const setMiddleware = (app) => {
  app.use(cors(corsOptions));

  // 🔧 Explicitly handle preflight requests
  app.options('*', cors(corsOptions));

  app.use(express.json());
};

export default setMiddleware;
