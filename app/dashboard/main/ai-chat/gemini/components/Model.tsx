import { useState } from "react";
import { IoMdCreate } from "react-icons/io";
import clsx from "clsx";

interface RenameModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRename: (newTitle: string) => void;
}

const RenameModal = ({ isOpen, onClose, onRename }: RenameModalProps) => {
  const [newTitle, setNewTitle] = useState("");

  const handleSubmit = () => {
    if (newTitle) {
      onRename(newTitle);
      onClose();
    }
  };

  return (
    <div
      className={clsx(
        "fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center",
        { hidden: !isOpen }
      )}
    >
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-semibold mb-4">Rename Conversation</h2>
        <input
          type="text"
          className="w-full p-3 border border-gray-300 rounded-lg mb-4"
          placeholder="Enter new title"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <div className="flex justify-end space-x-4">
          <button
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            onClick={handleSubmit}
          >
            Rename
          </button>
        </div>
      </div>
    </div>
  );
};
export default RenameModal
