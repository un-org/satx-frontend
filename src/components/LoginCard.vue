<template>
    <div>
        <div class="loginForm" v-if="!submitted">
            <p v-if="!errMessage" class="cardTitle">Login</p>
            <p v-if="errMessage" class="cardTitle err">{{ errMessage}}</p>

            <form name="login" v-on:submit.prevent="submitForm">
                <svg id="userIcon" xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#c4c4c4" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <circle cx="12" cy="7" r="4" />
                    <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                </svg>

                <input @click="errMessage ? errMessage = '' : {}" id="userID" class="form_field" name="userID" v-model="userID" autocapitalize="off" placeholder="Username or Email" autocomplete="off" required>
                <div v-bind:class="{errLine: errMessage}" class="bottomLine-1"></div>

                <svg id="passIcon" xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-lock" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#c4c4c4" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <rect x="5" y="11" width="14" height="10" rx="2" />
                    <circle cx="12" cy="16" r="1" />
                    <path d="M8 11v-4a4 4 0 0 1 8 0v4" />
                </svg>

                <input @click="errMessage ? errMessage = '' : {}" type="password" id="password" class="form_field" name="password" style="margin-left: 25px;" v-model="password" placeholder="Password" required>
                <div v-bind:class="{errLine: errMessage}" class="bottomLine-2"></div>

                <svg v-if="hidePassword" xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-eye selectable_icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" v-on:click="togglePassword()">
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <circle cx="12" cy="12" r="2" />
                    <path d="M2 12l1.5 2a11 11 0 0 0 17 0l1.5 -2" />
                    <path d="M2 12l1.5 -2a11 11 0 0 1 17 0l1.5 2" />
                </svg>

                <svg v-if="!hidePassword" @click="togglePassword()" class="selectable_icon" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" version="1.1" id="svg4828" width="24.25" height="24.25">
                    <metadata id="metadata4834">
                        <rdf:RDF>
                            <cc:Work rdf:about="">
                                <dc:format>image/svg+xml</dc:format>
                                <dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage" />
                            </cc:Work>
                        </rdf:RDF>
                    </metadata>
                    <defs id="defs4832" />
                    <sodipodi:namedview pagecolor="#ffffff" bordercolor="#666666" borderopacity="100" objecttolerance="10" gridtolerance="10" guidetolerance="10" inkscape:pageopacity="0" inkscape:pageshadow="2" inkscape:window-width="640" inkscape:window-height="480" id="namedview4830" />
                    <inkscape:clipboard style="font-variant-east_asian:normal;opacity:1;vector-effect:none;fill:    ;fill-opacity:1;stroke-width:0.75781249;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1" min="3.3750003,2.8125006" max="27.624999,27.0625" />
                    <g transform="matrix(0.75781249,0,0,0.75781249,0.85253882,1.3735348)" id="g4792">
                        <g id="g4782">
                            <g id="g4773">
                                <g id="g4763" transform="matrix(1.3333333,0,0,1.3333333,-1.1249997,-1.8124996)">
                                    <path id="path4743" d="M 0,0 H 24 V 24 H 0 Z" inkscape:connector-curvature="0" style="stroke:none" />
                                    <circle id="circle4745" r="2" cy="12" cx="12" />
                                    <path id="path4747" d="m 2,12 1.5,2 a 11,11 0 0 0 17,0 L 22,12" inkscape:connector-curvature="0" />
                                    <path id="path4749" d="m 2,12 1.5,-2 a 11,11 0 0 1 17,0 l 1.5,2" inkscape:connector-curvature="0" />
                                </g>
                             </g>
                        </g>
                    </g>
                </svg>

                <router-link to='' id='forgot_link'>Forgot Password?</router-link>

                <input type="submit" value="Login">

            </form>

            <div>
             
            <img style="width: 75x; height: 75px;" src="../assets/sat_logo.png">

            </div>

        </div>

        <Loading v-if="submitted" />
    </div>
</template>

