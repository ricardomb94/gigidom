import mongoose from 'mongoose'


const guestSchema = mongoose.Schema(
    {
        name:{
            firstname: String,
            lastname: String,
            required:true
        },
        mobile:{
            type:Number,
            required:true,
        },
        baby:{
            type:String,
            default:0
        },
        teenager:{
            type:String,
            default:0
        },
        acceptedInvitation:{
            type:boolean,
            default:true
        },
        refusedInvitation:{
            type:boolean,
            default:true
        },
        created: {
            type: Date,
            default: Date.now
        },
        
    }
)


const Guests = mongoose.model('Guests', guestSchema)

export default Guests