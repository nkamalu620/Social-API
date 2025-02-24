import { Schema, model, Document } from 'mongoose';

interface Ithought extends Document {
  thoughtText: string;
  createdAt: Date;
  username: string;
  reactions: Reaction[];
  
}

const userSchema = new Schema<IUser>({
  thoughtText: { type: String, required: true, minlength: 1, maxlength: 280 },
  createdAt: { type: Date, default: Date.now },
  username: {type: String, required: true},
  reactions: [reactionSchema],

}),

thoughtSchema.virtual('reactionCount').get(function() {
  return this.reaction.length;
});

const Thought = model('Thought', userSchema);


export default Thought;
