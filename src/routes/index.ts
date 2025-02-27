import { Router } from 'express';
const router = Router();
import userRoutes from './userRoutes'; // Import the user routes

router.use('/api/users', userRoutes); // Use the user routes

router.use((_req, res) => {
  return res.send('Wrong route!');
});

export default router;