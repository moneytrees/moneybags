const inst = new mongoose.Schema({
    
    type: String,
    
    INST:
        [
            {id: String,
             name: String   
            }
        ],

    required: true

});