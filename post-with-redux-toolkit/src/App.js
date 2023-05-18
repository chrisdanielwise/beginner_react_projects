import './App.css';
import AddPostForm from './feature/post/AddPostForm';
import PostsList from './feature/post/postsList';


function App() {
  return (
    <main className="App">
      <AddPostForm/>
      <PostsList/>
    </main>
  );
}

export default App;
