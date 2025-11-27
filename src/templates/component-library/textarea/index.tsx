import TextArea from "@/components/textarea";
import { useState } from "react";

const TextAreas = () => {
  const [description, setDescription] = useState("");
  const [bio, setBio] = useState("");
  const [feedback, setFeedback] = useState("");
  const [notes, setNotes] = useState("");

  return (
    <div className="flex flex-col gap-6 max-w-2xl mx-auto p-6">
      {/* Basic TextArea */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Basic TextArea</h3>
        <TextArea
          label="Description"
          value={description}
          onChange={setDescription}
          placeholder="Enter your description here..."
        />
        <p className="text-sm text-neutral-600 mt-2">
          Character count: {description.length}
        </p>
      </div>

      {/* TextArea with Character Limit */}
      <div>
        <h3 className="text-lg font-semibold mb-2">With Character Limit</h3>
        <TextArea
          label="Bio"
          value={bio}
          onChange={setBio}
          maxLength={200}
          showCharacterCount
          placeholder="Tell us about yourself (max 200 characters)..."
        />
      </div>

      {/* Required TextArea with Validation */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Required with Validation</h3>
        <TextArea
          label="Feedback"
          value={feedback}
          onChange={setFeedback}
          required
          error={feedback.length < 10 && feedback.length > 0 ? "Feedback must be at least 10 characters" : ""}
          helperText="Share your thoughts with us"
          placeholder="Your feedback..."
        />
      </div>

      {/* Disabled TextArea */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Disabled</h3>
        <TextArea
          label="Terms & Conditions"
          value="This is a disabled textarea that cannot be edited."
          onChange={() => {}}
          disabled
          rows={2}
          resize="none"
        />
      </div>

      {/* Custom Rows and Resize */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Custom Configuration</h3>
        <TextArea
          label="Notes"
          value={notes}
          onChange={setNotes}
          rows={5}
          showCharacterCount
          placeholder="Write your notes here..."
          resize="both"
        />
      </div>
    </div>
  );
};

export default TextAreas;