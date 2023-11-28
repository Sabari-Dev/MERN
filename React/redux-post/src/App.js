import "./App.css";
import AddedPostForm from "./features/post/AddedPostForm";
import PostsList from "./features/post/PostsList";

function App() {
  return (
    <div className="App">
      <div className="posts">
        <AddedPostForm />
        <PostsList />
      </div>
    </div>
  );
}

export default App;
