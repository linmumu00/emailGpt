import React from "react";
import MyNavLink from "../../MyNavLink";
import { Grid } from '@mui/material';
import './index.css'

export default function Introduction() {

    return (
        <div >
            <div style={{ height: '10vh' }}></div>
            <Grid container alignItems="center" justifyContent="center">
                <Grid item xs={10} md={2}></Grid>
                <Grid item xs={10} md={10}>
                    <div >
                        <h3>Why Choose Keyword-based Email Composition?</h3>
                        <br />
                        <span style={{ fontWeight: 'normal' }}>A powerful tool designed to transform the way you write emails.<br />With just a few simple keywords, you can create professional, emotion-rich emails that resonate with your audience.</span>
                    </div>
                </Grid>
                {/* 左侧栏，占据12列在小屏幕下，占据4列在大屏幕下 */}
                <Grid item xs={10} md={4} className="father">
                    <div className="left">
                        Left Column Content
                        <br />
                        <MyNavLink id='rightBottom' to='/selectFunction'>Make my mail</MyNavLink>
                    </div>
                </Grid>

                {/* 右侧栏，占据12列在小屏幕下，占据8列在大屏幕下 */}
                <Grid item xs={10} md={4} className="father">
                    <div className="right" >
                        Right Column Content
                        <br />
                        <MyNavLink id='rightBottom' to='/selectFunction'>Make my mail</MyNavLink>
                    </div>
                </Grid>
            </Grid>

        </div>
    )
}