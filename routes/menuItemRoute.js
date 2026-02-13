import express from 'express';
const router = express.Router();
import MenuItem from '../models/menuItem.js';

router.post('/', async (req, res) => {
    try {
        const data = req.body;
        const newMenuItem = new MenuItem(data);
        const response = await newMenuItem.save();
        console.log("Data saved",response);
        res.status(200).json(response); 
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

router.get('/',async(req,res)=>{
    
    try {
        const data = await MenuItem.find();
        res.status(200).json(data);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
})
router.get('/:taste',async(req,res)=>{
    try {
        const tasteType = req.params.taste;
        if (tasteType === 'sweet' || tasteType === 'sour' || tasteType === 'spicy') {
            const data = await MenuItem.find({ taste: tasteType });
            res.status(200).json(data);
        }
        else{
            res.status(404).json({ error: "Invalid taste type" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
})

router.put('/:id',async(req,res)=>{
    const personId = req.params.id;
    const updatedPersonId  = req.body;
    try {
        const response = await MenuItem.findByIdAndUpdate(personId,updatedPersonId,{new:true,runValidators:true});
        res.status(200).json(response);
        if(!response){
            res.status(404).json({ error: " MenuItem not found" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal Server Error" });
    }

})
router.delete('/:id',async(req,res)=>{
    const personId = req.params.id;
    try {
        const response = await MenuItem.findByIdAndDelete(personId);
        if(!response){
            res.status(404).json({ error: " MenuItem not found" });
        }
        console.log('data deleted');
        res.status(200).json({ message: "MenuItem deleted successfully" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal Server Error" });
        
    }
})
export default router;

 //menuroutes hii i am menu routes