import marketingStyle from '~/styles/marketing.css';
import { Outlet } from '@remix-run/react';
import MainHeader from '../components/navigation/MainHeader';
export default function MarketingLayout(){
    return(
        <>
            <h1>Hi from mkt file</h1>
            <MainHeader />
            <Outlet/>
        </>
    );
}

export function links (){
    return[{rel: 'stylesheet', href: marketingStyle}]
}