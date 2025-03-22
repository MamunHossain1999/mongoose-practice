
import mongoose from "mongoose";//akane mongoose require korte hob
import app from './app'
const port = 4000;

// database connection
async function bootstrap() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/practice-mongoose");
    console.log(`database connection succsesful`);

    // app.listen button theke top a tule niye aslam
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
      });
   
  } catch (err) {
    console.log('Failed to connect database', err);
  }
}

bootstrap();



