import {Router} from 'express';
import PostController from '../controllers/posts.controller';

const router = Router();

router.get('/hello', (req, res) => {
    console.log('Hello');
});

//posts
router.get('/posts', PostController.list);
router.post('/posts', PostController.create);
router.get('/posts/:id', PostController.details);
export default router;