import {response} from 'express'; 

const getUser = (req,res = response)=>{
    const query = req.query; 
    res.json({
        msg:'get API - controller',
        query
    })

}

const postUser = (req,res = response)=>{
    const {name} = req.body; 
    res.json({
        msg:'post API user - controller', 
        name
    })

}

const putUser = (req,res = response)=>{
    const {id} = req.params; 
    res.json({
        msg:'put API user - controller', 
        id
    })

}


const deleteUser = (req,res = response)=>{
    res.json({
        msg:'delete API user - controller'
    })

}

export {getUser, postUser, putUser, deleteUser}; 