
// import { useState } from 'react';
import { useEffect, useRef } from 'react';
import './Nav.css';
import { useKey } from '../CustomHooks/useKey';

interface NavProps{
    children:any
}

const Nav = ({children}:NavProps) => {
    return (
        <div className='navbar-container'>
            <Logo/>
            {children}
        </div>
    );
}

export default Nav;

const Logo = () => {
    return(
        <div className="logo-container">
            <span>🍿</span>
            <h1>usePopCorn</h1>
        </div>
    )
}

interface SearchProps{
    onClick:(movieName:string) => void
}

export const Search = ({onClick}:SearchProps) => {

    const inputElement = useRef<HTMLInputElement>(null);
  
    const handleSubmit = (e:any) => {
        e.preventDefault();
    }

    useKey('Enter',function(){
        if(document.activeElement === inputElement.current)
            return;
        inputElement.current?.focus();
        onClick('');
    })

    useEffect(()=>{
        inputElement.current?.focus();
    },[]);

    return(
        <form className='search-container' onSubmit={handleSubmit}>
            <input type='text' 
                   placeholder='Search Movies...' 
                   onChange={(event)=>onClick(event.target.value)}
                   ref={inputElement}
            />
        </form>
    )
}

interface MoviesCountProps{
    totalMovies:number
}

export const MoviesCount = ({totalMovies}:MoviesCountProps) => {
    return(
        <div className='movies-count'>
            <h2>{totalMovies <= 0 ? 'No Movies' : `Found ${totalMovies === 1 ? `${totalMovies} Movie`:`${totalMovies} Movies`}`}</h2>
        </div>
    )
}