import React, { useState } from "react";
import { WebIrys } from "@irys/sdk";
import { TaggedFile } from "@irys/sdk/web/upload";

interface FolderUploadProps {
  irys: WebIrys | null;
}

const FolderUpload: React.FC<FolderUploadProps> = ({ irys }) => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [uploadStatus, setUploadStatus] = useState<string>("");
  // const files: File[] = [];
  const tags: { name: string; value: string }[][] = []


  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const fileArray = Array.from(files);
      setSelectedFiles(fileArray);
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (selectedFiles.length > 0 && irys) {
      try {
        // Convert files to TaggedFile objects
        const taggedFiles = selectedFiles.map((f: TaggedFile, i: number) => {
            f.tags = tags[i];
            return f;
        });

        
        console.log(taggedFiles)
        // Optional parameters
        const uploadOptions = {
          indexFileRelPath: undefined, // Path to the index file, if applicable
          manifestTags: undefined, // Example manifest tags
          throwawayKey: undefined, // Example key
          seperateManifestTx: true, // Separate manifest transaction
        };

        const response = await irys.uploadFolder(taggedFiles, uploadOptions);


        console.log(`Files uploaded ==> https://gateway.irys.xyz/${response.id}`);
        setUploadStatus("Files uploaded successfully");
      } catch (e) {
        setUploadStatus(`Error uploading files: ${e}`);
        console.log("Error uploading files", e);
      }
    } else {
      setUploadStatus("No files selected or WebIrys instance not initialized");
    }
  };

  return (
    <div>
      <h2>Folder Upload</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          onChange={handleFileChange}
          multiple
          // Use type assertion to add webkitdirectory attribute
          // This is necessary because webkitdirectory is not recognized by TypeScript
          {...({ webkitdirectory: "true" } as React.InputHTMLAttributes<HTMLInputElement>)}
        />
        <button type="submit" disabled={selectedFiles.length === 0 || !irys}>
          Upload
        </button>
      </form>
      {uploadStatus && <p>{uploadStatus}</p>}
    </div>
  );
};

export default FolderUpload;
