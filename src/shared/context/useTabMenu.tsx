/* eslint-disable react-refresh/only-export-components */

import { createContext, useState } from "react";

type TabMenuOptions = "products" | "categories";

export interface ContextState {
	selectedTab: TabMenuOptions;
    setSelectedTab: (tab: TabMenuOptions) => void;
}

export const TabMenuContext = createContext({} as ContextState);

export const TabMenuContextProvider = ({children} : {children: React.ReactNode}) => {

	const [selectedTab, setSelectedTab] = useState<TabMenuOptions>("products");

	return (
		<TabMenuContext.Provider value={{ 
			selectedTab,
			setSelectedTab
		}}>
			{children}
		</TabMenuContext.Provider>
	);
};
