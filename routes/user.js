import {Router} from 'express'; 
import { getUser ,  postUser, putUser, deleteUser} from '../controllers/users.js';

const router = Router(); 

router.get('/', getUser);

router.put('/:id',putUser); 

router.post('/',postUser);

router.delete('/',deleteUser);

export default router; 