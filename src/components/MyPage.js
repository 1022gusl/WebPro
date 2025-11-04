import { useParams } from "react-router-dom";

function MyPage() {
  const { name } = useParams();
  return <h1>{name}의 Page</h1>;
}

export default MyPage ;