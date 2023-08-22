import React from "react";
import MyNavLink from "../../MyNavLink";
import { Grid } from '@mui/material';
import './index.css'

export default function Introduction() {

    return (
        <div >
            <Grid container alignItems="center" justifyContent="center" style={{ marginTop: '20vh' }}>
                <Grid item xs={10} md={2}></Grid>
                <Grid item xs={10} md={9}>
                    <div >
                        <h2 style={{ fontFamily: 'open sans,sans-serif' }}>Why Choose Keyword-based Email Composition?</h2>
                        <span style={{ fontWeight: 'normal', fontSize: '14px' }}><br />With just a few simple keywords, you can create professional, emotion-rich emails that resonate with your audience.</span>
                    </div>
                </Grid>

                <Grid item xs={12} md={3.5} className="effect" >
                    <div className="left">
                        <img src="/assets/image/generate_ai.png" alt="generate_ai" />
                        <h2>
                            Create a new
                            <br />
                            website with AI
                        </h2>
                        <p>Our AI tool creates customized content along with corresponding images.</p>
                        <MyNavLink style={{ textDecoration: 'underline' }} id='rightBottom' to='/select' >Make my mail</MyNavLink>
                    </div>
                </Grid>

                <Grid item xs={12} md={3.5} className="effect" >
                    <div className="right">
                        <img src="/assets/image/convert_wp.png" alt="convert_wp" />
                        <h2>
                            Edit My Eamil
                            <br />
                            website with AI
                        </h2>
                        <p>Our AI tool creates customized content along with corresponding images.</p>
                        <MyNavLink style={{ textDecoration: 'underline' }} id='rightBottom' to='/select' >Edit my mail</MyNavLink>
                    </div>
                </Grid>

            </Grid>
            <div className="wave">
                <div>
                    <img style={{ height: '2vh' }} src="\assets\image\waving-hand.png" alt="wave-hand" />
                    <span style={{ fontSize: '2vh', fontWeight: 'bold' }}>Hello!</span>
                </div>

                <p style={{ fontSize: '1.5vh' }}>We're here to assist you in configuring 10Web to suit your specific requirements. Just proceed by following the steps outlined above.</p>
            </div>
        </div>
    )
}