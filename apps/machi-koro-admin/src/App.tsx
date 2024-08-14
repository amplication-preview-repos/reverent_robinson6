import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { LandmarkList } from "./landmark/LandmarkList";
import { LandmarkCreate } from "./landmark/LandmarkCreate";
import { LandmarkEdit } from "./landmark/LandmarkEdit";
import { LandmarkShow } from "./landmark/LandmarkShow";
import { PlayerList } from "./player/PlayerList";
import { PlayerCreate } from "./player/PlayerCreate";
import { PlayerEdit } from "./player/PlayerEdit";
import { PlayerShow } from "./player/PlayerShow";
import { EnterpriseList } from "./enterprise/EnterpriseList";
import { EnterpriseCreate } from "./enterprise/EnterpriseCreate";
import { EnterpriseEdit } from "./enterprise/EnterpriseEdit";
import { EnterpriseShow } from "./enterprise/EnterpriseShow";
import { EnterpriseBundleList } from "./enterpriseBundle/EnterpriseBundleList";
import { EnterpriseBundleCreate } from "./enterpriseBundle/EnterpriseBundleCreate";
import { EnterpriseBundleEdit } from "./enterpriseBundle/EnterpriseBundleEdit";
import { EnterpriseBundleShow } from "./enterpriseBundle/EnterpriseBundleShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"MachiKoro"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Landmark"
          list={LandmarkList}
          edit={LandmarkEdit}
          create={LandmarkCreate}
          show={LandmarkShow}
        />
        <Resource
          name="Player"
          list={PlayerList}
          edit={PlayerEdit}
          create={PlayerCreate}
          show={PlayerShow}
        />
        <Resource
          name="Enterprise"
          list={EnterpriseList}
          edit={EnterpriseEdit}
          create={EnterpriseCreate}
          show={EnterpriseShow}
        />
        <Resource
          name="EnterpriseBundle"
          list={EnterpriseBundleList}
          edit={EnterpriseBundleEdit}
          create={EnterpriseBundleCreate}
          show={EnterpriseBundleShow}
        />
      </Admin>
    </div>
  );
};

export default App;
