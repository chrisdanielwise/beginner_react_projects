import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButton";

const PostExcerpt = ({ post }) => {
    return (
    <article key={post.id}> {/* Added key prop to the article element */}
      <h3>{post.title}</h3>
      {/* It is used to display the first 120 characters of the post.content string within a <p> element. */}
      <p>{post.content?.substring(0, 120)}</p> 
      {/* <p>{post.content?.substring(0, post.content.length)}</p>  */}
      <p className="postCredit">
        <PostAuthor userId={post.userId} />
        <TimeAgo timestamp={post.date }/>
      </p>
    <ReactionButtons post={post}/>
    </article>
    )
}
export default PostExcerpt