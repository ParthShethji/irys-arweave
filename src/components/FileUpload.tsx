import React, { useState } from "react";
import { WebIrys } from "@irys/sdk";

interface FileUploadProps {
  irys: WebIrys;
}

const FileUpload: React.FC<FileUploadProps> = ({ irys }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [fileName, setFileName] = useState<string>("");

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setFileName(file.name);
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (selectedFile) {
      console.log("Uploading file:", selectedFile);
      try {
        const tags = [{ name: "Content-Type", value: selectedFile.type }];
        const size = selectedFile.size;
        const price = await irys.getPrice(size);   
        await irys.fund(price);
 
        const response = await irys.uploadFile(selectedFile, { tags });
        console.log(`File uploaded ==> https://gateway.irys.xyz/${response.id}`);
      } catch (e) {
        console.log("Error uploading file ", e);
      }
    } else {
      console.log("No file selected");
    }
  };

  return (
    <div>
      <h2>File Upload</h2>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} />
        <input
          type="text"
          value={fileName}
          onChange={(e) => setFileName(e.target.value)}
          placeholder="File name"
        />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
};

export default FileUpload;
