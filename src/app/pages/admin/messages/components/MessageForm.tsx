"use client"

import { Icon } from "@/app/components/Icon"
import { addMessage } from "../actions";
import { toast } from "sonner";

const MessageForm = () => {
  const handleSubmit = async (formData: FormData) => {
    const result = await addMessage(formData);
    if (result.error) toast.error(result.error)
  }

  return (
    <form action={handleSubmit} className="bg-white rounded-2xl p-4">
      <textarea name="message" id="message"
        className="outline-none focus:outline-none w-full h-[75px] text-xl text-han-purple placeholder:text-han-purple placeholder:opacity-30"
        placeholder="What do you think?"></textarea>
      <div className="flex justify-between">
        <div>
          <button><Icon id="attachment" /></button>
          <button><Icon id="video" /></button>
          <button><Icon id="image" /></button>
          <button><Icon id="emoji" /></button>
        </div>
        <button className="button">
          Post
          <Icon id="send" />
        </button>
      </div>
    </form>
  )
}

export {MessageForm}