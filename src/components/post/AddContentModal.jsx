import React, { useState } from 'react';
import { Modal, Button, TextInput, Textarea, Group } from '@mantine/core';

function AddContentModal() {
  const [opened, setOpened] = useState(false);
  const [content, setContent] = useState('');
  const [imageURL, setImageURL] = useState('');

  const handleSubmit = () => {
    // Handle submit logic here, like saving the content and image URL
    console.log('Content:', content);
    console.log('Image URL:', imageURL);
    setOpened(false); // Close the modal after submission
  };

  return (
    <div>
      {/* Button to open the modal */}
      <Button onClick={() => setOpened(true)}>Add Content</Button>

      {/* Modal for adding content */}
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Add New Content"
      >
        <TextInput
          label="Content"
          placeholder="Enter content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <Textarea
          label="Image URL"
          placeholder="Enter image URL"
          value={imageURL}
          onChange={(e) => setImageURL(e.target.value)}
        />
        <Group position="right" mt="md">
          <Button onClick={handleSubmit}>Submit</Button>
        </Group>
      </Modal>
    </div>
  );
}

export default AddContentModal;
