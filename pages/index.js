//import { useState, UseState } from 'react';
import React, { useEffect } from "react";
import Router from 'next/router';

export default function Home() {
  useEffect(() => {
    const {pathname} = Router
    if(pathname == '/' ){
        Router.push('https://www.strava.com/oauth/authorize?client_id=61144&redirect_uri=http://localhost:3000/strava&response_type=code&scope=activity:read_all&approval_prompt=force')
    }
  });
  return (
    <div>
      <h1>Nova home</h1>
    </div>
  )
}
