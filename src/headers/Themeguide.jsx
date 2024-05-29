import React from 'react';
import {Logo} from './/Logo.jsx';
import '../styles/Themeguide.css';


/* basic 말풍선 버전 상단바 */
/*로고 이미지를 클릭하면 웰컴 페이지로 이동*/
export function Themeguide(){
    const handleStep1 = () => {
        window.location.href = "/step1";
    };

    const handleThumbnail = () => {
        window.location.href = "/step2/thumbnail";
    };
    const handlePassword = () => {
        window.location.href = "/step2/password";
    };

    const handleFriendlist = () => {
        window.location.href = "/step2/friendlist";
    };

    const handleTabbar = () => {
        window.location.href = "/step2/tabbar";
    };

    const handleChatroom = () => {
        const themeType = localStorage.getItem("themeType");
        switch (themeType) {
            case "1":
                window.location.href = "/step2/Chatroom";
                break;
            case "2":
                window.location.href = "/step2/CharacterChatroom";
                break;
            default:
                // Handle the case where themeType is missing or invalid
                console.warn("오류 발생! 처음부터 다시 시작해주세요.");
                break;
        }
    };

    const handlenNotification = () => {
        window.location.href = "/step2/notification";
    };

    const handleStep3 = () => {
        window.location.href = "/step3/thememaking";
    };



    return(
        <div className='div-wrapper'>
        <Logo />
        <div className='menu'>
                <div className='step1' onClick={handleStep1}>STEP 1. 테마 정보</div>
                <div className='step2'>
                    <div className='first-row'>
                        STEP 2. 테마 제작
                    </div>
                    <div className='second-row'>
                        <div className='thumbnail' onClick={handleThumbnail}>썸네일</div>
                        <div className='password' onClick={handlePassword}>비밀번호</div>
                        <div className='friendlist' onClick={handleFriendlist}>친구 목록</div>
                        <div className='tabbar' onClick={handleTabbar}>탭바</div>
                        <div className='chatroom' onClick={handleChatroom}>채팅방</div>
                        <div className='notification' onClick={handlenNotification}>알림창</div>
                    </div>
                </div>
                <div className='step3' onClick={handleStep3}>STEP 3. 테마 다운</div>
            </div>
        </div>
    );
}