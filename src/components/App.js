import React, { Suspense } from 'react';
import { Route, Switch } from "react-router-dom";
import Auth from "../hoc/auth";
import LoginPage from "./views/LoginPage/LoginPage";
import UploadProductPage from "./views/UploadProductPage/UploadProductPage";
import RegisterPage from "./views/RegisterPage/RegisterPage";
import Main from './views/Main';
import LetterPaper from './views/LetterPaper/LetterPaper';
import LetterDetail from './views/LetterPaper/LetterDetail';
import LetterUpload from './views/LetterUpload/LetterUpload';
import ChooseColor from './views/ChooseColor/ChooseColor';
import ChooseColor2 from './views/ChooseColor/ChooseColor2';
import ChooseColor3 from './views/ChooseColor/ChooseColor3';
import ChooseColor4 from './views/ChooseColor/ChooseColor4';
import Custom from './views/Custom/Custom';
import HistoryPage from './views/HistoryPage/HistoryPage';
import RightMenu from './views/NavBar/Sections/RightMenu';

//null   Anyone Can go inside
//true   only logged in user can go inside
//false  logged in user can't go inside

function App() {
  return (
    <Suspense fallback={(<div>Loading...</div>)}>
      <RightMenu />
      <div>
        <Switch>
          <Route path="/product/letterpaper" component={Auth(LetterPaper, true)}exact/>
          <Route path="/product/:productId" component={Auth(LetterDetail, true)}exact/>
          <Route path="/choosecolor" component={Auth(ChooseColor, true)}/>
          <Route path="/choosecolor2" component={Auth(ChooseColor2, true)}/>
          <Route path="/choosecolor3" component={Auth(ChooseColor3, true)}/>
          <Route path="/choosecolor4" component={Auth(ChooseColor4, true)}/>
          <Route path="/custom" component={Auth(Custom, true)} />
          <Route exact path="/" component={Auth(Main, null)} exact/>
          <Route exact path="/login" component={Auth(LoginPage, false)} />
          <Route exact path="/register" component={Auth(RegisterPage, false)} />
          <Route exact path="/upload/product" component={Auth(UploadProductPage, true)} exact/>
          <Route exact path="/upload/letter" component={Auth(LetterUpload, true)} />          
          <Route exact path="/user/history" component={Auth(HistoryPage, true)} exact/>
          <Route exact path="/user/cart" component={Auth(Custom, true)} exact/>
        </Switch>
      </div>
    </Suspense>
  );
}

export default App;
