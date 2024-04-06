import { useLocation } from "react-router-dom";
import SideMenu from "./Components/SideMenu/SideMenu";


export default function SideMenuWrapper(props) {
    const location = useLocation();
    const isPageNotFoundPage = location.pathname === '/' || location.pathname === '/About-Me' || location.pathname === '/LearnHtml' || 
    location.pathname === '/LearnTailwind' ||  location.pathname === '/LearnCss' || location.pathname.includes('LearnReact') || location.pathname.includes('LearnAngular');
    const shouldShowSideMenu =  location.pathname !== '/' && location.pathname !== '/About-Me' && isPageNotFoundPage;
    
    return (
        shouldShowSideMenu ? <SideMenu data={props.data}/> : null
    );

};
  