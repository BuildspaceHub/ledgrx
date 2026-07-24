import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function AddRecords() {
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("");
  const [category, setcategory] = useState("");
  const [customCategory, setCustomCategory] = useState("");
  const [icon, setIcon] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate();

  
  const handleSubmit = (e) => {
    e.preventDefault();

    const finalCategory = category === "others" ? customCategory : category;
    
    const inputData = {
      amount,
      type,
      category: finalCategory,
      icon,
      description,
    };

    console.log("Submitted Input Data:", inputData);

    toast.success("Record saved successfully.", {
      autoClose: 3000,
      position: "top-center",
    });

    navigate("/dashboard");
   
  };

  return (
    <div className="mt-10 p-6 flex flex-col gap-4">
      <h6 className="font-semibold">Add Records</h6>

      <div className="">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-6 bg-neutral text-foreground rounded-2xl p-5 shadow-sm"
        >
          {/* Amount */}
          <div>
            <label className="block text-sm font-medium mb-3">
              Amount <span className="text-error">*</span>
            </label>

            <div className="flex items-center gap-1 border-b border-foreground/20 pb-2 h-6">
              {/* Naira Symbol */}
              <span className="text-(--color-brand) font-semibold text-sm">
                ₦
              </span>

              {/* Input Field */}
              <input 
                required
                type="number"
                placeholder="0.00"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full bg-transparent text-sm text-gray-500 placeholder-gray-300 focus:outline-none"
              />
            </div>
          </div>

          {/* Type */}
          <div>
            <label className="block text-sm font-medium  mb-3">
              Type <span className="text-error">*</span> 
            </label>

            <div className="flex items-center gap-1.5 border-b border-foreground/20 pb-2 h-6">
              <select 
              required
              value={type}
              onChange={(e) => setType(e.target.value)} 
              className="w-full outline-0 bg-neutral text-foreground text-sm">
                <option value="">choose a record type...</option>
                <option value="income">Income</option>
                <option value="expenses">Expenses</option>
              </select>
            </div>
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm font-medium mb-3">
              Category <span className="text-error">*</span>
            </label>

            <div className="flex items-center gap-1.5 border-b border-foreground/20 pb-2 h-6">
              <select required
                value={category}
                onChange={(e) => setcategory(e.target.value)}
                className="w-full outline-0 text-sm bg-neutral text-foreground"
              >
                <option value="" className="text-gray-200">
                  choose a category...
                </option>
                <option value="income">Subscription</option>
                <option value="electricity">Electicity</option>
                <option value="insurance">Insurance</option>
                <option value="food">Food</option>
                <option value="electronics">Electronics</option>
                <option value="betting">Betting</option>
                <option value="others">Others</option>
              </select>
            </div>

            {category === "others" && (
              <div>
                <div>
                  <input
                    type="text"
                    placeholder="Specify category..."
                    value={customCategory}
                    onChange={(e) => setCustomCategory(e.target.value)}
                    className="w-full text-sm outline-none bg-neutral text-foreground placeholder-gray-400"
                  />
                </div>
              </div>
            )}
          </div>


          {/* Icon */}
          <div>
            <label className="block text-sm font-medium mb-3">
              Icon
            </label>

            <div className="flex items-center gap-1.5 border-b border-foreground/20 pb-2 h-6">
              <input
                type="text"
                placeholder="Enter an emoji..."
                value={icon}
                onChange={(e) => setIcon(e.target.value)}
                className="w-full text-sm outline-none bg-neutral text-foreground placeholder-foreground/50"
              />
            </div>
          </div>

          {/* Description */}
          <div className="">
            <label className="block text-sm font-medium mb-3 mt-">
              Description
            </label>

            {/* Input Field */}
            <textarea
              type="text"
              placeholder="Type in your description..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full h-6 text-sm text-foreground placeholder-foreground/50 focus:outline-none border-b border-foreground/20"
            />
          </div>

          <div className="flex mt-2 justify-between">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="border rounded-3xl py-1 px-4 font-semibold text-sm"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="bg-brand text-white rounded-3xl py-1 px-4 font-semibold text-sm"
            >
              Save Record
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
