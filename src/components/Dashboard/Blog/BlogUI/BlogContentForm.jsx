
import { useFormContext } from "react-hook-form";
import QuillCustom from "./QuillCustom"; // Adjust the path as needed

const BlogContentForm = () => {
  const { register } = useFormContext();

  return (
    <div className="space-y-2">
      <div className="border w-full rounded-2xl p-6 space-y-6 shadow-md bg-white dark:bg-gray-900">
        <div className="space-y-2">
          <QuillCustom fieldName="content" placeholder="Viết nội dung bài viết tại đây..." />
        </div>
      </div>
    </div>
  );
};

export default BlogContentForm;
