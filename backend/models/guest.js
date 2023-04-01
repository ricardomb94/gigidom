import mongoose from 'mongoose'


const guestSchema = mongoose.Schema(
    {
        statut:{
            type:String,
            enum:["présent", "absent"],
            required:true
        },
        firstname:{
            type:String,
            trim: true,
            required:true
        },
        lastname:{
            type:String,
            trim: true,
            required:true
        },
        tel:{
            type:String,
            trim: true,
            required:true,
            unique:true
        },
        email:{
            type:String,
            trim: true,
            unique:true
        },
        baby:{
            type:String,
        },
        teenager:{
            type:String,
        },
        // select:{
        //     type:String,
        //     enum:["baby", "teenager"]
        // },
        created: {
            type: Date,
            default: Date.now()
        },
        
    }
)


const Guest = mongoose.model('Guest', guestSchema)

export default Guest