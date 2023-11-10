import React, { useEffect } from "react";
import './index.css';
import notifications from "./notifications";


export default function Edit() {

    // const [editHtml, setEditHtml] = useState('')
    // console.log(imageurl, businessType);
    const imageurl = sessionStorage.getItem("themeId")

    // useEffect(() => {

    //     const contentStr = sessionStorage.getItem("content")
    //     const content = JSON.parse(contentStr)
    //     const businessType = sessionStorage.getItem("businessType")
    //     async function makeRequest() {
    //         const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJpYXQiOjE2OTI1ODk5NjUsImV4cCI6MTY5Mjg0OTE2NSwiaXNzIjoiY2hhdCJ9.DxWRTOn3zhN5jLbAKwOuJHZEGHY8eNwHsuJMUflgsOY";
    //         const apiUrl = 'https://api.workgpt.us/api/email_design/design'
    //         // const apiUrl = '';
    //         const headers = {
    //             'Authorization': `${token}`,
    //             'Content-Type': 'application/json',
    //         };

    //         const body = {
    //             "BusinessType": businessType,
    //             "name": content[0].value,
    //             "decribe": content[1].value,
    //             "feature1": content[2].value,
    //             "feature2": content[3].value,
    //             "feature3": content[4].value,
    //             "isFormal": content[5].value,
    //             "ThemeUrl": `${imageurl}.html`
    //         };

    //         try {
    //             const response = await fetch(apiUrl, {
    //                 method: 'POST',
    //                 headers: headers,
    //                 body: JSON.stringify(body)
    //             });

    //             if (response.ok) {
    //                 const responseData = await response.json();
    //                 setEditHtml(responseData.data.html)
    //             } else {
    //                 console.error('Request failed with status:', response.status);
    //             }
    //         } catch (error) {
    //             console.error('An error occurred:', error);
    //         }
    //     }

    //     makeRequest();
    // }, []);

    useEffect(() => {
        async function request(method, url, data, callback) {
            try {
                const response = await fetch(url, {
                    method: method,
                    headers: method !== 'GET' ? { 'Content-Type': 'application/json' } : {},
                    body: data,
                });
                if (response.ok) {
                    const responseData = await response.text();
                    callback(responseData);
                } else {
                    console.error('Can not complete request. Please check you entered a valid PLUGIN_ID and SECRET_KEY values');
                }
            } catch (error) {
                console.error('An error occurred:', error);
            }
        }
        //the first url addresses will obtaine from the back-end gpt
        function loadDemoTemplate(editHtml, callback) {
            request('GET', 'https://raw.githubusercontent.com/linmumu00/stripo-Templates/master/test1.css', null, function (css) {
                request('GET', editHtml + '.html', null, function (html) {
                    console.log(html);
                    callback({ html: html, css: css });
                });
            });
        }
        // function loadDemoTemplate(editHtml, callback) {
        //     request('GET', editHtml + '.html', null, function (html) {
        //         request('GET', 'https://raw.githubusercontent.com/linmumu00/stripo-Templates/master/test1.css', null, function (css) {
        //             callback({ html: html, css: css });
        //         });
        //     });
        // }
        function initPlugin(template) {
            const apiRequestData = {
                emailId: 123
            };
            const script = document.createElement('script');
            script.id = 'stripoScript';
            script.type = 'text/javascript';
            script.src = 'https://plugins.stripo.email/static/latest/stripo.js';
            script.onload = function () {
                window.Stripo.init({
                    settingsId: 'stripoSettingsContainer',
                    previewId: 'stripoPreviewContainer',
                    codeEditorButtonId: 'codeEditor',
                    undoButtonId: 'undoButton',
                    redoButtonId: 'redoButton',
                    locale: 'en',
                    html: template.html,
                    css: template.css,
                    notifications: {
                        info: notifications.info.bind(notifications),
                        error: notifications.error.bind(notifications),
                        warn: notifications.warn.bind(notifications),
                        loader: notifications.loader.bind(notifications),
                        hide: notifications.hide.bind(notifications),
                        success: notifications.success.bind(notifications)
                    },
                    apiRequestData: apiRequestData,
                    userFullName: 'Plugin Demo User',
                    versionHistory: {
                        changeHistoryLinkId: 'changeHistoryLink',
                        onInitialized: function (lastChangeIndoText) {
                            document.getElementById('changeHistoryContainer').show();

                        }
                    },
                    getAuthToken: function (callback) {
                        request('POST', 'https://plugins.stripo.email/api/v1/auth',
                            JSON.stringify({
                                pluginId: '8c7519f3ecb74c7f9f530d2a0b25f6e9',
                                secretKey: 'af162fa6c36e4601ad640ff907652eab'
                            }),
                            function (data) {
                                callback(JSON.parse(data).token);
                            });
                    }
                });
            };
            document.body.appendChild(script);
        }
        loadDemoTemplate(imageurl, initPlugin);
        console.log('finish');
    }, [imageurl])

    return (
        <div>
            <div style={{ height: '10vh' }}></div>
            <div id="externalSystemContainer">
                <button id="undoButton" className="control-button">
                    Undo
                </button>
                <button id="redoButton" className="control-button">
                    Redo
                </button>
                <button id="codeEditor" className="control-button">
                    Code editor
                </button>
                <span id="changeHistoryContainer" style={{ display: 'none' }}>
                    Last change: <a id="changeHistoryLink" href="/javascript">1</a>
                </span>
            </div>
            <div className="notification-zone"></div>
            <div>
                <div id="stripoSettingsContainer">Loading...</div>
                <div id="stripoPreviewContainer"></div>
            </div>
        </div>
    );
}