import React, { useState } from "react";
import {
  UserSideBar,
  UserSideBarLogo,
} from "../../components/userDashboard/UserSideBar";
import UserOverview from "../../components/userDashboard/UserOverview";
import UserProfile from "../../components/userDashboard/UserProfile";
import UserOrders from "../../components/userDashboard/UserOrders";
import UserTransactions from "../../components/userDashboard/UserTransactions";
import UserHelpDesk from "../../components/userDashboard/UserHelpDesk";

const UserDashboard = () => {
  const [active, setActive] = useState("overview");

  const [SideBar, setSideBar] = useState(false);

  return (
    <>
        {SideBar ?
          <div className="flex w-full h-[90vh]">
            <div className="w-2/10 bg-(--color-background) ">
              <UserSideBar active={active} setActive={setActive} SideBar={SideBar} setSideBar={setSideBar}/>
            </div>
            <div className=" w-8/10">
              {active === "overview" && <UserOverview />}
              {active === "profile" && <UserProfile />}
              {active === "orders" && <UserOrders />}
              {active === "transactions" && <UserTransactions />}
              {active === "helpdesk" && <UserHelpDesk />}
            </div>
          </div>
         : 
          <div className="flex w-80 h-[90vh]">
            <div className="w-2/10 bg-(--color-background) ">
              <UserSideBarLogo active={active} setActive={setActive} SideBar={SideBar} setSideBar={setSideBar} />
            </div>
            <div className=" w-8/10">
              {active === "overview" && <UserOverview />}
              {active === "profile" && <UserProfile />}
              {active === "orders" && <UserOrders />}
              {active === "transactions" && <UserTransactions />}
              {active === "helpdesk" && <UserHelpDesk />}
            </div>
          </div>
        }
    </>
  );
};

export default UserDashboard;
