"use client";

import { Icon } from "@/app/components/Icon";
import { addMessage } from "../actions";
import { toast } from "sonner";
import { useState } from "react";

const MessageForm = ({ chatId }: { chatId: string }) => {
  const [message, setMessage] = useState("");
  const handleSubmit = async () => {
    const result = await addMessage(message, chatId);
    if (result.error) toast.error(result.error);
    setMessage("");
  };

  return (
    <form action={handleSubmit} className="bg-white rounded-2xl p-4">
      <textarea
        name="message"
        id="message"
        className="outline-none focus:outline-none w-full h-[75px] text-xl text-han-purple placeholder:text-han-purple placeholder:opacity-30"
        placeholder="What do you think?"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>
      <div className="flex justify-between">
        <div>
          <button>
            <Icon id="attachment" />
          </button>
          <button>
            <Icon id="video" />
          </button>
          <button>
            <Icon id="image" />
          </button>
          <button>
            <Icon id="emoji" />
          </button>
        </div>
        <button className="button">
          Post
          <Icon id="send" />
        </button>
      </div>
    </form>
  );
};

export { MessageForm };
