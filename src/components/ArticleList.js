import Article from "./Article";
const ArticleList = ({ posts }) => {
  return (
    <main>
      {posts.map((e) => {
        return <Article key={e.id} title={e.title} date={e.date} preview={e.preview} />;
      })}
    </main>
  );
};
export default ArticleList;