import mongoose from 'mongoose'


const guestSchema = mongoose.Schema(
    {
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
        baby:{
            type:Number,
            default:0
        },
        teenager:{
            type:Number,
            default:0
        },
        statut:{
            type:String,
            enum:["présent", "absent"],
            required:true
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