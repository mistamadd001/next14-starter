import { addPost, deletePost } from "@/lib/actions"

const ServerActionTestPage = () => {
  return <div>
    <form action={addPost}>
      <input type="text" name='title' placeholder="Title" />
      <input type="text" name='desc' placeholder="Description" />
      <input type="text" name='slug' placeholder="Slug" />
      <input type="text" name='userId' placeholder="User ID" />
      <button>Create</button>
    </form>
    <form action={deletePost}>
      <input type="text" name='id' placeholder="Post ID" />
      <button>Delete</button>
    </form>
  </div>
}

export default ServerActionTestPage