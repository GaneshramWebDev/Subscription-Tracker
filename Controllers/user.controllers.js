import User from "../Models/user.model.js";
import mongoose from "mongoose";

export const getAllUsers=async(req,res,next)=>{

    try {
        
        const users=await User.find({});


        res.status(200).json({
            success:true,
            message:'users fetched successfully',
            data:users,
        })
    } catch (error) {

        next(error);
    }
}



export const getUser=async(req,res,next)=>{

    try {
        
        const user=await User.findById(req.params.id).select('-password');

        if(!user){
            const error=new error('user not found');
            error.statusCode=404;
            throw error;
        }


        res.status(200).json({
            success:true,
            message:'user fetched successfully',
            data:user,
        })
    } catch (error) {

        next(error);
    }
}