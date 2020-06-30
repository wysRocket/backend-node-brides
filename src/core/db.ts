import mongoose from "mongoose";

mongoose.set("useUnifiedTopology", true);

mongoose.connect(
  "mongodb+srv://wysmyfree:3U0BxxXTac$e@brides-uszxx.azure.mongodb.net/chat",
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    //  useUnifiedTopology: true
  }
);
