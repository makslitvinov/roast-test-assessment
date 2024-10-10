import { Button } from "@repo/ui/components/ui/button";
import React, { FC } from "react";

interface Props {
  onFileUpload: (file: File) => void;
}

export const Form: FC<Props> = ({ onFileUpload }) => {
  return (
    <Button asChild>
      <label htmlFor="upload">
        <input
          id="upload"
          type="file"
          className="hidden"
          onChange={(e) => {
            if (!e.target.files?.length || !e.target.files?.[0]) return;

            onFileUpload(e.target.files?.[0]);
          }}
        />
        UPLOAD MY PHOTO
      </label>
    </Button>
  );
};
