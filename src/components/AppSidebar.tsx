import { Button } from "@/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarTrigger,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  useSidebar,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Search, Users, User, Bell, History } from "lucide-react";
import { Link } from "react-router-dom";
import BusinessLogo from "./BusinessLogo";

const AppSidebar = () => {
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";

  const mainMenuItems = [
    { title: "New search", icon: Search, url: "/" },
    { title: "Connections", icon: Users, url: "/connections" },
    { title: "Friends", icon: User, url: "/friends" },
    { title: "Groups", icon: Users, url: "/groups" },
    { title: "Spaces", icon: Users, url: "/spaces" },
  ];

  const historyItems = [
    "Product designers SF/LA",
    "NTPC recruits", 
    "RGUKT college members",
    "UI/UX members"
  ];

  return (
    <Sidebar 
      className="border-r transition-all duration-300" 
      collapsible="icon"
    >
      <SidebarHeader className={`p-6 ${isCollapsed ? 'p-4' : ''}`}>
        <div className="flex items-center justify-between">
          <div className={`flex items-center justify-center ${isCollapsed ? 'w-8 h-8' : 'w-12 h-12'}`}>
            <BusinessLogo className={isCollapsed ? 'w-6 h-6' : 'w-8 h-8'} />
          </div>
          {!isCollapsed && (
            <SidebarTrigger className="ml-2" />
          )}
        </div>
        {isCollapsed && (
          <div className="flex justify-center mt-2">
            <SidebarTrigger className="h-6 w-6" />
          </div>
        )}
      </SidebarHeader>

      <SidebarContent className="flex-1">
        {!isCollapsed ? (
          <>
            <SidebarGroup>
              <SidebarGroupContent>
                <SidebarMenu>
                  {mainMenuItems.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild>
                        <Link to={item.url}>
                          <item.icon className="h-4 w-4" />
                          <span>{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            <SidebarGroup>
              <SidebarGroupLabel className="text-gray-500">Activity</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <History className="h-4 w-4" />
                      <span>History</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  {historyItems.map((item) => (
                    <SidebarMenuItem key={item}>
                      <SidebarMenuButton className="pl-8 text-gray-600">
                        <span>{item}</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </>
        ) : (
          <div className="flex flex-col items-center space-y-4 p-2">
            {/* Show only key navigation icons when collapsed */}
            <SidebarMenuButton className="w-10 h-10 flex items-center justify-center">
              <Users className="h-5 w-5" />
            </SidebarMenuButton>
            <SidebarMenuButton className="w-10 h-10 flex items-center justify-center">
              <User className="h-5 w-5" />
            </SidebarMenuButton>
            <SidebarMenuButton className="w-10 h-10 flex items-center justify-center">
              <Users className="h-5 w-5" />
            </SidebarMenuButton>
          </div>
        )}
      </SidebarContent>
      
      <SidebarFooter className={`p-6 ${isCollapsed ? 'p-4' : ''}`}>
        {!isCollapsed ? (
          <>
            <div className="space-y-3 mb-4">
              <Button variant="ghost" className="w-full justify-start text-left">
                <Users className="h-4 w-4 mr-2" />
                Invite friends
              </Button>
              <Button variant="ghost" className="w-full justify-start text-left text-green-600">
                <span className="mr-2">🎁</span>
                Get 20% off Pro
              </Button>
            </div>
            
            <div className="flex items-center space-x-3 p-3 rounded-lg bg-gray-50">
              <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                <User className="h-4 w-4" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium">Mark Joe</p>
              </div>
            </div>
          </>
        ) : (
          <div className="flex justify-center">
            <Avatar className="w-8 h-8">
              <AvatarFallback className="bg-gray-300">
                <User className="h-4 w-4" />
              </AvatarFallback>
            </Avatar>
          </div>
        )}
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
