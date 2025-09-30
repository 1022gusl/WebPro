import Header from './components/Header';
import Nav from './components/Nav';
import Article from './components/Article';
import Datas from './components/Datas';

function App() {
  return (
    <div>
      <Header
        title="WEB"
        onChangeMode={() => {
          alert('Header가 출력됩니다...');
        }}
      />

      <Nav
        datas={Datas}
        onChangeMode={(msg) => {
          alert(msg);
        }}
      />

      <Article title="React" body="Hello. React " />
    </div>
  );
}
export default App;
