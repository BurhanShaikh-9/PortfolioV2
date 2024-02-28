import React, {useRef} from 'react'
import {Header} from './component/header'
import {Outlet} from 'react-router-dom'
import { useThemeStore } from '../../utils/zustandStore/store';

    export const Layout = () => {
        const aboutRef = useRef(null);
        const contactRef = useRef(null);
  const { themeName } = useThemeStore();

        return (
            <React.Fragment>
                <div className={themeName}>
                <Header aboutRef={aboutRef} contactRef={contactRef} />
                <Outlet context={{aboutRef , contactRef}} />
                </div>

            </React.Fragment>
        )
    }