<style scoped>
.cardTitle {
    font-size: 25px;
    font-weight: 700;
    margin-top: 30px;
    color: var(--main-font-color);
}
.loginForm {
    padding: 20px;
    width: 450px;
    max-width: 800px;
    height: 600px;
    background-color: var(--secondary-color);
    border-radius: 10px;
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
}

@media only screen and (max-height: 710px) {
    .loginForm {
        top: calc(50% + 84px);
    }
}

.err {
    color: var(--error-red);
    text-align: center;
}

@media only screen and (max-width: 305px) {
    .cardTitle {
        font-size: 20px;
        margin-top: 35px;
    }
}

@media only screen and (max-width: 250px) {
    .cardTitle {
        font-size: 15px;
        margin-top: 42px;
    }
}

form {
    margin-top: 40px;
}

input,
select,
textarea {
    outline: 0;
    border: 0;
    width: 80%;
    padding: 12px;
    background-color: inherit;
    color: var(--main-font-color);
    box-sizing: border-box;
    margin-top: 30px;
    margin-bottom: 50px;
    height: 30px;
    font-size: 18px;
}

input::placeholder {
    font-size: 18px;
    color: var(--placeholder);
}

@keyframes form_field_animation {
    from {
        width: 80%;
        margin-left: 0%;
    }
    to {
        width: 85%;
        margin-left: -2%;
    }
}

.form_field {
    width: 75%;
    padding-top: 12px;
}
.form_field::-webkit-input-placeholder {
    opacity: 0.5;
}

.form_field:focus + .bottomLine-1 {
    border-bottom: 2px solid var(--main-font-color);
    animation-name: form_field_animation;
    animation-duration: 1s;
    width: 85%;
    margin-left: -2%;
}
.form_field:focus + .bottomLine-2 {
    border-bottom: 2px solid var(--main-font-color);
    animation-name: form_field_animation;
    animation-duration: 1s;
    width: 85%;
    margin-left: -2%;
}

input[type="submit"] {
    width: 93%;
    font-size: 1rem;
    font-weight: 900;
    text-align: center;
    background: linear-gradient( white 0%, #323a45 0%);
    border-radius: 16px;
    padding: 0px 0px;
    cursor: pointer;
    height: 45px;
    color: white;
}

input[type="submit"]:hover {
    background: linear-gradient(250deg, white 0%, #323a45 0%);
}

.selectable_icon {
    position: relative;
    top: 8px;
    stroke: var(--main-font-color);
}
.selectable_icon:hover {
    stroke-width: 2.5px;
}

@media only screen and (max-width: 800px) {
    .loginForm {
        width: 60%;
    }
}
@media only screen and (max-width: 530px) {
    .loginForm {
        width: 100%;
        background: var(--primary-color);
    }

    input {
        background: var(--primary-color);
    }
}

#forgot_link {
    display: block;
    margin-top: -20px;
    width: 93%;
    text-align: right;
    font-weight: 400;
    font-size: 14px;
    color: var(--link-color);
}

.bottomLine-1 {
    border-bottom: 1px solid var(--main-font-color);
    width: 80%;
    position: absolute;
    top: 197px;
    left: calc(50% - (80% / 2));
}

.bottomLine-2 {
    border-bottom: 1px solid var(--main-font-color);
    width: 80%;
    position: absolute;
    top: 305px;
    left: calc(50% - (80% / 2));
}

.errLine {
    border-bottom: 1px solid #f33;
}

#userIcon {
    position: absolute;
    left: 37px;
    top: 150px;
    stroke: var(--main-font-color);
}

#passIcon {
    position: absolute;
    left: 37px;
    top: 259px;
    stroke: var(--main-font-color);
}

.otherOption {
    margin-bottom: 30px;
    font-weight: 300;
    color: var(--soft-text);
}

#g4763 {
    fill: none;
    stroke: var(--main-font-color);
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
}
#g4763:hover {
    stroke-width: 2.5px;
}
#rect4765 {
    fill: var(--main-font-color);
    fill-opacity: 1;
    stroke: var(--main-font-color);
    stroke-width: 1.5;
    stroke-miterlimit: 4;
    stroke-dasharray: none;
    stroke-opacity: 0;
}
</style>