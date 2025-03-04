import { Button } from "@mantine/core"
import { useNavigate } from "react-router-dom"

const AddPostButton = () => {
  const navigate = useNavigate()

  return <Button onClick={() => navigate("/posts/new")}>Add New Post</Button>
}

export default AddPostButton

