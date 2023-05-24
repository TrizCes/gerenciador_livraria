import mongoose from 'mongoose';
mongoose.set('strictQuery', false);


mongoose.connect('mongodb+srv://biaceschini:Senha03%40@cluster0.xqdoh3f.mongodb.net/?retryWrites=true&w=majority');

let db = mongoose.connection;

export default db;
