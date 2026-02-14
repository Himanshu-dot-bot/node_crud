import Person from "./models/person.js";
import { Strategy as LocalStrategy } from 'passport-local';

import passport from "passport";
import pkg from 'passport';
const { session } = pkg;








const localAuthMiddleware = passport.authenticate('local',{session:false})
passport.use(new LocalStrategy(async(userName,password,done)=>{
  try {
    console.log('Received login credentials:',userName,password)
    const user = await Person.findOne({username:userName});
    if(!user){
      return done(null,false,{message:"User not found"});
    }
    const isPasswordMatched = user.password === password ? true : false;
    if(isPasswordMatched){
      return done(null,user)}
      else{
        return done(null,false,{message:"Incorrect password"});
    }
  } catch (error) {
    return done(error)
    
  }

}))
export default localAuthMiddleware;