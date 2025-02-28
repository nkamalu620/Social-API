import { Router } from 'express';
const router = Router();
import userRoutes from './api/userRoutes'; // Import the user routes
import thoughtsRoutes from './api/thoughtsRoutes'; // Import the thoughts routes

router.use('/api/users', userRoutes); // Use the user routes
router.use('/api/thoughts', thoughtsRoutes); // Use the thoughts routes

router.use((_req, res) => {
  return res.send('Wrong route!');
});

export default router;