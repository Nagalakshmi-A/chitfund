const chitSubscriber = require('../model/subscriber')

//add and update subscribers

const addsubscriber = async(req,res)=>{
    const payload = req.body;
    const {id} = req.params;
    try{
        if(id){
            const updateSub = await chitSubscriber.findByIdAndUpdate(
                {_id: id},
                {$set: payload},
                {new: true}
            )
            if(!updateSub){
                return res.status(400).send(error)
            }
            return res.status(200).json({updatedDetails:updateSub, message:'updated successfully'})
        }else{
            const newSub = await chitSubscriber.create(payload)
            return res.status(200).json({newSubscriber: newSub, message:'Added New subscriber successfully'})
        }
    }catch(error){
        return res.status(400).send(error)
    }
}

// get all subscriber

const getAllSub = async(req,res)=>{
    try{
        const allSubDetails = await chitSubscriber.find()
        return res.status(200).json({AllSubscriber:allSubDetails, message:'get all subscribers successfully'})
    }catch(error){
        return res.status(400).send(error)
    }
}

module.exports = {
    addsubscriber,
    getAllSub

}