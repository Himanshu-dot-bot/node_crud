import express from 'express';
const router = express.Router();
import Person from '../models/person.js';



router.post('/', async (req, res) => {
    try {
        const data = req.body;
        const newPerson = new Person(data);
        const response = await newPerson.save();
        console.log("Data saved",response);
        res.status(200).json(response);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

router.get('/:workType', async (req, res) => {
    try {
        const workType = req.params.workType; 

        if (workType === 'chef' || workType === 'waiter' || workType === 'manager') {
            const response = await Person.find({ work: workType });
            console.log("Data fetched");
            res.status(200).json(response);
        } else {
            
            res.status(404).json({ error: "Invalid work type" });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

router.get('/',async(req,res)=>{
    
    try {
        const data = await Person.find();
        res.status(200).json(data);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
})
router.put('/:id',async(req,res)=>{
    const personId = req.params.id;
    const updatedPersonId  = req.body;
    try {
        const response = await Person.findByIdAndUpdate(personId,updatedPersonId,{new:true,runValidators:true});
        res.status(200).json(response);
        if(!response){
            res.status(404).json({ error: " Person not found" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal Server Error" });
    }

})
router.delete('/:id',async(req,res)=>{
    const personId = req.params.id;
    try {
        const response = await Person.findByIdAndDelete(personId);
        if(!response){
            res.status(404).json({ error: " Person not found" });
        }
        console.log('data deleted');
        res.status(200).json({ message: "Person deleted successfully" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal Server Error" });
        
    }
})
export default router;