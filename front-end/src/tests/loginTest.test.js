import React from 'react';
import { act, cleanup, render, screen, fireEvent } from '@testing-library/react';
import axios from 'axios';
import App from '../App';

const email = 'test@email.com';
const password = 'test-login';
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAZW1haWwuY29tIiwicm9sZSI6ImFkbWluaXN0cmFkb3IiLCJuYW1lIjoidGVzdCIsImlkIjo0LCJpYXQiOjE2MzY4MjUzNjksImV4cCI6MTYzNzY4OTM2OX0.h7BE_gB0b1GF1SpEUKUWe0qgDojDVbFK0RZD1OYTxTI';

const mockPostAxios = () => {
  jest
  .spyOn('axios', post)
  .mockImplementation(() => Promise.resolve({ status: 200, statusText: 'Ok', data: token }))
}