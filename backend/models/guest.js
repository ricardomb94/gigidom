import mongoose from 'mongoose'


const guestSchema = mongoose.Schema(
    {
        firstname:{
            type:String,
            required:true
        },
        tel:{
            type:String,
            required:true,
        },
        baby:{
            type:Number,
            default:0
        },
        teenager:{
            type:Number,
            default:0
        },
        status:{
            type:String,
            enum:["Je serai présent", "Je serai absent"]
        },
        // select:{
        //     type:String,
        //     enum:["baby", "teenager"]
        // },
        created: {
            type: Date,
            default: Date.now
        },
        
    }
)


const Guest = mongoose.model('Guest', guestSchema)

export default Guest