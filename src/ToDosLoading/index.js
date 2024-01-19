import React from "react";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import "./ToDosLoading.css";


function ToDosLoading() {
    return (

    <div className="LoadingTodo-container">
        <SkeletonTheme baseColor="rgba(250,250,250,1)" highlightColor="rgb(200, 199, 199">
            <span className="LoadingTodo-completeIcon"></span>
            <p className="LoadingTodo-text"><Skeleton count={1} /></p>
            <span className="LoadingTodo-deleteIcon"></span>
        </SkeletonTheme>
    </div>
        
    );
}

export {ToDosLoading};