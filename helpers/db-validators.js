import Role from '../models/rol.js'; 
import User from '../models/user.js'; 


const isValidRole = async (rol = '')=>{
    const existeRol = await Role.findOne( {rol} );
    if(!existeRol){
        throw new Error(`El rol ${rol} no está registrado en la base de datos`)
    } 
}

const existEmail = async(email = '')=>{
    const existEmail = await User.findOne({email:email}).exec(); 
    if(existEmail)  throw new Error(`el correo ${email} ya está registrado`)
    
}

export {isValidRole, existEmail}; 