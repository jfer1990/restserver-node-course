import {response} from 'express'; 
import bcryptjs from 'bcryptjs';
import User from '../models/user.js';

const getUser = (req,res = response)=>{
    const query = req.query; 
    res.json({
        msg:'get API - controller',
        query
    })

}

const postUser = async(req,res = response)=>{
    try{
        const {name, email, password, rol} = req.body; 
        const user = new User({name, email, password, rol}); 
        const salt = bcryptjs.genSaltSync(10); 
        user.password = bcryptjs.hashSync( password , salt); 

        // //validar si el correo existe
        // const existEmail = await User.findOne({email:email}).exec(); 
        // console.log(email); 
        // console.log(existEmail); 
        // if(existEmail) return res.status(400).json({msg:'el correo ya está registrado'}); 

        await user.save(); 
        res.json({
            msg:'post API user - controller', 
            user
        }); 
    }
    catch(e){

    }
    

}

const putUser = async(req,res = response)=>{
    const {id} = req.params; 
    const {password, google, email, ...rest} = req.body;

    if(password){
        const salt = bcryptjs.genSaltSync(10); 
        rest.password = bcryptjs.hashSync( password , salt); 
    }

    const user = await User.findByIdAndUpdate(id, rest).exec(); 

    res.json({
        msg:'put API user - controller', 
        user
    })

}


const deleteUser = (req,res = response)=>{
    res.json({
        msg:'delete API user - controller'
    })

}

export {getUser, postUser, putUser, deleteUser}; 