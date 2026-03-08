"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import dynamic from "next/dynamic";
import { useFormContext } from "react-hook-form";
import { useEffect, useState } from "react";

// Import Client-Only Component
const ClientOnlySelect = dynamic(() => import("./ClientOnlySelect"), {
  ssr: false,
});

const BlogTagForm = () => {
  const { register, setValue, watch } = useFormContext();
  const [tagInput, setTagInput] = useState("");
  const [tags, setTags] = useState([]);

  const { tag } = watch();

  useEffect(() => {
    setTags(tag);
  }, [tag]);

  const addTag = () => {
    if (!tagInput.trim()) return;
    if (tags.includes(tagInput.trim())) return; // Không thêm trùng
    const newTags = [...tags, tagInput.trim()];
    setTags(newTags);
    setValue("tag", newTags); // Cập nhật vào react-hook-form
    setTagInput("");
  };

  const removeTag = (tagToRemov) => {
    const newTags = tags.filter((tag) => tag !== tagToRemov);
    setTags(newTags);
    setValue("tag", newTags);
  };

  return (
    <div className="space-y-2">
      <div className="border w-full rounded-2xl p-6 space-y-6 shadow-md bg-white dark:bg-gray-900">
        {/* Loại Bài Viết */}
        <div className="space-y-2">
          <Label className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Loại Bài Viết
          </Label>
          <ClientOnlySelect />
        </div>

        {/* Input tag */}
        <div className="space-y-2">
          <Label className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Tag
          </Label>
          {/* Danh sách tag */}
          {tags.length > 0 && (
            <div className="border p-4 rounded-lg bg-gray-50 dark:bg-gray-800 space-x-2 flex flex-wrap gap-y-2">
              {tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="bg-black/10 text-black px-3 py-1 rounded-full text-sm flex items-center gap-2"
                >
                  {tag}
                  <button
                    type="button"
                    onClick={() => removeTag(tag)}
                    className="text-red-500 hover:text-red-700"
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
          )}
          <div className="flex items-center gap-2">
            <Input
              type="text"
              placeholder="Thêm tag..."
              value={tagInput}
              onChange={(e) => setTagInput(e.target.value)}
            />
            <Button type="button" onClick={addTag}>
              Thêm
            </Button>
          </div>
        </div>

        {/* Tên Tác Giả */}
        <div className="space-y-2">
          <Label className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Tên Tác Giả
          </Label>
          <Input
            type="text"
            placeholder="Tác giả"
            {...register("author", { required: true })}
          />
        </div>
      </div>
    </div>
  );
};

export default BlogTagForm;
