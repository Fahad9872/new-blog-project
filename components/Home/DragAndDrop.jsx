import { useState } from "react";

const SidebarItem = ({ id, text, onDragStart }) => (
  <div
    id={id}
    draggable
    onDragStart={(e) => onDragStart(e, id, text)}
    className="p-2 bg-blue-500 text-white rounded cursor-grab mb-2"
  >
    {text}
  </div>
);

const DraggableItem = ({
  id,
  text,
  onRemove,
  onDragStart,
  onDragOver,
  onDrop,
}) => (
  <div
    id={id}
    draggable
    onDragStart={(e) => onDragStart(e, id, text)}
    onDragOver={onDragOver}
    onDrop={(e) => onDrop(e, id)}
    className="p-2 text-black rounded flex justify-between items-center border border-gray-500 cursor-grab mb-2"
  >
    {text}
    <button
      className="ml-2 bg-red-500 text-white w-5 h-5 rounded-full flex items-center justify-center"
      onClick={() => onRemove(id)}
    >
      ✕
    </button>
  </div>
);

const DroppableContainer = ({
  id,
  droppedItems,
  onDropItem,
  onMoveItem,
  onRemoveItem,
  onDragStart,
  onDragOver,
}) => (
  <div
    onDragOver={(e) => onDragOver(e)}
    onDrop={(e) => onDropItem(e, id)}
    className="w-full h-48 bg-white flex items-center justify-center border border-gray-300"
  >
    {droppedItems.map((item) => (
      <DraggableItem
        key={item.id}
        id={item.id}
        text={item.text}
        onDragStart={onDragStart}
        onDragOver={onDragOver}
        onDrop={onMoveItem}
        onRemove={onRemoveItem}
      />
    ))}
  </div>
);

export default function DragAndDrop() {
  const [droppedItems, setDroppedItems] = useState([]);
  const [draggedItem, setDraggedItem] = useState(null);

  const onDragStart = (e, id, text) => {
    // Set the dragged item when dragging starts
    setDraggedItem({ id, text });
  };

  const onDragOver = (e) => {
    // Allow the item to be dropped
    e.preventDefault();
  };

  const onDropItem = (e, containerId) => {
    e.preventDefault();
    if (draggedItem) {
      // Check if the item is already in the grid (droppedItems)
      const existingItem = droppedItems.find(
        (item) => item.id === draggedItem.id
      );

      if (!existingItem) {
        // If it's not in the grid already, add it to the dropped items
        setDroppedItems((prev) => [
          ...prev,
          { ...draggedItem, container: containerId },
        ]);
      } else {
        // If it's already in the grid, update its container (move it to the new container)
        setDroppedItems((prev) =>
          prev.map((item) =>
            item.id === draggedItem.id
              ? { ...item, container: containerId }
              : item
          )
        );
      }
      setDraggedItem(null); // Reset dragged item after drop
    }
  };

  const onMoveItem = (e, itemId, newContainerId) => {
    e.preventDefault();
    // Move the item to the new container (update container)
    setDroppedItems((prev) =>
      prev.map((item) =>
        item.id === itemId ? { ...item, container: newContainerId } : item
      )
    );
  };

  const onRemoveItem = (itemId) => {
    setDroppedItems((prev) => prev.filter((item) => item.id !== itemId));
  };

  return (
    <div className="flex h-screen p-4 gap-4">
      {/* Sidebar */}
      <div className="w-1/4 bg-gray-200 p-4 rounded">
        <h2 className="text-lg font-bold mb-4">Sidebar</h2>
        <SidebarItem id="Item-1" text="Item 1" onDragStart={onDragStart} />
        <SidebarItem id="Item-2" text="Item 2" onDragStart={onDragStart} />
        <SidebarItem id="Item-3" text="Item 3" onDragStart={onDragStart} />
      </div>

      {/* Main Droppable Grid */}
      <div className="flex-1 grid grid-cols-10 grid-rows-5 gap-4">
        {[...Array(50)].map((_, index) => (
          <DroppableContainer
            key={`box-${index}`}
            id={`box-${index}`}
            droppedItems={droppedItems.filter(
              (item) => item.container === `box-${index}`
            )}
            onDropItem={onDropItem}
            onMoveItem={onMoveItem}
            onRemoveItem={onRemoveItem}
            onDragStart={onDragStart}
            onDragOver={onDragOver}
          />
        ))}
      </div>
    </div>
  );
}
