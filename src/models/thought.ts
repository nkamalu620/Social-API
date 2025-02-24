import { Schema, model, Document } from 'mongoose';

interface Ithought extends Document {
  thoughtText: string;
  createdAt: Date;
  username: string;
  reactions: typeof reactionSchema[];
  
}

const thoughtSchema = new Schema<IThought>({
  thoughtText: { type: String, required: true, minlength: 1, maxlength: 280 },
  createdAt: { type: Date, default: Date.now },
  username: {type: String, required: true},
  reactions: [reactionSchema],

}  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  });,

thoughtSchema.virtual('reactionCount').get(function() {
  return this.reaction.length;
});

const Thought = model('Thought', userSchema);


export default Thought;
