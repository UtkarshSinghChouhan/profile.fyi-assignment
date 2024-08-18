'use client'

import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import Icon from "./icon"
import { RootState } from "@/store/store"
import { Theme } from "@/models/enums"
import { setTheme } from "@/store/slices/theme-slice"
import { updateTheme } from "@/lib/theme-utils"

const ThemeSwitch = () => {
  const theme = useSelector((state: RootState) => state.theme.theme);
  const dispatch = useDispatch();

  const toggleTheme = () => {
    if(theme === Theme.LIGHT){
      dispatch(setTheme(Theme.DARK));
      localStorage.setItem("theme", Theme.DARK);
      document.documentElement.classList.add("dark");
      document.documentElement.setAttribute("data-theme", "dark");  //for customizing the scrollbar based on theme
    }else{
      dispatch(setTheme(Theme.LIGHT));      
      localStorage.setItem("theme", Theme.LIGHT);
      document.documentElement.classList.remove("dark");
      document.documentElement.setAttribute("data-theme", "light");   //for customizing the scrollbar based on theme
    }

  }

  useEffect(() =>{
    updateTheme(dispatch);
  },[])


  return (
    <button 
        className="ripple flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-fs-bg-hover dark:bg-fs-darktheme-bg hover:bg-fs-bg-selected dark:hover:bg-fs-darktheme-bg-light dark:shadow-darkTheme-shadow border-2 border-fs-dark-black dark:border-fs-darktheme-border-light" 
        onClick={toggleTheme}
    >
      <div className="shrink-0">           
        {theme === Theme.LIGHT ? <Icon icon="dark" /> : <Icon icon="light" /> }
      </div>
    </button>
  );
}

export default ThemeSwitch