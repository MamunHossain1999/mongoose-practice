import express, { Application} from "express"; // Correctly importing Request and Response types
import cors from "cors";

// Aplication routes
import userRoutes from './app/modules/user/user.route'

const app: Application = express();

// Using CORS middleware
app.use(cors());

// parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.get('/api/v1/user', userRoutes)
app.use('/api/v1/user',userRoutes )


export default app;
