import React, { useEffect } from "react";
import AsyncSelect from "react-select/async";
import { Controller, useFormContext } from "react-hook-form";
import { useSelector } from "react-redux";

const ClientOnlyAsyncSelect = () => {
  const { cateBlog } = useSelector((state) => state.cateBlog);
  const { control, watch, setValue } = useFormContext();

  const selectedCateBlog = watch("cateBlog");


  // Convert ID -> { value, label } object nếu chỉ có ID
  useEffect(() => {
    if (
      selectedCateBlog &&
      typeof selectedCateBlog === "string" &&
      cateBlog?.length > 0
    ) {
      const matched = cateBlog.find((item) => item._id === selectedCateBlog);
      console.log("Matched:", matched);
      if (matched) {
        setValue("cateBlog", {
          value: matched._id,
          label: matched.name,
        });
      }
    }
  }, [selectedCateBlog, cateBlog, setValue]);

  const loadOptions = (inputValue, callback) => {
    if (!cateBlog) {
      callback([]);
      return;
    }

    const filtered = cateBlog
      .filter((item) =>
        item.name.toLowerCase().includes(inputValue.toLowerCase())
      )
      .map((item) => ({ value: item._id, label: item.name }));

    callback(filtered.slice(0, 50));
  };

  return (
    <Controller
      name="cateBlog"
      control={control}
      rules={{ required: true }}
      render={({ field }) => (
        <AsyncSelect
          {...field}
          cacheOptions
          loadOptions={loadOptions}
          defaultOptions={
            cateBlog
              ? cateBlog.slice(0, 50).map((item) => ({
                  value: item._id,
                  label: item.name,
                }))
              : []
          }
          placeholder="Chọn loại bài viết"
          instanceId="react-select-category"
        />
      )}
    />
  );
};

export default ClientOnlyAsyncSelect;
