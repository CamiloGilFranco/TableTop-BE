//importar
import busboy from "busboy";
import { v2 as cloudinary } from "cloudinary";
import { Request, Response, NextFunction } from "express";


cloudinary.config({
  cloud_name: "dmshyev5s",
  api_key: "295928881237629",
  api_secret: "gItinS6-WkwZP45dZnfulJtnino",
});

export const formData = (req: Request, res: Response, next: NextFunction) => {
  let uploadingFile = false;
  let uploadingCount = 0;

  const done = () => {
    if (uploadingFile) return;
    if (uploadingCount > 0) return;

    next();
  };

  const bb = busboy({ headers: req.headers });
  req.body = {};

  bb.on("field", (key, val) => {
    req.body[key] = val;
  });

  bb.on("file", (key, stream) => {
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

  bb.on("finish", () => {
    done();
  });

  req.pipe(bb);
};
