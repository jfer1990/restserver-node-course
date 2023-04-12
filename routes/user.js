import {Router} from 'express'; 
import { getUser ,  postUser, putUser, deleteUser} from '../controllers/users.js';
import { check } from 'express-validator';
import validarCampos from '../middlewares/validar-campos.js'
import { isValidRole, existEmail} from '../helpers/db-validators.js';

const router = Router(); 

router.get('/', getUser);

router.put('/:id',putUser); 

router.post('/',[
    check('email','not valid email format').isEmail(),
    check('name', 'name field is mandatory').not().isEmpty(),
    check('password', 'Must have more than 6 words').isLength( {min:6} ),

    // check('rol', 'Must be ADMIN_ROLE or USER_ROLE').isIn(['ADMIN_ROLE', 'USER_ROLE']),
    check('rol').custom( isValidRole ), 
    check('email').custom(existEmail),
    validarCampos
],postUser);

router.delete('/',deleteUser);

export default router; 