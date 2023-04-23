require("dotenv").config();
import busboy from "busboy";
import { v2 as cloudinary } from "cloudinary";
import { Request, Response, NextFunction } from "express";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const formData = (req: Request, res: Response, next: NextFunction) => {
  let uploadingFile = false;
  let uploadingCount = 0;

  const done = () => {
    if (uploadingFile) return;
    if (uploadingCount) return;

    next();
  };

  const { headers } = req;
  const busBoyStream = busboy({ headers });
  req.body = {};

  busBoyStream.on("field", (key, val) => {
    req.body[key] = val;
  });

  busBoyStream.on("file", (key, stream) => {
    uploadingFile = true;
    uploadingCount++;
    const cloud = cloudinary.uploader.upload_stream(
      { upload_preset: "tabletop27-preset" },
      (err, res) => {
        if (err) throw new Error("Something error wrong!");

        req.body[key] = res?.secure_url;
        uploadingFile = false;
        uploadingCount--;
        done();
      }
    );
    stream.on("data", (data) => {
      cloud.write(data);
    });
    stream.on("end", () => {
      cloud.end();
    });
  });

  busBoyStream.on("finish", () => {
    done();
  });

  req.pipe(busBoyStream);
};
