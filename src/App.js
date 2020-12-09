import * as React from "react";
import { Admin, Resource} from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { UserList } from "./Components/Post.js";
import { PostList } from "./Components/user.js";
import { EditPost } from "./Components/EditPost.js";
import { CreatePost } from "./Components/CreatePost.js";
import { Dashboard } from "./Components/Dashboard.js";

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

const App = () => (
  <Admin dashboard={Dashboard} dataProvider={dataProvider}>
    <Resource name="users" list={UserList} />
    <Resource name="posts" list={PostList} edit={EditPost} create={CreatePost}/>
      </Admin>
);


export default App;