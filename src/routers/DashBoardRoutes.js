import React from 'react'
import { Navbar } from '../components/ui/Narvbar'
import {
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { HeroesScreen } from '../components/heroes/HeroesScreen';
import { DcScreen } from '../components/dc/DcScreen';
import { SearchScreen } from '../components/search/SearchScreen';

export const DashBoardRoutes = () => {
    return (
        <>
            <Navbar/>

            <div>
                <Switch>
                    <Route exact path="/marvel" component={MarvelScreen}/>
                    <Route exact path="/hero/:heroeId" component={HeroesScreen}/>
                    <Route exact path="/dc" component={DcScreen}/>
                    <Route exact path="/search" component={SearchScreen}/>
                   
                    <Redirect to="/marvel" />
                </Switch>
            </div>
            
        </>
    )
}
