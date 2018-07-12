//-------------- MODELS -------------------
const Achv = require(__basedir + "db/models/achieve");
const User = require(__basedir + "db/models/user");





module.exports = {


    getAllAchievements: (req, res) => {
        let clientAchvArr = [];
        let tempObj;

        User.findOne({ email:"low@low.com" })
        .then(user => {


            Achv.find().then((achvData) => {

      
      
                // console.log(achvData);
                achvData.forEach((data) => {
                  tempObj = {
                    id: data.id,
                    name: data.name,
                    desc: data.desc,
                    unlocked: false
      
                  }
      
                  if (user.achievements.includes(data.id)) {
                    tempObj.unlocked = true;
                  }
                clientAchvArr.push(tempObj);

                  console.log(`in loop
                  
                  
                  
                  ${clientAchvArr}
                
                
                
                
                
                `);
      
                });
      
      
                console.log(`out loop
        
        
                ${clientAchvArr}
            
            
            
            
            `);
        
        
                return res.json(clientAchvArr)
            
              });

        });

      

    },

    getOneAchievement: (req, res) => {


        


    }



};